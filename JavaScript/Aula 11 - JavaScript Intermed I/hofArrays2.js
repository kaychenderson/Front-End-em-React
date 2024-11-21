// Funções de Alta Ordem:

// * 4. Array.prototype.every(): verifica se todos os elementos 
// de um array seguem uma determinada condição retornada pela função.

const numeros = [40, 34, 67, 89, 23, 16, 10];

const todosPositivos = numeros.every((elemento) => elemento > 0); // retorna true, pois todos os elementos são maiores que 0
const todosmaioresQue30 = numeros.every((elemento) => elemento > 30); // retorna false, pois nem todos os elementos são maiores que 30

console.log(todosPositivos);

const pessoas = [
    {
        nome: 'Pessoa 1',
        idade: 34,
        altura: 1.77
    },
    {
        nome: 'Pessoa 2',
        idade: 25,
        altura: 1.56
    },
    {
        nome: 'Pessoa 3',
        idade: 46,
        altura: 1.82
    },
];

const todosMaioresIdade = pessoas.every((pessoa) => pessoa.idade >= 18); // true
const todosMaioresIdade2 = pessoas.every((pessoa) => pessoa.idade >= 18 && pessoa.altura >= 1.7); // false

console.log(todosMaioresIdade);

// * 5. Array.prototype.some(): verificar se algum elemento do array torna verdadeira 
// uma determinada condição retornada pela função

const numeros2 = [-1, 3, 7, -3, 5];

const retornoNumeros2 = numeros2.some((numero) => numero > 0);

console.log(retornoNumeros2); // true