var estoque = document.querySelector('#btn-estoque');
var show = Boolean(document.querySelector('[data-show-tintas]').dataset.showTintas);

estoque.addEventListener('click', mostraTintas)


function mostraTintas() {
    var listaTintas = document.querySelector('.lista')
    show = !show;

    if(show) {
        listaTintas.setAttribute('hidden', show)
    }
    else {
        listaTintas.removeAttribute('hidden');
    }
}

