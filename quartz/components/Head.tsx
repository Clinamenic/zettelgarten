import { i18n } from "../i18n"
import { FullSlug, joinSegments, pathToRoot } from "../util/path"
import { JSResourceToScriptElement } from "../util/resources"
import { googleFontHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Head: QuartzComponent = ({ cfg, fileData, externalResources }: QuartzComponentProps) => {
    const title = fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title
    const description =
      fileData.frontmatter?.headDescription ??
      fileData.description?.trim() ??
      i18n(cfg.locale).propertyDefaults.description
    const { css, js } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)

    const isAbsoluteUrl = (str: string) => str.startsWith('http://') || str.startsWith('https://')

    const iconPath = fileData.frontmatter?.headIcon 
      ? isAbsoluteUrl(fileData.frontmatter.headIcon)
        ? fileData.frontmatter.headIcon
        : joinSegments(baseDir, fileData.frontmatter.headIcon)
      : joinSegments(baseDir, "static/icon.png")
    
    const ogImagePath = fileData.frontmatter?.bannerURI
      ? isAbsoluteUrl(fileData.frontmatter.bannerURI)
        ? fileData.frontmatter.bannerURI
        : `https://${cfg.baseUrl}/${fileData.frontmatter.bannerURI}`
      : `https://${cfg.baseUrl}/static/og-image.png`

    const umamiId = fileData.frontmatter?.umami_id

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
          </>
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {cfg.baseUrl && <meta property="og:image" content={ogImagePath} />}
        <meta property="og:width" content="1200" />
        <meta property="og:height" content="675" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {cfg.baseUrl && <meta name="twitter:image" content={ogImagePath} />}

        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />
        {css.map((href) => (
          <link key={href} href={href} rel="stylesheet" type="text/css" spa-preserve />
        ))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
        {umamiId && (
          <script
            defer
            src="https://umami-dashboard-h8obdj9qq-clinamenics-projects.vercel.app/script.js"
            data-website-id={umamiId}
          ></script>
        )}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
