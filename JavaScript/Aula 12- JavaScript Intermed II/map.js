// * Map: cria um novo array que possui o mesmo tamanho do array original composto pelos elementos que foram
// retornados a cada iteração.

const numeros = [40, 34, 67, 89, 23, 16, 10];

// const novoArray = numeros.map((elemento, index, arrayCompleto) => {});
// const novoArray = numeros.map((elemento, index, arrayCompleto) => {
//     return 1;
// });

const novoArray = numeros.map((elemento) => {
    return elemento * 2;
});

console.log(novoArray);

// ? Exemplo 1: Elevando todos os números ao quadrado
const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const valoresQuadado = valores.map((valor) => valor ** 2);

console.log(valoresQuadado);

// ? Exemplo 2: Adicionando uma propriedade aos objetos do array

const carrinho = [
    { produto: 'Feijão', preco: 7.98, quantidade: 3 },
    { produto: 'Arroz', preco: 4.98, quantidade: 5 },
    { produto: 'Leite 1L', preco: 6.99, quantidade: 2 }
];

const carrinhoTotal = carrinho.map((itemCarrinho) => {
    return {
        ...itemCarrinho,
        total: itemCarrinho.preco * itemCarrinho.quantidade,
    };
});

console.log(carrinhoTotal);

// ? Exemplo 3: Adicionando propridade peso a pessoa.
const pessoa = {
    nome: 'Henrique',
    idade: 27,
    altura: 1.77
}

pessoa.peso = 79;

// Desestruturação ou spread (operator)
const pessoaComPeso = {
    ...pessoa,
    peso: 79
}

console.log(pessoaComPeso);

// ? Exemplo 4: calculo IMC
const pessoa = [
    { nome: 'Pessoa 1', altura: 1.76, peso: 60 },
    { nome: 'Pessoa 2', altura: 1.80, peso: 80 },
    { nome: 'Pessoa 3', altura: 1.56, peso: 90 }
];

const calculoImcPessoas = pessoa.map((imcPessoa) => {
    return {
        ...imcPessoa,
        total: imcPessoa.peso / (imcPessoa.altura * imcPessoa.altura),
    }
});

console.log(calculoImcPessoas);
