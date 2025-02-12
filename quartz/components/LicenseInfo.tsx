import { QuartzComponentConstructor, QuartzComponent } from "./types"
import "./styles/licenseinfo.scss"

interface LicenseIconMap {
  [key: string]: {
    url: string
    icon: string
  }
}

const LICENSE_ICONS: LicenseIconMap = {
  CC: {
    url: "https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1",
    icon: "CC"
  },
  BY: {
    url: "https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1",
    icon: "BY"
  },
  SA: {
    url: "https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1",
    icon: "SA"
  },
  NC: {
    url: "https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1",
    icon: "NC"
  },
  ND: {
    url: "https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1",
    icon: "ND"
  },
  ZERO: {
    url: "https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1",
    icon: "ZERO"
  }
}

const LicenseInfo: QuartzComponent = ({ fileData, cfg }) => {
  const author = fileData.frontmatter?.author as string | undefined
  const authorUrl = fileData.frontmatter?.["authorURL"] as string | undefined
  const license = fileData.frontmatter?.license as string | undefined
  const title = fileData.frontmatter?.title as string | undefined
  const publishDate = fileData.frontmatter?.["date published"] as string | undefined
  const year = publishDate ? new Date(publishDate).getFullYear() : new Date().getFullYear()
  
  // Clean up the slug to prevent path duplication
  const cleanSlug = fileData.slug?.replace(/^\//, '') ?? ''  // Just remove leading slash
  const currentPageUrl = `/${cleanSlug}`

  if (!author || !license || !title) return null

  const getLicenseUrl = (licenseStr: string) => {
    // Remove version number and clean up the license string
    const cleanLicense = licenseStr.replace(/\s+/g, '-').toLowerCase()
    return `https://creativecommons.org/licenses/${cleanLicense}/?ref=chooser-v1`
  }

  const getLicenseComponents = (licenseStr: string): string[] => {
    // Always include CC
    const components = ['CC']
    
    // Parse the license string
    const parts = licenseStr.toUpperCase().split(/[\s-]+/)
    
    parts.forEach(part => {
      if (part === 'BY' || part === 'SA' || part === 'NC' || part === 'ND' || part === 'ZERO') {
        components.push(part)
      }
    })

    return components
  }

  const getLicenseImages = (licenseStr: string) => {
    const components = getLicenseComponents(licenseStr)
    
    return (
      <div className="license-icons">
        {components.map((component, index) => {
          const iconInfo = LICENSE_ICONS[component]
          if (!iconInfo) return null
          
          return (
            <img 
              key={index}
              className="license-icon"
              src={iconInfo.url}
              alt={iconInfo.icon}
              title={iconInfo.icon}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="license-info quartz-license-info">
      <a 
        href={getLicenseUrl(license)} 
        target="_blank" 
        rel="license noopener noreferrer" 
        className="license-link"
      >
        {getLicenseImages(license)}
      </a>
      <p className="license-text">
        <a property="dct:title" rel="cc:attributionURL" href={currentPageUrl}>
          {title}
        </a> ({year}) by{" "}
        <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href={authorUrl}>
          {author}
        </a> is licensed under{" "}
        <a 
          href={getLicenseUrl(license)} 
          target="_blank" 
          rel="license noopener noreferrer"
        >
          {license}
        </a>
      </p>
    </div>
  )
}

export default (() => LicenseInfo) satisfies QuartzComponentConstructor