import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>

        <div className="footer-section">
          <div className="nav-button">
            <a className="nav-link" href="https://warpcast.com/clinamenic">Farcaster</a>
          </div>
          <div className="nav-button">
            <a className="nav-link" href="https://www.github.com/clinamenic">Github</a>
          </div>
          <div className="nav-button">
            <a className="nav-link" href="https://www.x.com/clinamenic">Twitter</a>
          </div>
        </div>

          <p>
            {i18n(cfg.locale).components.footer.createdWith}{" "}
            <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
          </p>
        
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
