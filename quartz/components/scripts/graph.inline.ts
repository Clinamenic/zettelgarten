import type { ContentDetails } from "../../plugins/emitters/contentIndex"
import {
  SimulationNodeDatum,
  SimulationLinkDatum,
  Simulation,
  forceSimulation,
  forceManyBody,
  forceCenter,
  forceLink,
  forceCollide,
  zoomIdentity,
  select,
  drag,
  zoom,
} from "d3"
import { Text, Graphics, Application, Container, Circle } from "pixi.js"
import { Group as TweenGroup, Tween as Tweened } from "@tweenjs/tween.js"
import { registerEscapeHandler, removeAllChildren } from "./util"
import { FullSlug, SimpleSlug, getFullSlug, resolveRelative, simplifySlug } from "../../util/path"
import { D3Config } from "../Graph"

type GraphicsInfo = {
  color: string
  gfx: Graphics
  alpha: number
  active: boolean
}

type NodeData = {
  id: SimpleSlug
  text: string
  tags: string[]
} & SimulationNodeDatum

type SimpleLinkData = {
  source: SimpleSlug
  target: SimpleSlug
}

type LinkData = {
  source: NodeData
  target: NodeData
} & SimulationLinkDatum<NodeData>

type LinkRenderData = GraphicsInfo & {
  simulationData: LinkData
}

type NodeRenderData = GraphicsInfo & {
  simulationData: NodeData
  label: Text
}

const localStorageKey = "graph-visited"
function getVisited(): Set<SimpleSlug> {
  return new Set(JSON.parse(localStorage.getItem(localStorageKey) ?? "[]"))
}

function addToVisited(slug: SimpleSlug) {
  const visited = getVisited()
  visited.add(slug)
  localStorage.setItem(localStorageKey, JSON.stringify([...visited]))
}

type TweenNode = {
  update: (time: number) => void
  stop: () => void
}

function getCirclePosition(index: number, total: number, radius: number): { x: number; y: number } {
  const angle = ((index / total) * 2 * Math.PI) - (Math.PI / 2)
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle)
  }
}

// Define the list of topic tag prefixes (near the top of the file)
const TOPIC_PREFIXES = ["ECON", "CHEM", "BIOL", "MISC"]

function isTopicTag(tagId: string): boolean {
  // Remove "tags/" prefix
  const tag = tagId.replace("tags/", "")
  // Check if the tag starts with any of our topic prefixes followed by "/"
  return TOPIC_PREFIXES.some(prefix => tag.startsWith(prefix + "/"))
}

async function renderGraph(container: string, fullSlug: FullSlug) {
  const slug = simplifySlug(fullSlug)
  const visited = getVisited()
  const graph = document.getElementById(container)
  if (!graph) return
  
  // Clean up any existing canvases first
  removeAllChildren(graph)
  
  // Also remove any canvas elements that might have been appended outside the container
  const existingCanvases = document.querySelectorAll(`canvas[data-graph-container="${container}"]`)
  existingCanvases.forEach(canvas => canvas.remove())

  let {
    drag: enableDrag,
    zoom: enableZoom,
    depth,
    scale,
    repelForce,
    centerForce,
    linkDistance,
    fontSize,
    opacityScale,
    removeTags,
    showTags,
    focusOnHover,
  } = JSON.parse(graph.dataset["cfg"]!) as D3Config

  const data: Map<SimpleSlug, ContentDetails> = new Map(
    Object.entries<ContentDetails>(await fetchData).map(([k, v]) => [
      simplifySlug(k as FullSlug),
      v,
    ]),
  )
  const links: SimpleLinkData[] = []
  const tags: SimpleSlug[] = []
  const validLinks = new Set(data.keys())

  const tweens = new Map<string, TweenNode>()
  for (const [source, details] of data.entries()) {
    const outgoing = details.links ?? []

    for (const dest of outgoing) {
      if (validLinks.has(dest)) {
        links.push({ source: source, target: dest })
      }
    }

    if (showTags) {
      const localTags = details.tags
        .filter((tag) => !removeTags.includes(tag))
        .map((tag) => simplifySlug(("tags/" + tag) as FullSlug))

      tags.push(...localTags.filter((tag) => !tags.includes(tag)))

      for (const tag of localTags) {
        links.push({ source: source, target: tag })
      }
    }
  }

  const neighbourhood = new Set<SimpleSlug>()
  const wl: (SimpleSlug | "__SENTINEL")[] = [slug, "__SENTINEL"]
  if (depth >= 0) {
    while (depth >= 0 && wl.length > 0) {
      // compute neighbours
      const cur = wl.shift()!
      if (cur === "__SENTINEL") {
        depth--
        wl.push("__SENTINEL")
      } else {
        neighbourhood.add(cur)
        const outgoing = links.filter((l) => l.source === cur)
        const incoming = links.filter((l) => l.target === cur)
        wl.push(...outgoing.map((l) => l.target), ...incoming.map((l) => l.source))
      }
    }
  } else {
    validLinks.forEach((id) => neighbourhood.add(id))
    if (showTags) tags.forEach((tag) => neighbourhood.add(tag))
  }

  const nodes = [...neighbourhood].map((url) => {
    const text = url.startsWith("tags/") ? "#" + url.substring(5) : (data.get(url)?.title ?? url)
    return {
      id: url,
      text,
      tags: data.get(url)?.tags ?? [],
    }
  })
  const graphData: { nodes: NodeData[]; links: LinkData[] } = {
    nodes,
    links: links
      .filter((l) => neighbourhood.has(l.source) && neighbourhood.has(l.target))
      .map((l) => ({
        source: nodes.find((n) => n.id === l.source)!,
        target: nodes.find((n) => n.id === l.target)!,
      })),
  }

  const tagNodes = nodes.filter(n => n.id.startsWith("tags/"))
  const contentNodes = nodes.filter(n => !n.id.startsWith("tags/"))

  // Calculate radius based on content nodes count
  const radius = Math.max(Math.sqrt(contentNodes.length) * linkDistance * 3, 200)

  // After filtering nodes
  console.log("Initial node counts:", {
    total: nodes.length,
    tags: tagNodes.length,
    content: contentNodes.length,
    firstContent: contentNodes[0]
  })

  // Split tag nodes into topic tags and regular tags
  const topicTagNodes = tagNodes.filter(n => isTopicTag(n.id))
  const regularTagNodes = tagNodes.filter(n => !isTopicTag(n.id))

  // Add debug logging
  console.log("Topic tag nodes:", {
    total: topicTagNodes.length,
    first: topicTagNodes[0],
    nodes: topicTagNodes.map(n => ({id: n.id, fx: n.fx, fy: n.fy}))
  })

  // Position topic tags in the outer circle
  topicTagNodes.forEach((node, i) => {
    const pos = getCirclePosition(i, topicTagNodes.length, radius)
    node.fx = pos.x
    node.fy = pos.y
    
    // Add debug logging for this specific tag
    if (node.id.includes('CHEM')) {
      console.log(`CHEM tag position:`, {
        id: node.id,
        index: i,
        total: topicTagNodes.length,
        position: pos,
        radius: radius,
        finalPos: {
          fx: node.fx,
          fy: node.fy
        }
      })
    }
  })

  // Initialize regular tags and content nodes with valid starting positions
  const innerNodes = [...contentNodes, ...regularTagNodes]
  innerNodes.forEach((node) => {
    const angle = Math.random() * 2 * Math.PI
    const r = Math.random() * (radius * 0.3) // 30% of the full radius
    node.x = r * Math.cos(angle)
    node.y = r * Math.sin(angle)
    node.vx = 0
    node.vy = 0
  })

  console.log("After position initialization:", {
    sampleTag: tagNodes[0],
    sampleContent: contentNodes[0]
  })

  // Modify simulation setup
  const simulation: Simulation<NodeData, LinkData> = forceSimulation(graphData.nodes)
    .force("charge", forceManyBody().strength(d => 
      d.id.startsWith("tags/") ? -30 : -80
    ))
    .force("center", forceCenter(0, 0).strength(0.5))
    .force("collision", forceCollide().radius(d => 
      d.id.startsWith("tags/") ? 20 : 10
    ))
    .force("link", forceLink(graphData.links)
      .distance(d => d.source.id.startsWith("tags/") || d.target.id.startsWith("tags/") 
        ? radius * 0.1 
        : radius * 0.05)
    )
    .force("bound", () => {
      // Handle inner nodes (content + regular tags) - keep them inside
      for (const node of innerNodes) {
        const r = Math.sqrt(node.x * node.x + node.y * node.y)
        if (r > radius * 0.8) {
          const scale = (radius * 0.8) / r
          node.x *= scale
          node.y *= scale
          if (node.vx && node.vy) {
            node.vx *= -0.5
            node.vy *= -0.5
          }
        }
      }

      // Handle topic tag nodes - keep them outside
      for (const node of topicTagNodes) {
        const r = Math.sqrt(node.x * node.x + node.y * node.y)
        if (r < radius * 0.9) {
          const scale = radius / r
          node.x *= scale
          node.y *= scale
          if (node.vx && node.vy) {
            node.vx *= -0.5
            node.vy *= -0.5
          }
        }
      }
    })
    .on("tick", () => {
      // Log positions every 100 ticks to avoid console spam
      if (simulation.tick() % 100 === 0) {
        console.log("Simulation tick:", {
          sampleContentNode: {
            id: contentNodes[0].id,
            x: contentNodes[0].x,
            y: contentNodes[0].y,
            vx: contentNodes[0].vx,
            vy: contentNodes[0].vy
          }
        })
      }
    })

  const width = graph.offsetWidth
  const height = Math.max(graph.offsetHeight, 250)

  // precompute style prop strings as pixi doesn't support css variables
  const cssVars = [
    "--secondary",
    "--tertiary",
    "--gray",
    "--light",
    "--lightgray",
    "--dark",
    "--darkgray",
    "--bodyFont",
  ] as const
  const computedStyleMap = cssVars.reduce(
    (acc, key) => {
      acc[key] = getComputedStyle(document.documentElement).getPropertyValue(key)
      return acc
    },
    {} as Record<(typeof cssVars)[number], string>,
  )

  // calculate color
  const color = (d: NodeData) => {
    const isCurrent = d.id === slug
    if (isCurrent) {
      return computedStyleMap["--secondary"]
    } else if (visited.has(d.id) || d.id.startsWith("tags/")) {
      return computedStyleMap["--tertiary"]
    } else {
      return computedStyleMap["--tertiary"]
    }
  }

  function nodeRadius(d: NodeData) {
    const numLinks = graphData.links.filter(
      (l) => l.source.id === d.id || l.target.id === d.id,
    ).length
    // Make topic tags larger
    if (d.id.startsWith("tags/") && isTopicTag(d.id)) {
      return 8 + Math.sqrt(numLinks)  // Bigger radius for topic tags
    }
    return 2 + Math.sqrt(numLinks)
  }

  let hoveredNodeId: string | null = null
  let hoveredNeighbours: Set<string> = new Set()
  const linkRenderData: LinkRenderData[] = []
  const nodeRenderData: NodeRenderData[] = []
  function updateHoverInfo(newHoveredId: string | null) {
    hoveredNodeId = newHoveredId

    if (newHoveredId === null) {
      hoveredNeighbours = new Set()
      for (const n of nodeRenderData) {
        n.active = false
      }

      for (const l of linkRenderData) {
        l.active = false
      }
    } else {
      hoveredNeighbours = new Set()
      for (const l of linkRenderData) {
        const linkData = l.simulationData
        if (linkData.source.id === newHoveredId || linkData.target.id === newHoveredId) {
          hoveredNeighbours.add(linkData.source.id)
          hoveredNeighbours.add(linkData.target.id)
        }

        l.active = linkData.source.id === newHoveredId || linkData.target.id === newHoveredId
      }

      for (const n of nodeRenderData) {
        n.active = hoveredNeighbours.has(n.simulationData.id)
      }
    }
  }

  let dragStartTime = 0
  let dragging = false

  function renderLinks() {
    tweens.get("link")?.stop()
    const tweenGroup = new TweenGroup()

    for (const l of linkRenderData) {
      let alpha = 1

      // if we are hovering over a node, we want to highlight the immediate neighbours
      // with full alpha and the rest with default alpha
      if (hoveredNodeId) {
        alpha = l.active ? 1 : 0.2
      }

      l.color = l.active ? "#D3D3D3" : "#36454F" // computedStyleMap["--gray"] : computedStyleMap["--light"]
      tweenGroup.add(new Tweened<LinkRenderData>(l).to({ alpha }, 200))
    }

    tweenGroup.getAll().forEach((tw) => tw.start())
    tweens.set("link", {
      update: tweenGroup.update.bind(tweenGroup),
      stop() {
        tweenGroup.getAll().forEach((tw) => tw.stop())
      },
    })
  }

  function renderLabels() {
    tweens.get("label")?.stop()
    const tweenGroup = new TweenGroup()

    const defaultScale = 1 / scale
    const activeScale = defaultScale * 1.1
    for (const n of nodeRenderData) {
      const nodeId = n.simulationData.id

      if (hoveredNodeId === nodeId) {
        tweenGroup.add(
          new Tweened<Text>(n.label).to(
            {
              alpha: 1,
              scale: { x: activeScale, y: activeScale },
            },
            100,
          ),
        )
      } else {
        tweenGroup.add(
          new Tweened<Text>(n.label).to(
            {
              alpha: n.label.alpha,
              scale: { x: defaultScale, y: defaultScale },
            },
            100,
          ),
        )
      }
    }

    tweenGroup.getAll().forEach((tw) => tw.start())
    tweens.set("label", {
      update: tweenGroup.update.bind(tweenGroup),
      stop() {
        tweenGroup.getAll().forEach((tw) => tw.stop())
      },
    })
  }

  function renderNodes() {
    tweens.get("hover")?.stop()

    const tweenGroup = new TweenGroup()
    for (const n of nodeRenderData) {
      let alpha = 1

      // if we are hovering over a node, we want to highlight the immediate neighbours
      if (hoveredNodeId !== null && focusOnHover) {
        alpha = n.active ? 1 : 0.2
      }

      tweenGroup.add(new Tweened<Graphics>(n.gfx, tweenGroup).to({ alpha }, 200))
    }

    tweenGroup.getAll().forEach((tw) => tw.start())
    tweens.set("hover", {
      update: tweenGroup.update.bind(tweenGroup),
      stop() {
        tweenGroup.getAll().forEach((tw) => tw.stop())
      },
    })
  }

  function renderPixiFromD3() {
    renderNodes()
    renderLinks()
    renderLabels()
  }

  tweens.forEach((tween) => tween.stop())
  tweens.clear()

  const app = new Application()
  await app.init({
    width,
    height,
    antialias: true,
    autoStart: false,
    autoDensity: true,
    backgroundAlpha: 0,
    preference: "webgpu",
    resolution: window.devicePixelRatio,
    eventMode: "static",
  })
  
  // Add a data attribute to track which container this canvas belongs to
  app.canvas.setAttribute('data-graph-container', container)
  graph.appendChild(app.canvas)

  const stage = app.stage
  stage.interactive = false

  const labelsContainer = new Container<Text>({ zIndex: 3 })
  const nodesContainer = new Container<Graphics>({ zIndex: 2 })
  const linkContainer = new Container<Graphics>({ zIndex: 1 })
  stage.addChild(nodesContainer, labelsContainer, linkContainer)

  for (const n of graphData.nodes) {
    const nodeId = n.id

    const label = new Text({
      interactive: false,
      eventMode: "none",
      text: n.text,
      alpha: 0,
      anchor: { x: 0.5, y: 1.2 },
      style: {
        fontSize: fontSize * 15,
        fill: "#fef9eb", // computedStyleMap["--dark"],
        fontFamily: computedStyleMap["--bodyFont"],
        stroke: "#000000",
        strokeThickness: 0.5,
        lineJoin: "round",
      },
      resolution: window.devicePixelRatio * 6,
    })
    label.scale.set(1 / scale)

    let oldLabelOpacity = 0
    const isTagNode = nodeId.startsWith("tags/")
    const gfx = new Graphics({
      interactive: true,
      label: nodeId,
      eventMode: "static",
      hitArea: new Circle(0, 0, nodeRadius(n)),
      cursor: "pointer",
    })
      .circle(0, 0, nodeRadius(n))
      .fill({ color: isTopicTag(n.id) ? "#181D21" : (isTagNode ? "#666666" : color(n)) })
      .stroke({ 
        width: isTopicTag(n.id) ? 3 : (isTagNode ? 2 : 0.5), 
        color: isTopicTag(n.id) ? "#FFA500" : (isTagNode ? "#ffffff" : "#000000"),
      })
      .on("pointerover", (e) => {
        updateHoverInfo(e.target.label)
        oldLabelOpacity = label.alpha
        if (!dragging) {
          renderPixiFromD3()
        }
      })
      .on("pointerleave", () => {
        updateHoverInfo(null)
        label.alpha = oldLabelOpacity
        if (!dragging) {
          renderPixiFromD3()
        }
      })

    nodesContainer.addChild(gfx)
    labelsContainer.addChild(label)

    const nodeRenderDatum: NodeRenderData = {
      simulationData: n,
      gfx,
      label,
      color: color(n),
      alpha: 1,
      active: false,
    }

    nodeRenderData.push(nodeRenderDatum)
  }

  for (const l of graphData.links) {
    const gfx = new Graphics({ interactive: false, eventMode: "none" })
    linkContainer.addChild(gfx)

    const linkRenderDatum: LinkRenderData = {
      simulationData: l,
      gfx,
      color: "#36454F", // computedStyleMap["--light"],
      alpha: 1,
      active: false,
    }

    linkRenderData.push(linkRenderDatum)
  }

  let currentTransform = zoomIdentity
    .translate(width/2, height/2)  // Center the view
    .scale(Math.min(width, height) / (radius * 2.5))  // Scale to fit all nodes

  if (enableDrag) {
    select<HTMLCanvasElement, NodeData | undefined>(app.canvas).call(
      drag<HTMLCanvasElement, NodeData | undefined>()
        .container(() => app.canvas)
        .subject(() => {
          const node = graphData.nodes.find((n) => n.id === hoveredNodeId)
          // Don't allow dragging of topic tag nodes
          return node && !isTopicTag(node.id) ? node : null
        })
        .on("start", function dragstarted(event) {
          if (!event.subject) return // Skip if no valid drag subject
          if (!event.active) simulation.alphaTarget(1).restart()
          event.subject.fx = event.subject.x
          event.subject.fy = event.subject.y
          event.subject.__initialDragPos = {
            x: event.subject.x,
            y: event.subject.y,
            fx: event.subject.fx,
            fy: event.subject.fy,
          }
          dragStartTime = Date.now()
          dragging = true
        })
        .on("drag", function dragged(event) {
          const initPos = event.subject.__initialDragPos
          event.subject.fx = initPos.x + (event.x - initPos.x) / currentTransform.k
          event.subject.fy = initPos.y + (event.y - initPos.y) / currentTransform.k
        })
        .on("end", function dragended(event) {
          if (!event.active) simulation.alphaTarget(0)
          event.subject.fx = null
          event.subject.fy = null
          dragging = false

          // if the time between mousedown and mouseup is short, we consider it a click
          if (Date.now() - dragStartTime < 500) {
            const node = graphData.nodes.find((n) => n.id === event.subject.id) as NodeData
            const targ = resolveRelative(fullSlug, node.id)
            window.spaNavigate(new URL(targ, window.location.toString()))
          }
        }),
    )
  } else {
    for (const node of nodeRenderData) {
      node.gfx.on("click", () => {
        const targ = resolveRelative(fullSlug, node.simulationData.id)
        window.spaNavigate(new URL(targ, window.location.toString()))
      })
    }
  }

  if (enableZoom) {
    select<HTMLCanvasElement, NodeData>(app.canvas).call(
      zoom<HTMLCanvasElement, NodeData>()
        .extent([
          [0, 0],
          [width, height],
        ])
        .scaleExtent([0.125, 8])
        .on("zoom", ({ transform }) => {
          currentTransform = transform
          stage.scale.set(transform.k, transform.k)
          stage.position.set(transform.x, transform.y)
  
          // Adjust these values to control when labels appear
          const minZoom = 8 // Minimum zoom level for labels to start appearing
          const maxZoom = 9 // Zoom level at which labels are fully visible
  
          // Calculate opacity based on zoom level
          const scale = transform.k * opacityScale
          let scaleOpacity = Math.max((scale - minZoom) / (maxZoom - minZoom), 0)
          scaleOpacity = Math.min(scaleOpacity, 1) // Ensure opacity doesn't exceed 1
  
          const activeNodes = nodeRenderData.filter((n) => n.active).flatMap((n) => n.label)
  
          for (const label of labelsContainer.children) {
            if (!activeNodes.includes(label)) {
              label.alpha = scaleOpacity
            }
          }
        }),
    )
  }

  function animate(time: number) {
    for (const n of nodeRenderData) {
      const { x, y } = n.simulationData
      if (!x || !y) continue
      n.gfx.position.set(x + width / 2, y + height / 2)
      if (n.label) {
        n.label.position.set(x + width / 2, y + height / 2)
      }
    }

    for (const l of linkRenderData) {
      const linkData = l.simulationData
      l.gfx.clear()
      l.gfx.moveTo(linkData.source.x! + width / 2, linkData.source.y! + height / 2)
      l.gfx
        .lineTo(linkData.target.x! + width / 2, linkData.target.y! + height / 2)
        .stroke({ alpha: l.alpha, width: 0.25, color: l.color })
    }

    tweens.forEach((t) => t.update(time))
    app.renderer.render(stage)
    requestAnimationFrame(animate)
  }

  const graphAnimationFrameHandle = requestAnimationFrame(animate)
  window.addCleanup(() => cancelAnimationFrame(graphAnimationFrameHandle))
}

document.addEventListener("nav", async (e: CustomEventMap["nav"]) => {
  const slug = e.detail.url
  addToVisited(simplifySlug(slug))
  await renderGraph("graph-container", slug)

  const container = document.getElementById("global-graph-outer")
  const sidebar = container?.closest(".sidebar") as HTMLElement

  function renderGlobalGraph() {
    const slug = getFullSlug(window)
    container?.classList.add("active")
    if (sidebar) {
      sidebar.style.zIndex = "1"
    }

    renderGraph("global-graph-container", slug)
    registerEscapeHandler(container, hideGlobalGraph)
  }

  function hideGlobalGraph() {
    container?.classList.remove("active")
    if (sidebar) {
      sidebar.style.zIndex = "unset"
    }
  }

  async function shortcutHandler(e: HTMLElementEventMap["keydown"]) {
    if (e.key === "g" && (e.ctrlKey || e.metaKey) && !e.shiftKey) {
      e.preventDefault()
      const globalGraphOpen = container?.classList.contains("active")
      globalGraphOpen ? hideGlobalGraph() : renderGlobalGraph()
    }
  }

  const containerIcon = document.getElementById("global-graph-icon")
  containerIcon?.addEventListener("click", renderGlobalGraph)
  window.addCleanup(() => containerIcon?.removeEventListener("click", renderGlobalGraph))

  document.addEventListener("keydown", shortcutHandler)
  window.addCleanup(() => document.removeEventListener("keydown", shortcutHandler))
})

