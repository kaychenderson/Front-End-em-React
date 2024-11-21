// * Object Literal

const array = ['Kayc', 20, 1.78, true];

const pessoa = { 
    nome: 'Kayc',
    idade: 20,
    altura: 1.78,
    programador: true,
    hobbies: ['Estudar', 'Programar', 'Ler'],
    imprimirAlgo: () => {
        console.log('Chamada função imprimir algo!');
    }
};

console.log(pessoa);

console.log(pessoa.nome); // Kayc
console.log(pessoa.hobbies); // ['Estudar', 'Programar', 'Ler']
console.log(pessoa.hobbies[1]); // [Programar]
console.log(pessoa['idade']); // 20

pessoa.profissao = 'Desenvolvedor'; // Adicionando novo atributo ao objeto pessoa
pessoa.nome = 'João'; // reatribuindo valor ao atributo nome

console.log(pessoa); 

delete pessoa.altura; // deletando atributo. Uso: delete objeto.atributo

console.log(pessoa);

pessoa.imprimirAlgo();

const idade = 27;
const altura = 1.77;

const objeto = {
    idade,
    altura,
}

console.log(objeto);

const { nome, hobbies } = pessoa;

console.log(nome);
console.log(hobbies);
console.log(pessoa);