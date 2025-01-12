---
title: Test Page
publish: true
keywords:
  - clinamenic, zettelgarten, spencer saar cavanaugh, clinamenic LLC, zettelkasten, digital garden, hypergraph
hideGraph: false
quartzShowTitle: false
downloadable: true
quartzSearch: false
tags:
  - BIOL/MOLE
  - BIOL/GENE
  - BIOL/CELL
  - ECON/MICR
  - ECON/MACR
  - PHIL/ETHI
---

<style>
.marquee {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  position: relative;
}

.marquee-content {
  display: inline-block;
  gap: 1rem;
  animation: marquee 20s linear infinite;
}

.marquee:hover .marquee-content {
  animation-play-state: paused;
}

.marquee:hover .exp-overlay {
    opacity: 0.85;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50.25%);
  }
}


.exp-tile {
  display: inline-block;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: rgba(121, 197, 126, 0.6);
  border: 1px solid var(--secondary);
  border-radius: 10px;
  margin: 0rem 0.2rem;
  width: 100px;
  height: 100px;
  position: relative;
  > img {
    margin: 5px;
    width: 90px;
    height: 90px;
  }
  > .exp-text {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--light);
    background-color: var(--tertiary);
    border-radius: 10px;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    > p {
      text-align: center;
      line-height: 1.2rem;
      font-size: 0.8rem;
      color: black;
      margin: 0rem;
      padding: 0rem;
    }
  }
}

.exp-tile:hover .exp-text {
  opacity: 0.8;
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

<div class="marquee">
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

<div style="height: 200px;"></div>

<div style="height: 1000px;"></div>

<div class="tri-column">

<div class="side-column">
<div class="text-box" id="l1" style="height: 5%; text-align: center; display: flex; align-items: center; justify-content: center;">Services</div>
<div class="text-box" id="l2" style="height: 45%; text-align: center; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 100; color: var(--tertiary);">typo</br>&nbsp;gra</br>phy|</div>
<div class="text-box" id="l3" style="height: 45%; text-align: center; display: flex; align-items: center; justify-content: center;">?</div>
<div class="text-box" id="l4" style="height: 5%; text-align: center; display: flex; align-items: center; justify-content: center;">Gallery</div>
</div>

<div class="text-box" style="
  background-image: url(https://arweave.net/hbmMt-9koK_dnMScUW6OdJDiBtKlPY2DkvMwNBPu5zM);
  background-size: 50%;
  background-color: var(--light);
  padding: 0rem 0rem 0rem 0rem;
  animation: fade-in 3s ease-in;
">
<div class="text-box" style="background-color: var(--lightgray); opacity: 0.96; margin: 0rem 0rem 0rem 0rem; border: 0px; padding: 0rem 0rem 1.5rem 0rem;">
  <div class="clinamenic-cube" style="text-align: center; justify-content: center;">
    <img
      src="https://arweave.net/KIy4ZM-FoCYsj9DxH8WIVI-HmhZpPY4V_eVJI-1DFkw"
      width="300px"
      height="300px"
      alt="Clinamenic Cube"
    />
  </div>
  <p class="body-p" style="animation: fade-in 3s ease-in; font-size: 1.8rem; font-weight: 300; text-align: center; font-family: GeistMono; text-shadow: 0px 0px 5px var(--lightgray);">Clinamenic LLC</p>
  <p class="body-p" style="animation: fade-in 3s ease-in; font-size: 0.8rem; font-weight: 200; letter-spacing: 1px; text-align: center; font-style: italic; margin: 0.6rem 0rem 0.4rem 0rem; text-shadow: 0px 0px 5px var(--lightgray);">the consultancy of</p>
  <p class="body-p" style="animation: fade-in 3s ease-in; font-size: 0.8rem; font-weight: 300; text-align: center; font-style: normal; line-height: 1.2rem;">S P E N C E R</p>
  <div style="display: flex; justify-content: center;">
    <p class="body-p" style="animation: fade-down 5s ease-in-out; font-size: 0.8rem; font-weight: 300; text-align: center; position: relative; font-style: normal; line-height: 1.2rem;">S&nbsp;&nbsp;&nbsp;</p>
    <p class="body-p" style="animation: fade-up 5s ease-in-out; font-size: 0.8rem; font-weight: 300; text-align: center; position: relative; font-style: normal; line-height: 1.2rem;">A&nbsp;&nbsp;&nbsp;A</p>
    <p class="body-p" style="animation: fade-down 5s ease-in-out; font-size: 0.8rem; font-weight: 300; text-align: center; position: relative; font-style: normal; line-height: 1.2rem;">&nbsp;&nbsp;&nbsp;R</p>
  </div>
  <p class="body-p" style="animation: fade-in 3s ease-in; font-size: 0.8rem; font-weight: 300; text-align: center; font-style: normal; line-height: 1.2rem;">C A V A N A U G H</p>
</div>
</div>

<div class="side-column">
<div class="text-box" id="r1" style="height: 5%; text-align: center; display: flex; align-items: center; justify-content: center;">About</div>
<div class="text-box" id="r2" style="height: 45%; text-align: center; display: flex; align-items: center; justify-content: center;">?</div>
<div class="text-box" id="r3" style="height: 45%; text-align: center; display: flex; align-items: center; justify-content: center;">?</div>
<div class="text-box" id="r4" style="height: 5%; text-align: center; display: flex; align-items: center; justify-content: center;">Contact</div>
</div>

</div>

<div class="gallery2" style="margin: 1.5rem 0rem 0rem 0rem;">

<div class="text-box" style="padding: 1rem 0rem 0rem 0rem;">
  <p style="text-align: center; font-family: VampiroOne; font-size: 2.5rem; letter-spacing: 0px; padding: 0px; margin: 0rem 0rem 0rem 0rem; margin-top: 15px; rotate: -2deg; animation: jiggle 4s ease-in-out infinite; color: var(--tertiary); text-shadow: 1px 1px 0px black;">Casual</p>
  <p style="text-align: center; font-family: MEK-Mono; font-size: 3.5rem; letter-spacing: 0px; padding: 0px; margin: 0.65rem 1rem 1.5rem 1rem;">DELEGATE</p>
  <p style="margin: 0rem 1.5rem 1.5rem 1.5rem; text-align: justify; font-size: 0.8rem; line-height: 1.2rem;">Clinamenic LLC is available as a governance delegate for select organizations. <a
      href="/services.html"
      class="tag"
      style="color: var(--secondary);"
      >Learn more</a>
  </p></div>

<div class="text-box" style="text-align: center; display: flex; align-items: center; justify-content: center;">
  <p>Grant Program Management</br>(coming soon!)</p>
</div>
</div>

<div style="height: 100px;"></div>

<div class="test-image-box"></div>

<div class="text-box" style="
  background-image: url(https://arweave.net/hbmMt-9koK_dnMScUW6OdJDiBtKlPY2DkvMwNBPu5zM);
  background-size: 50%;
  background-color: var(--light);
  padding: 0rem 0rem 0rem 0rem;
  height: 500px;
">
<div class="text-box" style="background-color: var(--lightgray); opacity: 0.95; margin: 0rem 0rem 0rem 0rem; border: 0px; height: 100%;">
  <p>test</p>
</div>
</div>

<div class="tri-column">

<div class="side-column">
<div class="text-box" id="l1" style="height: 25%;"></div>
<div class="text-box" id="l2" style="height: 25%;"></div>
<div class="text-box" id="l3" style="height: 25%;"></div>
<div class="text-box" id="l4" style="height: 25%;"></div>
</div>

<div class="text-box" style="
  background-image: url(https://arweave.net/hbmMt-9koK_dnMScUW6OdJDiBtKlPY2DkvMwNBPu5zM);
  background-size: 70%;
  background-color: var(--light);
  padding: 0rem 0rem 0rem 0rem;
">
<div class="text-box" style="background-color: var(--lightgray); opacity: 0.96; margin: 0rem 0rem 0rem 0rem; border: 0px; padding: 0rem 0rem 1.5rem 0rem;">
  <div class="clinamenic-cube" style="text-align: center; justify-content: center;">
    <img
      src="https://arweave.net/KIy4ZM-FoCYsj9DxH8WIVI-HmhZpPY4V_eVJI-1DFkw"
      width="300px"
      height="300px"
      alt="Clinamenic Cube"
    />
  </div>
  <p class="body-p" style="animation: fade-in 3s ease-in; font-size: 1.8rem; font-weight: 200; text-align: center;">Clinamenic LLC</p>
  <p class="body-p" style="animation: fade-in 3s ease-in; font-size: 0.8rem; font-weight: 200; letter-spacing: 1px; text-align: center; font-style: italic; margin: 0.6rem 0rem 0.4rem 0rem;">the consultancy of</p>
  <p class="body-p" style="animation: fade-in 3s ease-in; font-size: 0.8rem; font-weight: 300; text-align: center; font-style: normal; line-height: 1.2rem;">S P E N C E R</p>
  <div style="display: flex; justify-content: center;">
    <p class="body-p" style="animation: fade-down 5s ease-in-out; font-size: 0.8rem; font-weight: 300; text-align: center; position: relative; font-style: normal; line-height: 1.2rem;">S&nbsp;&nbsp;&nbsp;</p>
    <p class="body-p" style="animation: fade-up 5s ease-in-out; font-size: 0.8rem; font-weight: 300; text-align: center; position: relative; font-style: normal; line-height: 1.2rem;">A&nbsp;&nbsp;&nbsp;A</p>
    <p class="body-p" style="animation: fade-down 5s ease-in-out; font-size: 0.8rem; font-weight: 300; text-align: center; position: relative; font-style: normal; line-height: 1.2rem;">&nbsp;&nbsp;&nbsp;R</p>
  </div>
  <p class="body-p" style="animation: fade-in 3s ease-in; font-size: 0.8rem; font-weight: 300; text-align: center; font-style: normal; line-height: 1.2rem;">C A V A N A U G H</p>
</div>
</div>

<div class="side-column">
<div class="text-box" id="r1" style="height: 25%;"></div>
<div class="text-box" id="r2" style="height: 25%;"></div>
<div class="text-box" id="r3" style="height: 25%;"></div>
<div class="text-box" id="r4" style="height: 25%;"></div>
</div>

</div>

<div style="height: 100px;"></div>

<div class="tri-column">

<div class="side-column">
<div class="text-box" id="l1" style="height: 25%;"></div>
<div class="text-box" id="l2" style="height: 25%;"></div>
<div class="text-box" id="l3" style="height: 25%;"></div>
<div class="text-box" id="l4" style="height: 25%;"></div>
</div>

<div class="text-box" style="padding-bottom: 2rem;">
  <div class="clinamenic-cube" style="text-align: center; justify-content: center;">
    <img
      src="https://arweave.net/KIy4ZM-FoCYsj9DxH8WIVI-HmhZpPY4V_eVJI-1DFkw"
      width="300px"
      height="300px"
      alt="Clinamenic Cube"
    />
  </div>
  <p class="body-p" style="animation: fade-in 3s ease-in; font-size: 1.8rem; font-weight: 200; text-align: center;">Clinamenic LLC</p>
  <p class="body-p" style="animation: fade-in 3s ease-in; font-size: 0.8rem; font-weight: 200; letter-spacing: 1px; text-align: center; font-style: italic; margin: 0.6rem 0rem 0.4rem 0rem;">the consultancy of</p>
  <p class="body-p" style="animation: fade-in 3s ease-in; font-size: 0.8rem; font-weight: 300; text-align: center; font-style: normal; line-height: 1.2rem;">S P E N C E R</p>
  <div style="display: flex; justify-content: center;">
    <p class="body-p" style="animation: fade-down 5s ease-in-out; font-size: 0.8rem; font-weight: 300; text-align: center; position: relative; font-style: normal; line-height: 1.2rem;">S&nbsp;&nbsp;&nbsp;</p>
    <p class="body-p" style="animation: fade-up 5s ease-in-out; font-size: 0.8rem; font-weight: 300; text-align: center; position: relative; font-style: normal; line-height: 1.2rem;">A&nbsp;&nbsp;&nbsp;A</p>
    <p class="body-p" style="animation: fade-down 5s ease-in-out; font-size: 0.8rem; font-weight: 300; text-align: center; position: relative; font-style: normal; line-height: 1.2rem;">&nbsp;&nbsp;&nbsp;R</p>
  </div>
  <p class="body-p" style="animation: fade-in 3s ease-in; font-size: 0.8rem; font-weight: 300; text-align: center; font-style: normal; line-height: 1.2rem;">C A V A N A U G H</p>
</div>

<div class="side-column">
<div class="text-box" id="r1" style="height: 25%;"></div>
<div class="text-box" id="r2" style="height: 25%;"></div>
<div class="text-box" id="r3" style="height: 25%;"></div>
<div class="text-box" id="r4" style="height: 25%;"></div>
</div>

</div>

<div style="height: 100px;"></div>

<div class="text-box" style="padding-bottom: 2rem;">
  <div class="clinamenic-cube" style="text-align: center; justify-content: center;">
    <img
      src="https://arweave.net/KIy4ZM-FoCYsj9DxH8WIVI-HmhZpPY4V_eVJI-1DFkw"
      width="300px"
      height="300px"
      alt="Clinamenic Cube"
    />
  </div>
  <p class="body-p" style="animation: fade-in 4s ease-in; font-size: 1.8rem; font-weight: 200; text-align: center;">Clinamenic LLC</p>
  <p class="body-p" style="animation: fade-in 4.5s ease-in; font-size: 0.8rem; font-weight: 200; letter-spacing: 1px; text-align: center; font-style: italic; margin: 0.6rem 0rem 0.6rem 0rem;">the consultancy of</p>
  <p class="body-p" style="animation: fade-in 5s ease-in; font-size: 0.8rem; font-weight: 300; text-align: center; font-style: normal; line-height: 1.2rem;">S P E N C E R</p>
  <div style="display: flex; justify-content: center; animation: fade-in 5.5s ease-in;">
    <p class="body-p" style="animation: fade-down 5s ease-in-out; font-size: 0.8rem; font-weight: 300; text-align: center; position: relative; font-style: normal; line-height: 1.2rem;">S&nbsp;&nbsp;&nbsp;</p>
    <p class="body-p" style="animation: fade-up 5s ease-in-out; font-size: 0.8rem; font-weight: 300; text-align: center; position: relative; font-style: normal; line-height: 1.2rem;">A&nbsp;&nbsp;&nbsp;A</p>
    <p class="body-p" style="animation: fade-down 5s ease-in-out; font-size: 0.8rem; font-weight: 300; text-align: center; position: relative; font-style: normal; line-height: 1.2rem;">&nbsp;&nbsp;&nbsp;R</p>
  </div>
  <p class="body-p" style="animation: fade-in 5s ease-in; font-size: 0.8rem; font-weight: 300; text-align: center; font-style: normal; line-height: 1.2rem;">C A V A N A U G H</p>
</div>

<div class="footer-section" style="padding-top: 0rem; padding-bottom: 0.75rem; justify-content: space-between;">
  <div class="nav-button" style="margin-top: 0.75rem;">
    <a class="nav-link" href="https://bsky.app/profile/clinamenic.bsky.social">Bluesky</a>
  </div>
  <div class="nav-button" style="margin-top: 0.75rem;">
    <a class="nav-link" href="https://warpcast.com/clinamenic">Farcaster</a>
  </div>
  <div class="nav-button" style="margin-top: 0.75rem;">
    <a class="nav-link" href="https://www.github.com/clinamenic">Github</a>
  </div>
  <div class="nav-button" style="margin-top: 0.75rem;">
    <a class="nav-link" href="https://letterboxd.com/clinamenic/">Letterboxd</a>
  </div>
  <div class="nav-button" style="margin-top: 0.75rem;">
    <a class="nav-link" href="https://www.x.com/clinamenic">Twitter</a>
  </div>
</div>
