// * Definição da função

function saudacao(){
    console.log('Olá, seja bem-vindo(o) ao curso de Front=end em React!');
}

saudacao(); // chamada da função saudação

// * 1. Função com parâmetros

// ? Exemplo 1
function saudacao(nomeEstudante, curso){
    return `Olá ${nomeEstudante}! Seja bem-vindo(a) ao curso de ${curso}!`;
}

saudacao('Kayc', 'Front-end em React'); 
const mensagem = saudacao('Kayc', 'Front-end em React');
const mensagem2 = saudacao('Kayc', "Back-end em Node.js");

console.log(mensagem);

function saudacao2(nomeEstudante, curso = "Front-end em React"){
    return `Olá ${nomeEstudante}! Seja bem-vindo(a) ao curso de ${curso}!`;
}

saudacao2('Kayc');
const mensagem3 = saudacao2('Kayc');

// ? Exemplo 2
function somar(numero1, numero2){
    return numero1 + numero2;
}

const resultado = somar(6, 4);

console.log(resultado);
console.log(resultado / 5);

// * 2. Funções anônimas
const dobroNumero = function (numero){
    return numero * 2;
}

const dobro = dobroNumero(2);
console.log(dobro);

// * 3. Arrow Functions
const subtrair = (numero1, numero2) => {
    return numero1 - numero2;
};

const multiplicar = (numero1, numero2) => numero1 * numero2;

const triploNumero = numero => numero * 3;


function funcao(array){
    let acc = 0;

    for(let elemento of array){
        acc += elemento;
    }

    return (acc / array.length);
}

console.log(funcao([4, 6, 4, 2]));