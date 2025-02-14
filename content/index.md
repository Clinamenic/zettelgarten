---
hideComments: true
keywords: clinamenic, zettelgarten, spencer saar cavanaugh, clinamenic LLC, zettelkasten, digital garden, hypergraph
publish: true
tags: null
title: Clinamenic LLC
headDescription: Clinamenic LLC offers a range of organizational services, from branding to knowledge management.
headIcon:
umami_id: 2f7a2940-be21-4f59-ac1e-ff6407b7e5a2
quartzShowTitle: false
quartzShowSubtitle: false
quartzShowTOC: false
quartzShowExplorer: true
quartzShowBacklinks: false
quartzShowCitation: false
quartzShowFlex: false
quartzShowGraph: true
quartzSearch: true
---

<style>

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  :root {
    --wideradius: 35px;
  }

  html {
    animation: fade-in 3s ease-in;
  }

  .l1, .l2, .l3, .l4, .l5, .l6, .r1, .r2, .r3, .r4, .r5, .r6 {
    text-transform: uppercase;
    height: calc((100% - 5rem) / 6);
    text-align: center; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    overflow: hidden; 
    border: 1px solid var(--secondary); 
    border-radius: var(--main-border-rad) !important; 
    font-weight: 200; 
    letter-spacing: 2px;
    background-color: var(--lightgray);
    transition: all 0.2s ease-in-out;
    font-size: 0.9rem;
    font-family: "GeistMono", monospace;
    line-height: 1.5rem;
    cursor: default;
  }
  .l1:hover, .l2:hover, .l4:hover, .l6:hover, .r1:hover, .r2:hover, .r3:hover, .r5:hover {
    color: black !important;
    background-image: none !important;
    background-color: var(--tertiary) !important;
    transition: all 0.2s ease-in-out;
    font-weight: 400; 
    cursor: pointer;
  }
  .l1 {
    border-top-right-radius: var(--wideradius) !important;
    border-bottom-left-radius: var(--wideradius) !important;
    animation: slide-from-left 3s ease-in-out forwards;
  }
  .l2 {
    border-top-left-radius: var(--wideradius) !important;
    border-bottom-right-radius: var(--wideradius) !important;
    animation: slide-from-left 3.5s ease-in-out forwards;
  }
  .l3 {
    border-top-right-radius: var(--wideradius) !important;
    border-bottom-left-radius: var(--wideradius) !important;
    animation: slide-from-left 4s ease-in-out forwards;
  }
  .l4 {
    border-top-left-radius: var(--wideradius) !important;
    border-bottom-right-radius: var(--wideradius) !important;
    animation: slide-from-left 4.5s ease-in-out forwards;
  }
  .l5 {
    border-top-right-radius: var(--wideradius) !important;
    border-bottom-left-radius: var(--wideradius) !important;
    animation: slide-from-left 5s ease-in-out forwards;
  }
  .l6 {
    border-top-left-radius: var(--wideradius) !important;
    border-bottom-right-radius: var(--wideradius) !important;
    animation: slide-from-left 5.5s ease-in-out forwards;
  }
  .r1 {
    border-top-left-radius: var(--wideradius) !important;
    border-bottom-right-radius: var(--wideradius) !important;
    animation: slide-from-right 3s ease-in-out forwards;
  }
  .r2 {
    border-top-right-radius: var(--wideradius) !important;
    border-bottom-left-radius: var(--wideradius) !important;
    animation: slide-from-right 3.5s ease-in-out forwards;
  }
  .r3 {
    border-top-left-radius: var(--wideradius) !important;
    border-bottom-right-radius: var(--wideradius) !important;
    animation: slide-from-right 4s ease-in-out forwards;
  }
  .r4 {
    border-top-right-radius: var(--wideradius) !important;
    border-bottom-left-radius: var(--wideradius) !important;
    animation: slide-from-right 4.5s ease-in-out forwards;
  }
  .r5 {
    border-top-left-radius: var(--wideradius) !important;
    border-bottom-right-radius: var(--wideradius) !important;
    animation: slide-from-right 5s ease-in-out forwards;
  }
  .r6 {
    border-top-right-radius: var(--wideradius) !important;
    border-bottom-left-radius: var(--wideradius) !important;
    animation: slide-from-right 5.5s ease-in-out forwards;
  }

  .center {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    > article.popover-hint {
      > p, h1, h2, h3, h4, h5, h6, li::marker {
      padding-left: 0.5rem !important;
      padding-right: 0.5rem !important;
    }
    }
  }

  header {
    animation: fade-down-100 3s ease-in-out
  }

  .mobile-gallery2-fixed {
    @media only screen and (max-width: 750px) {
  display: grid;
  width: 100%;
  max-width: var(--pageContentWidth);
  grid-template-columns: repeat(2, calc((100% - 1rem) / 2));
  grid-template-rows: repeat(infinite, 49%);
  justify-content: center;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;

  > .side-column {
    display: flex;
    > .l1, .l2, .l3, .l4, .l5, .l6, .r1, .r2, .r3, .r4, .r5, .r6 {
      font-size: 0.7rem;
      height: 100%;
    }
  }
  }
  @media only screen and (min-width: 750px) {
    display: none;
  }
  }

.marquee {
  animation: fade-in 5s ease-in;
  width: calc(100% + 2rem);
  transform: translateX(-1rem);
  & .exp-tile{
    box-sizing: border-box;
  }
}

.logo-block {
  box-sizing: border-box;
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: var(--secondary-color);
  opacity: 1;
  border-radius: 15px;
  border: 1px solid var(--gray);
  animation: color-blend 3s infinite ease-in-out;
  transition: all 0.4s ease-in-out;
}
.logo-bar {
  box-sizing: border-box;
  position: absolute;
  width: 90px;
  height: 30px;
  background-color: var(--secondary-color);
  opacity: 1;
  border-radius: 15px !important;
  border: 1px solid var(--gray);
  animation: color-blend 3s infinite ease-in-out;
  transition: all 0.4s ease-in-out;
}

@keyframes color-blend {
    0%{ background-color: var(--tertiary) }
    50%{ background-color: var(--secondary)  } 
    100%{ background-color: var(--tertiary) }
  }
@keyframes color-blend-alt {
    0%{ background-color: var(--tertiary) }
    50%{ background-color: var(--secondary)  } 
    100%{ background-color: var(--tertiary) }
  }

#offerings-1 {
  margin: 1rem 0rem 0rem 0rem;
  height: 239px;
  @media only screen and (max-width: 750px) {
    height: auto ;
    }
}

.gallery3 {
  > .text-box {
    overflow: hidden;
    max-height: 300px;
    box-sizing: border-box;
  }
}

.autoglypha-text {
  font-family: GeistMono; 
  font-size: 0.82rem; 
  letter-spacing: 3.68px; 
  text-transform: uppercase; 
  font-weight: 200; 
  cursor: default; 
  text-shadow: 0px 0px 10px var(--lightgray); 
  display: none; 
  transition: all 0.3s ease-in-out; 
  animation: rotate-counter 25s infinite;
  @media only screen and (max-width: 750px) {
    display: block;
  }
}

#autoglypha-box {
  text-align: center; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  animation: fade-in 4.5s ease-in; 
  box-sizing: border-box; 
  background-color: var(--lightgray); 
  background-image: url('https://arweave.net/jZ3EAO7Pl3ldWyNLkfDJ9ksghEouDZSuOAvS9T9Ii6M'); 
  background-repeat: repeat; 
  background-position: center; 
  background-attachment: fixed; 
  background-size: 125%;
  max-height: 239px;
  transition: all 0.3s ease-in-out;
  > .external-icon {
    display: none;
  }
  @media only screen and (max-width: 750px) {
    background-color: rgba(121, 197, 126, 0.25);
    background-size: 200%;
  }
}

#autoglypha-box:hover {
  background-color: rgba(121, 197, 126, 0.25);
  transition: all 0.3s ease-in-out;
  border: 1px solid var(--secondary);
  & .logo-bar {
    border: 1px solid var(--dark);
    transition: all 0.3s ease-in-out;
  }
  & .logo-block {
    border: 1px solid var(--dark);
    transition: all 0.3s ease-in-out;
  }
  & .autoglypha-text {
  display: block;
  transition: all 0.3s ease-in-out;
}
}

@keyframes rotate-counter {
    0%{ transform: rotate(0deg) }
    5%{ transform: rotate(0deg) }
    50%{ transform: rotate(-180deg) }
    55%{ transform: rotate(-180deg) }
    100%{ transform: rotate(-360deg) }
  }



</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const marqueeContent = document.querySelector('.marquee-content');
  const tiles = Array.from(marqueeContent.children);
  const duplicateContent = tiles.map(tile => tile.cloneNode(true));
  duplicateContent.forEach(clone => marqueeContent.appendChild(clone));
});
</script>

<div class="tri-column">

<div class="side-column">
<a href="/about.html" class="l1">About</a>
<a href="" class="l2">Services</a>
<a href="" class="l3"></a>
<a href="/design.html" class="l4">Design</a>
<a href="" class="l5"></a>
<a href="/typography.html" class="l6">Typography</a>
</div>

<div class="text-box" style="
  background-image: url(https://arweave.net/hbmMt-9koK_dnMScUW6OdJDiBtKlPY2DkvMwNBPu5zM);
  background-size: 300px;
  background-color: var(--light);
  background-attachment: fixed;
  background-position: center;
  background-repeat: repeat;
  padding: 0rem 0rem 0rem 0rem;
  animation: fade-in 3s ease-in;
">
<div class="text-box" style="background-color: var(--lightgray); opacity: 0.96; margin: 0rem 0rem 0rem 0rem; border: 0px; padding: 0.5rem 0rem 2rem 0rem;">
  <div class="clinamenic-cube" style="text-align: center; justify-content: center;">
    <img
      src="https://arweave.net/KIy4ZM-FoCYsj9DxH8WIVI-HmhZpPY4V_eVJI-1DFkw"
      width="300px"
      height="300px"
      alt="Clinamenic Cube"
    />
  </div>
  <p class="body-p" style="animation: fade-in 3s ease-in; font-size: 1.8rem; font-weight: 200; text-align: center; font-family: GeistMono, monospace; text-shadow: 0px 0px 15px var(--lightgray); letter-spacing: 1px;">Clinamenic LLC</p>
  <p class="body-p" style="animation: fade-in 3s ease-in; font-size: 0.8rem; font-weight: 200; letter-spacing: 1px; text-align: center; font-style: italic; margin: 0.6rem 0rem 0.4rem 0rem; text-shadow: 0px 0px 15px var(--lightgray);">the consultancy of</p>
  <p class="body-p" style="animation: fade-in 3s ease-in; font-size: 0.8rem; font-weight: 200; text-align: center; font-style: normal; line-height: 1.2rem; text-shadow: 0px 0px 15px var(--lightgray);">S P E N C E R</p>
  <div style="display: flex; justify-content: center;">
    <p class="body-p" style="animation: fade-down 5s ease-in-out; font-size: 0.8rem; font-weight: 200; text-align: center; position: relative; font-style: normal; line-height: 1.2rem; text-shadow: 0px 0px 15px var(--lightgray);">S&nbsp;&nbsp;&nbsp;</p>
    <p class="body-p" style="animation: fade-up 5s ease-in-out; font-size: 0.8rem; font-weight: 200; text-align: center; position: relative; font-style: normal; line-height: 1.2rem; text-shadow: 0px 0px 15px var(--lightgray);">A&nbsp;&nbsp;&nbsp;A</p>
    <p class="body-p" style="animation: fade-down 5s ease-in-out; font-size: 0.8rem; font-weight: 200; text-align: center; position: relative; font-style: normal; line-height: 1.2rem; text-shadow: 0px 0px 15px var(--lightgray);">&nbsp;&nbsp;&nbsp;R</p>
  </div>
  <p class="body-p" style="animation: fade-in 3s ease-in; font-size: 0.8rem; font-weight: 200; text-align: center; font-style: normal; line-height: 1.2rem; text-shadow: 0px 0px 15px var(--lightgray);">C A V A N A U G H</p>
</div>
</div>

<div class="side-column">
<a href="" class="r1">Contact</a>
<a href="/writing.html" class="r2">Writing</a>
<a href="/zettelgarten.html" class="r3" style="letter-spacing: 1px;">Zettelgarten</a>
<a href="" class="r4"></a>
<a href="/gallery.html" class="r5">Gallery</a>
<a href="" class="r6"></a>
</div>
 
</div>

<div class="mobile-gallery2-fixed" style="margin: 1rem 0rem 0rem 0rem; height: 400px;">

  <div class="side-column">
  <a href="/about.html" class="l1">About</a>
  <a href="" class="l2">Services</a>
  <a href="" class="l3"></a>
  <a href="/design.html" class="l4">Design</a>
  <a href="" class="l5"></a>
  <a href="/typography.html" class="l6">Typograph</a>
  </div>

  <div class="side-column">
  <a href="" class="r1">Contact</a>
  <a href="/writing.html" class="r2">Writing</a>
  <a href="/zettelgarten.html" class="r3" style="letter-spacing: 1px;">Zettelgarten</a>
  <a href="" class="r4"></a>
  <a href="/gallery.html" class="r5">Gallery</a>
  <a href="" class="r6"></a>
  </div>

</div>

<div class="marquee" style="margin: 1rem 0rem 0rem 0rem;">
  <div class="marquee-content">

  <div class="exp-tile">
      <div class="exp-text">
        <p style="padding-bottom: 0.5rem; font-weight: 300;">JournoDAO</p>
        <p>Co-founder</p>
      </div>
      <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmW14vYxLFSCTwfHBA3x1aNz5hxXxnXBv7rTozTnKnnJS4" alt="JournoDAO" />
    </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">PubDAO</p>
      <p>Core Team</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmUqoP49eDSyriR6oettsdfig27hXufCa6pPyuR7PYg7Jm" alt="PubDAO" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">Decrypt</p>
      <p>Contractor</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmUkoLVZZruos3gqh88nnUF1811S6haR3CXsSNw58hbtLd" alt="Decrypt" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">Holonym</p>
      <p>Contractor</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmVY6gdSXhBL5QdfapSKciSKG7oVbppQDhSaaEABC9nKNW" alt="Holonym" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">Lobby3 UNA</p>
      <p>Director</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmeCKyJFTMKVErB1u31NoEokYHUWsFiMeYk6nuariWSdEW" alt="Lobby3 UNA" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">DAO<br>Coalition</p>
      <p>Chairman</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmaP6CSzJp6wJbECW4gLGfrDhjpu48oMEhm7tyg8oZaMFg" alt="DAO Coalition" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">Education<br>DAO</p>
      <p>Counsel</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmbxodFHbEpZaYo5AdjUR5Wu77vVJ5H53ZDHRLPawJRiRT" alt="Education DAO" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">Consensys</p>
      <p>Contractor</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmZCijUn73vZnCU6PyMGmTe9kMXzDZHgQzXVmZCwidaZmH" alt="Consensys" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">Tally</p>
      <p>Contractor</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmRcnc8rhYXYw9uKREKGUuTcevNnDbiwBusGni41HHMPbm" alt="Tally" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">Alexandria</p>
      <p>Contractor</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmQLR5YTZj9XB4DrNbU9JXGi989cC8aDxwxXV66Yj5ph2z" alt="Alexandria" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">OpenCivics</p>
      <p>Steward</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmXPC32sP9t7U3aFwk4Qpi16oMycekazrP9rGfYVoYGJrX" alt="OpenCivics" />
  </div>

  <div class="exp-tile">
      <div class="exp-text">
        <p style="padding-bottom: 0.5rem; font-weight: 300;">JournoDAO</p>
        <p>Co-founder</p>
      </div>
      <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmW14vYxLFSCTwfHBA3x1aNz5hxXxnXBv7rTozTnKnnJS4" alt="JournoDAO" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">PubDAO</p>
      <p>Core Team</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmUqoP49eDSyriR6oettsdfig27hXufCa6pPyuR7PYg7Jm" alt="PubDAO" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">Decrypt</p>
      <p>Contractor</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmUkoLVZZruos3gqh88nnUF1811S6haR3CXsSNw58hbtLd" alt="Decrypt" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">Holonym</p>
      <p>Contractor</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmVY6gdSXhBL5QdfapSKciSKG7oVbppQDhSaaEABC9nKNW" alt="Holonym" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">Lobby3 UNA</p>
      <p>Director</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmeCKyJFTMKVErB1u31NoEokYHUWsFiMeYk6nuariWSdEW" alt="Lobby3 UNA" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">DAO<br>Coalition</p>
      <p>Chairman</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmaP6CSzJp6wJbECW4gLGfrDhjpu48oMEhm7tyg8oZaMFg" alt="DAO Coalition" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">Education<br>DAO</p>
      <p>Counsel</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmbxodFHbEpZaYo5AdjUR5Wu77vVJ5H53ZDHRLPawJRiRT" alt="Education DAO" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">Consensys</p>
      <p>Contractor</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmZCijUn73vZnCU6PyMGmTe9kMXzDZHgQzXVmZCwidaZmH" alt="Consensys" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">Tally</p>
      <p>Contractor</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmRcnc8rhYXYw9uKREKGUuTcevNnDbiwBusGni41HHMPbm" alt="Tally" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">Alexandria</p>
      <p>Contractor</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmQLR5YTZj9XB4DrNbU9JXGi989cC8aDxwxXV66Yj5ph2z" alt="Alexandria" />
  </div>

  <div class="exp-tile">
    <div class="exp-text">
      <p style="padding-bottom: 0.5rem; font-weight: 300;">OpenCivics</p>
      <p>Steward</p>
    </div>
    <img src="https://indigo-cautious-chinchilla-877.mypinata.cloud/ipfs/QmXPC32sP9t7U3aFwk4Qpi16oMycekazrP9rGfYVoYGJrX" alt="OpenCivics" />
  </div>

  </div>
</div>

<div class="gallery3" id="offerings-1">

<div class="text-box" style="padding: 1rem 0rem 0rem 0rem; align-items: center; justify-content: center; animation: fade-in 4s ease-in; box-sizing: border-box; overflow: hidden;">
  <p style="text-align: center; font-family: VampiroOne; font-size: 2.3rem; letter-spacing: 0px; padding: 0px; margin: 0rem 0rem 0rem 0rem; margin-top: 20px; rotate: -2deg; animation: jiggle 4s ease-in-out infinite; color: var(--tertiary); text-shadow: 1px 1px 0px black;">Casual</p>
  <p style="text-align: center; font-family: MEK-Mono; font-size: 3.4rem; letter-spacing: 0px; padding: 0px; margin: 0.65rem 1rem 1.5rem 1rem;">DELEGATE</p>
  <p style="margin: 0rem 1.5rem 1.5rem 1.5rem; text-align: center; font-size: 0.7rem; line-height: 1.2rem;">Clinamenic LLC is available as a governance delegate for select organizations. <br><br><a
      href="/services.html"
      class="tag"
      style="color: var(--secondary);"
      >Coming soon!</a>
  </p></div>

<a href="https://autoglypha.clinamenic.com/?ref=clinamenic" class="text-box" id="autoglypha-box">
  <div style="position: relative; width: 325px; height: 325px; display: flex; justify-content: center; align-items: center;">
    <svg viewBox="-150 -150 300 300" style="position: absolute; width: 325px; height: 325px; transform: rotate(145deg);">
      <path id="circle-path" d="M 0,90 A 90,90 0 1 1 0,-90 A 90,90 0 1 1 0,90" fill="none"/>
      <text class="autoglypha-text">
        <textPath href="#circle-path" startOffset="0%">
          Autoglypha&nbsp;&nbsp;&nbsp;&nbsp; Glyph-Based Cellular Automata
        </textPath>
      </text>
    </svg>
    <div id="autoglypha-logo" style="height: 180px; width: 180px; display: flex; animation: fade-in 4.5s ease-in-out;">
      <div class="logo-bar" style="top: calc(50% - 75px); left: calc(50% - 45px); animation: color-blend-alt 4s infinite ease-in-out;"></div>
      <div class="logo-block" style="top: calc(50% - 45px); left: calc(50% - 75px); animation: color-blend-alt 7s infinite ease-in-out;"></div>
      <div class="logo-block" style="top: calc(50% - 45px); left: calc(50% + 45px); animation: color-blend 5s infinite ease-in-out;"></div>
      <div class="logo-bar" style="top: calc(50% - 15px); left: calc(50% - 45px); animation: color-blend-alt 7s infinite ease-in-out;"></div>
      <div class="logo-block" style="top: calc(50% + 15px); left: calc(50% - 75px); animation: color-blend 8s infinite ease-in-out;"></div>
      <div class="logo-block" style="top: calc(50% + 15px); left: calc(50% + 45px); animation: color-blend-alt 4s infinite ease-in-out;"></div>
      <div class="logo-block" style="top: calc(50% + 45px); left: calc(50% - 45px); animation: color-blend 6s infinite ease-in-out;"></div>
      <div class="logo-block" style="top: calc(50% + 45px); left: calc(50% + 15px); animation: color-blend-alt 6s infinite ease-in-out;"></div>
    </div>
  </div>
</a>

<div class="text-box" style="text-align: center; display: flex; align-items: center; justify-content: center; animation: fade-in 4s ease-in; box-sizing: border-box;">
  <p>Grant Program Management</br>(coming soon!)</p>
</div>

</div>

<div style="height: 1rem;"></div>

<div class="text-box" style="text-align: justify; position: relative; padding: 0rem 1.5rem; hyphens: none; animation: fade-in 3s ease-in; background-color: var(--light); border: 0px; padding: 0rem 1.5rem; animation: fade-in 6s ease-in-out;">
    <p style="text-align: justify; font-size: 0.75rem; line-height: 1.6; justify-content: center; hyphens: none; font-family: GeistMono; letter-spacing: 1px; font-weight: 200;">
      <em>The atoms, as their own weight bears them down plumb through the void, at scarce determined times, in scarce determined places, from their course decline a little -- call it, so to speak, mere changed trend. For were it not their wont thuswise to swerve, down would they fall, each one, like drops of rain, through the unbottomed void; and then collisions ne'er could be nor blows among the primal elements; and thus nature would never have created aught.</em>
    </p>
    <p></p>
    <p style="text-align: center; font-size: 0.75rem; line-height: 1.6; hyphens: none; font-family: GeistMono; letter-spacing: 1px; font-weight: 300;">
      Lucretius, <em>On the Nature of Things</em>,
      describing the phenomenon of clinamen.
    </p>
</div>
