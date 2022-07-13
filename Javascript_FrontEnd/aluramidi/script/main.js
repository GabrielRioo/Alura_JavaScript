function TocaSom(audioID) {
    console.log(audioID);
    const elemento = document.querySelector(audioID);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('b')
    }

    
}

// document.querySelector('.tecla_pom').onclick = TocaSomPom;
const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach((item) => {
    var instrumento = item.classList[1];

    item.onclick = () => {
        TocaSom(`#som_${instrumento}`);
    };

    item.onkeydown = (event) => {
        console.log(event.code)
        if(event.code === 'Enter' || event.code === 'Space') 
            item.classList.add('ativa')
    }

    item.onkeyup = (event) => {
        if(event.code === 'Enter' || event.code === 'Space') 
            item.classList.remove('ativa')
    }
})
