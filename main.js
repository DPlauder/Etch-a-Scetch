function grid() {
    const feld = document.querySelector('#drawpad');
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let quadrad = document.createElement('div');
            quadrad.style.width = 800 / 16 + "px";
            quadrad.style.height= 800 / 16 + "px";
            quadrad.classList.add('quad');
            feld.appendChild(quadrad);
            quadrad.style.border = '1px solid';
        }
    }
    hovern()
}
function hovern() {
    const felder = document.getElementsByClassName('quad');
    for (const element of felder) {
        element.addEventListener('mouseover', () => {
            const rot = Math.floor(Math.random() * 256);
            const gruen = Math.floor(Math.random() * 256);
            const blau = Math.floor(Math.random() * 256);
            element.style.backgroundColor = `rgb(${rot}, ${gruen}, ${blau})`;
        })        
    }
}
function reset() {
    const resetten = document.querySelector('#reset'); 
    const felder = document.querySelector('#drawpad');
    resetten.addEventListener('click', () => {
        felder.innerHTML = "";
        grid();
    })
}
grid();
reset()

