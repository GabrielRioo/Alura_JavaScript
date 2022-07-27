const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach(element => {
    CriaElemento(element)
})

form.addEventListener('submit', event => {
    event.preventDefault();
    const nome = event.target.elements['nome'];
    const quantidade = event.target.elements['quantidade'];

    const existe = itens.find(elemento => elemento.nome === nome.value)

    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    if (existe) {
        itemAtual.id = existe.id

        AtualizaElemento(itemAtual)

        itens[itens.findIndex(element => element.id === existe.id)] = itemAtual
    }
    else {
        itemAtual.id = itens[itens.length -1] ? itens[itens.length -1] + 1 : 0;
        CriaElemento(itemAtual)
        
        itens.push(itemAtual);
    }

    localStorage.setItem('itens', JSON.stringify(itens))

    nome.value = ''
    quantidade.value = ''
})

function CriaElemento(item) {
    console.log(nome, quantidade)

    const novoItem = document.createElement('li');
    novoItem.classList.add('item');
    
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;
    novoItem.appendChild(numeroItem)
    
    novoItem.innerHTML += item.nome;
    
    novoItem.appendChild(BotaoDeleta(item.id));
    lista.appendChild(novoItem)

}

function AtualizaElemento(item) {
    document.querySelector('[data-id="'+item.id+'"]').innerHTML = item.quantidade
}

function BotaoDeleta(id) {
    const elementoBotao = document.createElement('button');
    elementoBotao.innerHTML = 'X';

    elementoBotao.addEventListener('click', function() {
        DeletaElemento(this.parentElement, id);

    })

    return elementoBotao;
}

function DeletaElemento(tag, id) {
    tag.remove();
    itens.splice(itens.findIndex(element => element.id === id), 1)

    localStorage.setItem('itens', JSON.stringify(itens))
}