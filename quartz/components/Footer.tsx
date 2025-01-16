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

        <div class="footer-container" style="box-sizing: border-box;">

          <div class="footer-section" style="box-sizing: border-box; width: 100%; !important;">

              <a href="#" class="Clinamenic-Slide">
                <img
                  src="https://github.com/Clinamenic/Zettelgarten/blob/v4/quartz/static/img/SSC%20Slide.gif?raw=true"
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



          <div class="footer-section" style="box-sizing: border-box; border-bottom: 0px;">

            <div class="gallery2" style="gap: 1rem;">

            <div class="gallery2-fixed" style="margin: 0rem 0rem 0rem 0.75rem !important; justify-content: left;">

              <p style="padding: 0rem 0rem 0rem 0rem; margin: 0rem 0rem 0rem 0rem; font-size: 0.7rem; justify-content: left; text-align: left;">
              <a href="https://bsky.app/profile/clinamenic.bsky.social">Bluesky</a><br />
              <a href="https://warpcast.com/clinamenic">Farcaster</a><br />
              <a href="https://www.x.com/clinamenic">Twitter</a><br />
              <a href="https://www.linkedin.com/in/clinamenic-llc-2178b1278/">LinkedIn</a><br />
              </p>

              <p style="padding: 0rem 0rem 0rem 0rem; margin: 0rem 0rem 0rem 0rem; font-size: 0.7rem; justify-content: left; text-align: left;">
              <a href="https://catalog.fyi/users/Clinamenic">Catalog.fyi</a><br />
              <a href="https://www.github.com/clinamenic">Github</a><br />
              <a href="https://letterboxd.com/clinamenic/">Letterboxd</a><br />
              </p>

            </div>

            <p style="padding: 0rem 0rem 0rem 0rem; margin: 0rem 0.75rem 0rem 0.75rem; font-size: 0.7rem; justify-content: left; text-align: left;">
              Created with&nbsp;
              <a href="https://quartz.jzhao.xyz/">Quartz v4.3.1</a>
              &nbsp;© 2024<br />
              Published to Arweave via&nbsp;
              <a href="https://protocol.land/#/repository/4323e52e-edf7-4f09-8d3c-b9add2bb14cb">Protocol.land</a><br />
              Hosted on IPFS via <a href="https://bafybeid3ql53i7y42jgphmj52vv76c5joxgmkadpsdhvc764vc6rmhlu2q.ipfs.flk-ipfs.xyz/">Fleek</a><br />
              Designed by <a href="https://www.clinamenic.com">Clinamenic LLC</a>
            </p>

            </div>

            
          
          </div>

        </div>

      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor