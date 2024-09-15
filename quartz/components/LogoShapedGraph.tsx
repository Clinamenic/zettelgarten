import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { QuartzComponentProps } from './types'
import { FileNode, GraphData } from './Graph'

export function LogoShapedGraph(props: QuartzComponentProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    // Load the logo image
    const img = new Image()
    img.src = '/static/clinamenic_logo_gravity_map.png'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      ctx?.drawImage(img, 0, 0)
      const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height)

      // Create the graph
      const svg = d3.select(ref.current).append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', [0, 0, img.width, img.height])

      // Create a force simulation
      const simulation = d3.forceSimulation(props.graph.nodes)
        .force('link', d3.forceLink(props.graph.links).id(d => d.id))
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(img.width / 2, img.height / 2))
        .force('image', forceImage(imageData))

      // Add links
      const link = svg.append('g')
        .selectAll('line')
        .data(props.graph.links)
        .join('line')
        .attr('stroke', '#999')
        .attr('stroke-opacity', 0.6)

      // Add nodes
      const node = svg.append('g')
        .selectAll('circle')
        .data(props.graph.nodes)
        .join('circle')
        .attr('r', 5)
        .attr('fill', '#69b3a2')
        .call(drag(simulation))

      // Add interactivity
      node.on('click', (event, d) => {
        window.location.href = d.url
      })

      // Update positions on each tick of the simulation
      simulation.on('tick', () => {
        link
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y)

        node
          .attr('cx', d => d.x)
          .attr('cy', d => d.y)
      })
    }
  }, [props.graph])

  // Custom force to attract nodes to non-transparent areas of the image
  function forceImage(imageData) {
    return function(alpha) {
      return function(d) {
        const x = Math.floor(d.x)
        const y = Math.floor(d.y)
        const i = (y * imageData.width + x) * 4
        const r = imageData.data[i]
        const g = imageData.data[i + 1]
        const b = imageData.data[i + 2]
        const a = imageData.data[i + 3]
        
        if (a > 0) {
          d.vx += (x - d.x) * alpha
          d.vy += (y - d.y) * alpha
        }
      }
    }
  }

  // Drag function for interactivity
  function drag(simulation) {
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart()
      event.subject.fx = event.subject.x
      event.subject.fy = event.subject.y
    }

    function dragged(event) {
      event.subject.fx = event.x
      event.subject.fy = event.y
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0)
      event.subject.fx = null
      event.subject.fy = null
    }

    return d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended)
  }

  return <div ref={ref} style={{ width: '100%', height: '500px' }} />
}