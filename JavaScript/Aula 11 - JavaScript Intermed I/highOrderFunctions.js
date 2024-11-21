// * High Order Functions

// * 1. Função que retorna outra função como parâmetro

function welcome(courseName){

    return (studentName) => {
        console.log(`Olá, ${studentName}! Seja bem-vindo(a) ao curso de ${courseName}!`);
    };

}

const displayWelcomeToFrontEndCourse = welcome('Front-end em React');
const displayWelcomeToBackEndCourse = welcome('Back-end em Node.js');

displayWelcomeToFrontEndCourse('Kayc');
displayWelcomeToBackEndCourse('João');

// * 2. Função que recebe outra função como parâmetro

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

// funcaoOperacao: será a função que vai realizar a operação entre os dois números, ou seja, 
// ela precisa ser uma função que receba dois números.

// const calcular = (num1, num2, funcaoOperacao) => funcaoOperacao(num1, num2);

const calcular = (num1, num2, funcaoOperacao) => {
    return funcaoOperacao(num1, num2);
}

const retornoSoma = calcular(10, 5, somar);
const retornoSubtracao = calcular(10, 3, subtrair);
const retornoMultiplicacao = calcular(2, 4, multiplicar);
const retornoDivisao = calcular(6, 2, dividir);

console.log(retornoSoma);
console.log(retornoSubtracao);
console.log(retornoMultiplicacao);
console.log(retornoDivisao);

// O calculo que eu quero é: (num1 + num2) + (2 * num1 * num2)
const resultado = calcular(10, 5, (num1, num2) => (num1 * num2) + (2 * num1 * num2));

console.log(resultado);