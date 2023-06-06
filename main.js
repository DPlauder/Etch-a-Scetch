function start() {
    const starten = document.querySelector('#reset'); 
    const felder = document.querySelector('#drawpad');
    
    starten.addEventListener('click', () => {
        felder.innerHTML = "";
        let kaestchen = parseInt(prompt("Wie groß soll das Raster sein?"));
        if (kaestchen > 100) {
            kaestchen = 100;
        }
        grid(kaestchen)
    })
}

function grid(kaestchen) {
    console.log(kaestchen);
    const feld = document.querySelector('#drawpad');
    for (let i = 0; i < kaestchen; i++) {
        for (let j = 0; j < kaestchen; j++) {
            let quadrad = document.createElement('div');
            quadrad.style.width = 800 / kaestchen + "px";
            quadrad.style.height= 800 / kaestchen + "px";
            quadrad.classList.add('quad');
            feld.appendChild(quadrad);
            quadrad.style.border = '1px solid';
        }
    }
    auswahl()
}

function auswahl() {
    const felder = document.getElementsByClassName('quad');
    const btn_bunt = document.querySelector('#bunt');
    const btn_rot = document.querySelector('#rot');
    const btn_gruen = document.querySelector('#gruen');
    const btn_blau = document.querySelector('#blau');

    btn_bunt.addEventListener('click', () => {
        malenBunt(felder);
    })
    btn_rot.addEventListener('click', () => {
        malenRot(felder);
    })
    btn_gruen.addEventListener('click', () => {
        malenGruen(felder);
    })
    btn_blau.addEventListener('click', () => {
        malenBlau(felder);
    })
    
}

function malenBunt(felder) {
     
    for (const element of felder) {
        element.addEventListener('mouseover', () => {
            const rot = Math.floor(Math.random() * 255);
            const gruen = Math.floor(Math.random() * 255);
            const blau = Math.floor(Math.random() * 255);
            element.style.backgroundColor = `rgb(${rot}, ${gruen}, ${blau})`;
        })        
    }
}

function malenRot (felder) {
    for (const element of felder) {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'red';
        })        
    }
}
function malenGruen (felder) {
    for (const element of felder) {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'green';
        })        
    }

}
function malenBlau (felder) {
    for (const element of felder) {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'blue';
        })        
    }

}

start()

array.forEach(element => {
    
});

const myFunc = (element) => {
    console.log(element);
}

myFunc('hallo')

