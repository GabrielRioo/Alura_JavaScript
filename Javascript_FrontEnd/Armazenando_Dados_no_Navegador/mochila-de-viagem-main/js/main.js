const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach(element => {
    CriaElemento(element)
})

form.addEventListener('submit', event => {
    const nome = event.target.elements['nome'];
    const quantidade = event.target.elements['quantidade'];
    
    event.preventDefault();
    
    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    CriaElemento(itemAtual)


    itens.push(itemAtual);

    localStorage.setItem('itens', JSON.stringify(itens))

    nome.value = ''
    quantidade.value = ''
})

function CriaElemento(item) {
    console.log(nome, quantidade)

    const novoItem = document.createElement('li');
    novoItem.classList.add('item');
    novoItem.innerHTML = item.nome;
    
    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade;
    
    novoItem.appendChild(numeroItem)
    lista.appendChild(novoItem)

    

}