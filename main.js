function grid() {
    const feld = document.querySelector('#drawpad');
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let quadrad = document.createElement('div');
            quadrad.style.width = '80px';
            quadrad.style.height= '80px';
            quadrad.classList.add('quad');
            feld.appendChild(quadrad)
            quadrad.style.backgroundColor = 'green'
            quadrad.style.border = '2px solid'
        }
    }
}
grid();