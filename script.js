const poistaefekti = setTimeout(removeTransition, 1000);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; // Ei tee mitään, jos ei löydy vastaavaa ääntä
    key.classList.add('playing'); // Lisää luokka visuaaliselle efektille
    //console.log(key.classList);
    audio.currentTime = 0; // Kelaa ääni alkuun
    audio.play(); // Soittaa äänen
}

function removeTransition(e) {
    console.log(e.target.classList);
    //console.log(e.target.classList);
    if (e.propertyName !== 'transfrom') return; // Ohittaa, jos ei transform-muutos
    e.target.classList.remove('playing'); // Poistaa visuaalisen efektin // TÄLLÄ RIVILLÄ ON TODENNÄKÖISESTI ONGELMA
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeTransition);
