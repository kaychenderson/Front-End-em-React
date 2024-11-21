const prompt = require('readline-sync');

// expressão 1: inicialização da variável de controle
// expressão 2: condição de permanência do for
// expressão 3: o incremento da variável de controle

// for(expressão 1; expressão 2; expressão 3){
    // excopo do for
// }
    
let execuções = 0;
for(let i = 0; i < 5; i++){
    console.log(i);
    execuções++;
}
console.log('Executado: ' + execuções + ' vezes');

for(let i = 0; i <= 9; i+=2){
    console.log(i);
}

for(let i = 0; i < 5; i++){
    console.log(i);
}

// Limpando o console
console.clear();

// ? Exemplo 1: Informando o maior número
let maiorNumero = 0;
let numeroInformado;

for(let i = 1; i <= 5; i++){
    numeroInformado = Number(prompt.question('Informe um número positivo: '));

    if(numeroInformado > maiorNumero){
        maiorNumero = numeroInformado;
    }
}

console.log('Maior número: ', maiorNumero);

// ? Exemplo 2: Percorrendo strings com for

const nome = 'Kayc';

console.log(nome.length); // 4
console.log(nome[0]); // K
console.log(nome[3]); // c

for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

// * Arrays

// const nota1 = 10;
// const nota2 = 8;
// const nota3 = 7;
const notasAluno = [10, 8, 7];
const pessoa = ['Kayc', 20, 1.76, true];

console.log(notasAluno);   // [10, 8, 7]
console.log(pessoa);       // ['Kayc', 29, 1.76, true]
console.log(pessoa[1]);    // 20

pessoa[3] = false;         
console.log(pessoa);       // ['Kayc', 29, 1.76, false]

console.log(notasAluno.length);  // 3
console.log(pessoa.length);      // 4

// * Fatiamento de arrays
const numeros = [40, 34, 67, 89, 23, 10];

// Retorna os elementos do índice 0 até o índice 2 (não inclui o índice 2)
console.log(numeros.slice(0, 2)); // Saída: [40, 34]

// Retorna os elementos do índice 2 até o índice 2 (como os índices são iguais, retorna um array vazio)
console.log(numeros.slice(2, 2)); // Saída: []

// Retorna os elementos do índice 2 até o final do array
console.log(numeros.slice(2)); // Saída: [67, 89, 23, 10]

// * Adicionando elementos no final do array
numeros.push(0);      
console.log(numeros);   // [40, 34, 67, 89, 23, 10, 0]

// * Adicionando elementos no início do array
numeros.unshift(-1);
console.log(numeros);   // [-1, 40, 34, 67, 89, 23, 10, 0]

// * pop: remove o elemento que está no final do array
numeros.pop(); // remove o elemento 0 (do final)
numeros.pop(); // remove o elemento 10 (do final)
console.log(numeros);   // [-1, 40, 34, 67, 89, 23]

// * shift: remove o primeiro elemento do array
numeros.shift();  // remove o elemento -1 (do inicio)
console.log(numeros);   // [40, 34, 67, 89, 23]

// * includes: verifica se um elemento existe no array
console.log(numeros.includes(20));  // false
console.log(numeros.includes(40));  // true

if(numeros.includes(20)){
    console.log('Opa! Existe o número 10 dentro do array numeros!');
}else{
    console.log('Não existe o número 20 no array numeros.');
}

const existeNumero = numeros.includes(20);
console.log(existeNumero);

// * indexOf: verifica a posição do elemento no array, se retornar -1 o elemento não existe no array
const indiceElemento = numeros.indexOf(20);  // -1 (Não existe)
const indiceElemento2 = numeros.indexOf(89); // 3

console.log(indiceElemento);
console.log(indiceElemento2);

// * lastIndexOf: verifica a ultima ocorrẽncia do elemento no array, se retornar -1 o elemento não existe no array
const numbers = [40, 34, 23, 67, 89, 23, 10];
const elementIndex = numeros.lastIndexOf(23); // 5

console.log(elementIndex);

// * Percorrendo arrays com for
const arr = [45, 36, 90, 76, 32, 7];

for(let i = 0; i < arr.length; i++){
    console.log(i, arr[i]);
}

// * for-of
for(const elemento of arr){
    console.log(elemento);
}

// * for-in
for(const indice in arr){
    console.log(indice, typeof indice);
    console.log(arr[0]);
}