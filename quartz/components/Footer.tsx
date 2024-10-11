import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

const phrases = [
  "Codeslaw", "Not legal advice", "Solo contendere", "What me, hurry?", "Imopolex G", "Goo goo g'joob", "Binary & Tweed", "Ranch it up", "Live and drink", "wu gwei", "Whigmergy", "Bentocore"
];

function getRandomPhrase(): string {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    const randomPhrase = getRandomPhrase()
    return (
      <footer class={`${displayClass ?? ""}`}>

        <div className="footer-section">

            <a href="#" class="Clinamenic-Slide">
              <img
                src="https://github.com/Clinamenic/Zettelgarten/blob/v4/quartz/static/img/SSC%20Slide.gif?raw=true"
                width="90"
                style="margin: 0rem"
              />
            </a> 

            <div class="newsletter">
              <iframe
                src="https://solosalon.clinamenic.com/embed?minimal=true"
                width="480"
                height="40"
                style="border: 1px solid var(--dark); border-radius: 10px; background: black"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </div>

        </div>

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

        <div className="footer-section" style="border: 0px;">
          <p style="padding: 0rem 0rem 0rem 0rem">
            {i18n(cfg.locale).components.footer.createdWith}{" "}
            <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
          </p>
          <div id="dynamicTextAlt">
              {randomPhrase}
              </div>
          <script dangerouslySetInnerHTML={{__html: `
          document.addEventListener("DOMContentLoaded", function() {
            const dynamicTextElement = document.getElementById("dynamicTextAlt");
            if (dynamicTextElement && dynamicTextElement.textContent === "") {
              dynamicTextElement.textContent = "${randomPhrase}";
            }
          });
        `}} />
        </div>

      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor