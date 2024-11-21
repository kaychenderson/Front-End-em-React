var nomeDoAluno = 'Maria Silva'; // string
var idade = 29; // number
var altura = 1.76; // number
var estudando = true; // boolean (booleano: verdadeiro ou falso)

console.log(nomeDoAluno, typeof nomeDoAluno);

console.log(idade, typeof idade);

console.log(altura, typeof altura);

console.log(estudando, typeof estudando);

var semConteudo;
console.log(semConteudo, typeof semConteudo);

var nulo = null;
console.log(nulo, typeof nulo);

var curso = 'Front-end em React', topico = 'JavaScript Básico I';
console.log(curso, topico);

// ! Não utilize o var nos códigos JS, um dos problemas do var é o problema de hoisting

let notaDoAluno = 10;
const mediaDoAluno = 8;

notaDoAluno = 9;
/* mediaDoAluno = 5;*/ // ! Não é permitido reatribuição de valor em uma constante

console.log(notaDoAluno);
console.log(mediaDoAluno);