console.log("Meu primeiro programa");

const idade = 23;
// console.log(idade);


// console.log(10 + 8 * 2);
// console.log((10 + 8) * 2);

// console.log("ano " + 2021);

//============== Conversão de tipos =======================
// console.log(parseInt("2") + parseInt("2"));

//========= Trabalhando com atribuição de variaveis =========
let nome = 'Gabriel';
const sobrenome = "Rio";

// console.log(nome, sobrenome);  // imprimir com espaço entre o nome e sobrenome;

nome = nome + ' ' + sobrenome;
// console.log(`Meu nome é ${nome}`);

//=============== Tranalhando coom listas ====================
const listaDeDesejos = new Array(
    'New York',
    'Canada',
    'Texas',
);
const cidades = ['Rio de Janeiro', 'Sao Paulo', 'Minas Gerais'];

listaDeDesejos.push('Curitiba'); // adicionando item a lista

// listaDeDesejos.splice(1, 2); // removendo item da lista

// =================== Condicionais ============================
const idadeComprador = 15;

if (idadeComprador >= 18) {
    listaDeDesejos.splice(0,1);
}

// ====================== LOOPS =================================
let contador = 0;
const destino = 'Canada';

while (contador < 3) {
    if (listaDeDesejos[contador] == destino) {
        console.log("Destino encontrado");
        break;
    }
    else {
        console.log("Destino nao encontrado")
    }

    contador += 1;
}