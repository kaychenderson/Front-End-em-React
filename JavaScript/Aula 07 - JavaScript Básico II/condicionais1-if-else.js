// * Estruturas Condicionais

const prompt = require('readline-sync');

const idade = Number(prompt.question('Qual é a sua idade? '));

const maiorIdade = idade >= 18;
console.log(maiorIdade);

// ? if/else
if(idade >= 18){
    console.log('Você é maior de idade!');
}else{
    console.log('Você é menor de idade!');
}


// * Exemplo 1:
// const mediaAluno = 10;
// const mediaAluno = 4;
// const mediaAluno = 5;
const mediaAluno = 7.8;

// Média >= 7             => Aprovado
// Média < 7 e Média >= 5 => Prova final
// Média < 5              => Reprovado

if(mediaAluno >= 7){
    console.log('Aprovado!');
}else if(mediaAluno >= 5 && mediaAluno < 7){
    console.log('Prova final');
}else{
    console.log('Reprovado!');
}
// Outra forma:
if(mediaAluno >= 7){
    console.log('Aprovado!');
}else if(mediaAluno >= 5){
    console.log('Prova final');
}else{
    console.log('Reprovado!');
}

// * Exemplo 2:
const prompt = require('readline-sync');
const idade2 = Number(prompt.question('Qual sua idade? '));
    
if(idade2 >= 18){
    const temCNH = prompt.question('Tem CNH? s/n ');
    if(temCNH === 's' || temCNH === 'S'){
        console.log('Pode dirigir!');
    }else if(idade2 >= 18 && temCNH === 'n' || temCNH === 'N'){ 
        console.log('Não pode dirigir, mas pode tirar CNH!');
    }else{
        console.log('Erro: Foi respondido se possui CNH com caracteres não permitidos!')
    }
} else if(idade2 < 18){
    console.log('Não pode dirigir! Permitido somente à partir dos 18 anos e com CNH!');
}

// * Exemplo 3:
const idadePessoa = 29;
const temCNH = false;

if(idadePessoa >= 18 && temCNH){
    console.log('Você pode dirigir!');
}else{
    console.log('Você NÃO pode dirigir!');
}