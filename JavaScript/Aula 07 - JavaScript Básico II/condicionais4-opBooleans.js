// * Operadores Booleanos: Comparações

const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2);  // false (valores diferentes)
console.log(numero1 === numero2); // false (valores e tipos diferentes)
console.log(numero1 === '10');    // false (número não é estritamente igual a string)
console.log(numero1 == '10');     // true  (valores são iguais após conversão de tipos)

console.log(numero1 !== numero2); // true  (valores e/ou tipos são diferentes)
console.log(numero1 != '10');     // false (valores são iguais após conversão de tipos)

console.log(numero1 > numero2);   // false (numero1 não é maior que numero2)
console.log(numero1 < numero2);   // true  (numero1 é menor que numero2)

const idadePessoa1 = 16;
const idadePessoa2 = 39;

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18); // F /\ V = F
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18); // F \/ V = V

console.log(!true);

console.log(!(idadePessoa1 >= 18)); // ! Retorna verdadeiro se a pessoa for menor de idade