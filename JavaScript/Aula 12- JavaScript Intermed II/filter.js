// * 1. Filter

// map: sempre retorna um array de mesmo tamanho do array original
// filter: sempre retorna um array de tamanho igual ou inferior ao tamanho do array original

let valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const parEncontrado = valores.find((valor) => valor % 2 === 0);
const pares = valores.filter((valor) => valor % 2 === 0);

console.log(pares);

// ? Exemplo 01: Crie um código que obtenha apenas os dados dos alunos que têm média superior a 85 e print na tela
const alunos = [
    { nome: 'Quincy', media: 96 },
    { nome: 'Jason', media: 84 },
    { nome: 'Alexis', media: 100 },
    { nome: 'Sam', media: 64 },
    { nome: 'Katie', media: 90 },
];

let mediaAlunos = alunos.filter((aluno) => aluno.media > 85);

console.log(mediaAlunos); // Quincy, Alexis e Katie

// ? Exemplo 2: Crie um script para filtrar apenas os produtos que custam menos de R$ 10,00 e não são bebida:
const produtos = [
    { nome: 'Suco de laranja', preco: 7.50, tipo: 'Bebida' },
    { nome: 'Batada frita', preco: 10.50, tipo: 'Comida' },
    { nome: 'Pizza', preco: 12.49, tipo: 'Comida' },
    { nome: 'Chocolate', preco: 1.50, tipo: 'Comida' },
    { nome: 'Pastel', preco: 4.50, tipo: 'Comida' },
    { nome: 'Coca', preco: 6.99, tipo: 'Bebida' },
];

let produtosFiltrados = produtos.filter((produto) => produto.preco < 10.00 && produto.tipo !== 'Bebida');

console.log(produtosFiltrados); // Chocolate e Pastel

