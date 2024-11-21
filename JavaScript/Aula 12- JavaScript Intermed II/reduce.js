// Reduce: usado para reduzir os elementos de um array a um único valor, aplicando uma função de 
// callback acumulativa. Ele percorre o array e combina seus elementos de acordo com a lógica fornecida, 
// retornando o valor final.

// ? Exemplo 01: soma dos elementos 
const numeros = [1, 2, 3, 4, 5];

// acumulador: aquilo que está sendo reduzido
const soma = numeros.reduce((acumulador, elemento) => {
    return elemento + acumulador;
}, 0); // 0 é o valor inicial do acumulador

console.log(soma); // 1 + 2 + 3 + 4 + 5 = 15

// ? Exemplo 02: média
// um underline "_" indica que está sendo ignorado o parãmetro
const media = numeros.reduce((acumulador, elemento, _, arrayCompleto) => { 
    return  (elemento / arrayCompleto.length + acumulador);
}, 0);

console.log(media); // (1+2+3+4+5)/5 = 15/5 = 3

// ? Exemplo 03: soma pares
const somaPares = numeros.reduce((acumulador, numero) => {
    // se o número for par
    if(numero % 2 === 0){
        return acumulador + numero;
    }else{
        return acumulador;
    }
}, 0);

console.log(somaPares); // 2 + 4 = 6

// ? Exemplo 4: Carrinho
const carrinho = [
    { produto: 'Feijão', preco: 7.98, quantidade: 3 },
    { produto: 'Arroz', preco: 4.98, quantidade: 5 },
    { produto: 'Leite 1L', preco: 6.99, quantidade: 2 },
];

const totalPagar = carrinho.reduce((acumulador, item) => {
    return item.preco * item.quantidade + acumulador;
}, 0);

console.log(totalPagar); // 7.98 * 3 + 4.98 * 5 + 6.99 * 2 = 62.82