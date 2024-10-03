import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? <header>
    <a href="/index.html" style={{ height: '30px' }}>
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 720 720" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,720.000000) scale(0.100000,-0.100000)" stroke="none">
      <path d="M3375 6869 c-264 -23 -521 -75 -760 -154 -668 -222 -1205 -606 -1614
      -1154 -462 -620 -702 -1440 -640 -2188 31 -378 116 -725 259 -1058 299 -697
      809 -1251 1473 -1600 407 -213 831 -336 1300 -374 185 -16 262 -14 281 5 22
      22 23 265 2 287 -10 10 -52 16 -138 21 -541 30 -1094 212 -1528 502 -182 121
      -409 313 -533 451 -314 349 -505 676 -653 1117 l-53 159 337 185 c185 101 508
      278 718 393 l381 209 124 -69 c68 -38 201 -111 296 -163 l171 -94 -72 -37
      c-150 -77 -262 -195 -342 -362 -66 -135 -84 -220 -84 -390 0 -170 18 -255 84
      -390 86 -178 195 -289 371 -376 143 -70 226 -89 400 -89 174 0 257 19 400 89
      176 87 285 198 371 376 66 135 84 220 84 390 0 174 -19 257 -89 400 -81 164
      -185 272 -340 354 l-69 36 291 160 c161 88 297 160 302 160 6 0 141 -72 302
      -160 l291 -160 -69 -36 c-155 -82 -259 -190 -340 -354 -70 -143 -89 -226 -89
      -400 0 -170 18 -255 84 -390 86 -178 195 -289 371 -376 143 -70 226 -89 400
      -89 174 0 257 19 400 89 176 87 285 198 371 376 66 135 84 220 84 390 0 174
      -19 257 -89 400 -82 165 -185 272 -341 354 l-70 37 37 18 c43 20 504 269 603
      326 36 20 225 124 420 231 195 106 358 198 362 204 37 52 -71 465 -202 770
      -299 697 -809 1251 -1473 1600 -330 173 -686 291 -1044 344 -259 39 -508 49
      -738 30z m595 -339 c224 -33 336 -59 520 -120 453 -149 778 -338 1133 -657
      201 -181 430 -475 576 -739 122 -220 296 -675 268 -700 -6 -6 -171 -97 -364
      -203 -194 -105 -510 -276 -701 -381 l-349 -190 -295 162 -296 163 69 36 c155
      82 259 190 340 354 70 143 89 226 89 400 0 174 -19 257 -89 400 -87 176 -198
      285 -376 371 -135 66 -220 84 -390 84 -174 0 -257 -19 -400 -89 -176 -87 -285
      -198 -371 -376 -66 -135 -84 -220 -84 -390 0 -174 19 -257 89 -400 81 -164
      185 -272 340 -354 l69 -36 -291 -160 c-161 -88 -297 -160 -303 -160 -6 0 -142
      72 -302 159 l-291 160 90 48 c145 78 245 186 325 353 66 135 84 220 84 390 0
      170 -18 255 -84 390 -86 178 -195 289 -371 376 -143 70 -226 89 -400 89 -170
      0 -255 -18 -390 -84 -178 -86 -289 -195 -376 -371 -70 -143 -89 -226 -89 -400
      0 -174 19 -257 89 -400 82 -164 185 -272 341 -354 l69 -37 -82 -44 c-45 -24
      -302 -164 -571 -312 -269 -147 -490 -267 -492 -265 -13 12 -28 217 -28 367 1
      539 189 1144 500 1610 177 265 374 479 634 687 458 366 1025 587 1660 647 94
      9 370 -4 500 -24z m-1678 -1351 c163 -33 315 -152 387 -302 78 -160 78 -285 1
      -443 -55 -113 -131 -189 -249 -249 -167 -83 -286 -84 -450 -2 -209 104 -338
      335 -303 540 51 293 345 511 614 456z m1900 0 c163 -33 315 -152 387 -302 78
      -160 78 -285 1 -444 -54 -111 -136 -193 -252 -250 -162 -81 -284 -81 -447 0
      -209 104 -338 334 -303 540 51 293 345 511 614 456z m-950 -2100 c91 -20 221
      -92 289 -160 114 -117 175 -291 151 -432 -40 -230 -229 -419 -459 -459 -262
      -44 -546 175 -595 459 -34 203 94 436 298 537 124 63 210 77 316 55z m1900 0
      c91 -19 214 -87 285 -157 75 -75 135 -190 154 -295 38 -205 -97 -446 -304
      -547 -159 -77 -284 -77 -444 1 -207 99 -342 340 -304 546 30 169 137 312 291
      393 128 66 212 82 322 59z"/>
    </g>
  </svg>
</a>
    {children}
    <button id="global-graph-icon" aria-label="Global Graph" style="background: transparent; border: 0px; cursor: pointer; padding-top: 3px;">
    <svg fill="var(--dark)" height="23px" width="23px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 55 55" xml:space="preserve">
<path d="M49,0c-3.309,0-6,2.691-6,6c0,1.035,0.263,2.009,0.726,2.86l-9.829,9.829C32.542,17.634,30.846,17,29,17
	s-3.542,0.634-4.898,1.688l-7.669-7.669C16.785,10.424,17,9.74,17,9c0-2.206-1.794-4-4-4S9,6.794,9,9s1.794,4,4,4
	c0.74,0,1.424-0.215,2.019-0.567l7.669,7.669C21.634,21.458,21,23.154,21,25s0.634,3.542,1.688,4.897L10.024,42.562
	C8.958,41.595,7.549,41,6,41c-3.309,0-6,2.691-6,6s2.691,6,6,6s6-2.691,6-6c0-1.035-0.263-2.009-0.726-2.86l12.829-12.829
	c1.106,0.86,2.44,1.436,3.898,1.619v10.16c-2.833,0.478-5,2.942-5,5.91c0,3.309,2.691,6,6,6s6-2.691,6-6c0-2.967-2.167-5.431-5-5.91
	v-10.16c1.458-0.183,2.792-0.759,3.898-1.619l7.669,7.669C41.215,39.576,41,40.26,41,41c0,2.206,1.794,4,4,4s4-1.794,4-4
	s-1.794-4-4-4c-0.74,0-1.424,0.215-2.019,0.567l-7.669-7.669C36.366,28.542,37,26.846,37,25s-0.634-3.542-1.688-4.897l9.665-9.665
	C46.042,11.405,47.451,12,49,12c3.309,0,6-2.691,6-6S52.309,0,49,0z M11,9c0-1.103,0.897-2,2-2s2,0.897,2,2s-0.897,2-2,2
	S11,10.103,11,9z M6,51c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S8.206,51,6,51z M33,49c0,2.206-1.794,4-4,4s-4-1.794-4-4
	s1.794-4,4-4S33,46.794,33,49z M29,31c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S32.309,31,29,31z M47,41c0,1.103-0.897,2-2,2
	s-2-0.897-2-2s0.897-2,2-2S47,39.897,47,41z M49,10c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S51.206,10,49,10z"/>
</svg>
          </button>

    </header> : null
}

Header.css = `
header {
  position: fixed;
  height: 2rem;
  top: 0;
  left: calc(((100vw - 750px) / 2) + 1.5rem);
  right: calc(((100vw - 750px) / 2) + 1.5rem);
  z-index: 1000;
  background-color: var(--lightgray);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  gap: 1.5rem;
  border-top: 0px solid var(--dark);
  border-right: 1px solid var(--dark);
  border-left: 1px solid var(--dark);
  border-bottom: 1px solid var(--dark);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 0.5s ease;

}

header svg {
  fill: var(--dark);
}

@media only screen and (min-width: 1510px) {
  header {
    left: calc((100vw - 750px) / 2);
    right: calc((100vw - 750px) / 2);
  }
}

@media only screen and (max-width: calc(750px + 2rem)) {
  header {
    left: 1rem;
    right: 1rem;
    justify-content: space-between;
  }
}

header h1 {
  margin: 0;
  flex: auto;
}
`

Header.afterDOMLoaded = `
  const header = document.getElementById('quartz-header')
  const content = document.querySelector('.container') // Adjust this selector to match your content container

  function adjustHeader() {
    if (header && content) {
      const rect = content.getBoundingClientRect()
      header.style.left = rect.left + 'px'
      header.style.right = (window.innerWidth - rect.right) + 'px'
      header.style.width = rect.width + 'px'
    }
  }

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    })

    window.addEventListener('resize', adjustHeader)
    adjustHeader() // Initial adjustment
  }
`

export default (() => Header) satisfies QuartzComponentConstructor
