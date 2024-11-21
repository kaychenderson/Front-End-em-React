// * Operador Ternário

const idade = 29;

idade >= 18 ? console.log('Maior de idade') : console.log('Menor de idade');

const mensagem = idade >= 18 ? 'Maior de idade' : 'Menor de idade';
console.log(mensagem);

const aviso = idade >= 18 ? 'Maior de idade' : idade >= 16 ? 'Já pode votar' : 'Não pode votar';
console.log(aviso);

// if(50 > 100){
//     console.log('Falta um tanto');
// }else{
//     if('1' == '-1'){
//         console.log('Quase lá');
//     }

//     if(!null){
//         console.log('Sucesso');
//     }
// }