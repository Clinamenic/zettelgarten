import { QuartzComponentConstructor, QuartzComponent } from "./types"
import "./styles/licenseinfo.scss"

const LicenseInfo: QuartzComponent = ({ fileData, cfg }) => {
  const author = fileData.frontmatter?.author
  const authorUrl = fileData.frontmatter?.["authorURL"]
  const license = fileData.frontmatter?.license
  const title = fileData.frontmatter?.title
  const publishDate = fileData.frontmatter?.["date published"]
  const year = publishDate ? new Date(publishDate).getFullYear() : new Date().getFullYear()
  const currentPageUrl = `${cfg.baseUrl}${fileData.slug}`

  if (!author || !license || !title) return null

  const getLicenseUrl = (license: string) => {
    switch (license) {
      case "CC BY-SA 4.0":
        return "https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1"
      // Add more cases for other licenses as needed
      default:
        return ""
    }
  }

  const getLicenseImages = (license: string) => {
    switch (license) {
      case "CC BY-SA 4.0":
        return (
          <>
            <img style={{height: "20px", margin: "0px", marginLeft: "10px", verticalAlign: "middle"}} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="CC" />
            <img style={{height: "20px", margin: "0px", marginLeft: "7px", verticalAlign: "middle"}} src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt="BY" />
            <img style={{height: "20px", margin: "0px", marginLeft: "7px", verticalAlign: "middle"}} src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt="SA" />
          </>
        )
      // Add more cases for other licenses as needed
      default:
        return null
    }
  }

  const styles = {

  }

  return (
    <div className="license-info quartz-license-info" xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
      <div className="license-icons">
        <a 
          href={getLicenseUrl(license)} 
          target="_blank" 
          rel="license noopener noreferrer" 
        >
          {getLicenseImages(license)}
        </a>
      </div>
      <p style={{textAlign: 'left'}}>
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