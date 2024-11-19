"use strict";
// let numero = 20; // ? ts faz uma inferência de tipo nesse caso dizendo que essa variável no caso é numérica
let numero = 20; // ? tipando a variável como number
const pi = 3.14159; // ? entende que o tipo da constante é o próprio valor
// numero = 'jdsjfads'; // ! O tipo 'string' não pode ser atribuído ao tipo 'number'
// pi = 4;
// let nome = 'Henrique';
let nome = 'Henrique'; // tipando a variável como string
// nome = 10; // ! O tipo 'number' não pode ser atribuído ao tipo 'string'
// let correta = true;
let correta = true; // ? tipando a variável como boolean
let resultado = numero * pi; // ? ts identificou como number mesmo não tendo sido tipado manualmente
// const nomeDoUsuario = prompt('Qual é o seu nome?');
// console.log(nomeDoUsuario?.toUpperCase());
// const numeros = [1, 2, 3, 4, 5]; // tipando a variável como number array, ou seja number[]
// const numeros: string[] = [1, 2, 3, 4, 5]; // ? dá erro pois o array não é do tipo string
// const numeros: string[] = ['1', '2', '3', '4', '5'];
// const misto: (number | string)[] = ['Henrique', 29, 1.76]; // tipando o array como uma união de tipos (union type)
// const misto: any[] = ['Henrique', 29, 1.76, {}, {} => {}]; // outra forma de união de tipos (any anula o ts, portanto não é indicado usar essa forma)
// const numeros: number[] = [1, 2, 3, 4, 5]; // tipando array
const numeros = [1, 2, 3, 4, 5]; // outra forma de tipar array
const idades = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);
const menoresDeIdade = idades.filter((idade) => idade < 18);
// console.log(menoresDeIdade);
// for (const idade of idades) {
//   console.log(idade);
// }
const pessoaTupla = ['Henrique', 27]; // tipagem de tupla
const pessoa1 = {
    nome: 'Henrique',
    idade: 29,
    altura: 1.76,
};
pessoa1.profissao = 'Desenvolvedor';
console.log(pessoa1);
// parametros opcionais apenas no final
function choseNumber(numero1, numero2, 
// criterio?: 'greater' | 'lower' // o critério é opcional, porém obrigatoriamente tem que ser greater ou lower
criterio) {
    // o tipo depois dos parênteses dessa função indica o tipo de retorno
    switch (criterio) {
        case 'greater':
            return numero1 > numero2 ? numero1 : numero2;
        case 'lower':
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio > 0.5)
                return numero1;
            return numero2;
    }
}
// const numeroEscolhido = choseNumber(10, 20, 'greater');
// const numeroEscolhido = choseNumber(10, 20, 'lower');
const numeroEscolhido = choseNumber(10, 20, 'greater');
console.log(`Número escolhido: ${numeroEscolhido}`);
function somar(num1, num2) {
    // void, sem retorno
    return num1 + num2;
}
const pessoas = {
    qualquer_string_1: {
        nome: 'João',
        idade: 20,
        altura: 1.8,
    },
    qualquer_string_2: {
        nome: 'Maria',
        idade: 30,
        altura: 1.6,
    },
};
console.log(pessoas);
