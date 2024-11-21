// * While
const prompt = require('readline-sync');

let idade = Number(prompt.question('Qual é sua idade? '));

// if(saldo < 0){
//     saldo = Number(prompt.question('Saldo inválido! Por favor, informe novamente: '));
// }
// console.log(saldo);

while(idade < 0){
    idade = Number(prompt.question('Saldo inválido! Por favor, informe novamente: '));
}
console.log(idade);

// ! Loop Infinito
let saldo2 = 0;

while(saldo < 0){
    console.log('Dentro do while');
}

console.log(saldo);

// * Exemplo 2:
const prompt = require('readline-sync');
let notaAluno = Number(prompt.question('Informe a nota do aluno: '));

let somaNotas = 0; // Acumulador
let qtdNotasValidas = 0; // Acumulador (Quantidade de notas válidas digitadas)

while(notaAluno >= 0){
    somaNotas += notaAluno; // Incrementando o acumulador (somaNotas)
    qtdNotasValidas++; // pós-incremento

    notaAluno = Number(prompt.question('Informe a próxima nota: '));
}

console.log(somaNotas);
console.log(qtdNotasValidas);

console.log('Média das notas dos alunos = ', somaNotas / qtdNotasValidas);

// * Exemplo 3:
const prompt = require('readline-sync');

// Math.random() => entre 0 e 1 por padrão
const numeroAleatorio = parseInt(Math.random() * 10);
let quantidadeTentativas = 0;

let numeroUsuario = Number(prompt.question('Informe um número entre 0  e 10: '));

console.log(numeroAleatorio);

while(numeroAleatorio !== numeroUsuario){
    console.log('Você errou o número! Tente novamente...');
    numeroUsuario = Number(prompt.question('Informe um número entre 0 e 10: '));
    quantidadeTentativas++;
}

console.log('Parabéns! Você acertou! O número era', numeroAleatorio);
console.log(`Você tentou ${quantidadeTentativas} vezes`);

// * Loop contador
const prompt = require('readline-sync');
let contador = 0;

while(contador < 5){
    console.log(contador);
    contador++;

    if(contador === 2){
        break;
        // continue; 
        // é usado para pular o restante do código no loop atual e iniciar a próxima iteração do loop. 
        // Quando o continue é alcançado, a execução volta ao início do loop, 
        // verificando novamente a condição do while.
    }

    console.log('Depois do if...');
}

// * do-while
const prompt = require('readline-sync');

let saldo; // undefined

do{
    saldo = Number(prompt.question('Informe um saldo válido: '));
}while(saldo < 0);

console.log(saldo);