// * Aula 19 - POO

interface IPessoa {
  nome: string;
  idade: number;
  altura: number;

  dormir: () => void;
}

// TODO Criação de classe (classe = abstração de atributos e métodos)
class Pessoa implements IPessoa {
  // ! implements cria um "contrato", e obriga a classe a implementar todos os atributos definidos na interface
  // ? Atributos (características)
  nome: string;
  idade: number;
  altura: number;
  private _cpf: string; // ! um atributo privado no ts tem que ter um underline na frente do nome para ser acessado
  // readonly cpf: string; // ! readonly deixa o atributo que é privado, acessível apenas pra leitura

  // ? Métodos (ações / funções)

  // ! Método construtor
  constructor(nome: string, idade: number, altura: number, cpf: string) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this._cpf = cpf;
  }

  dormir() {
    console.log('zzzzzzz... 😴');
  }

  // accessor: getter
  get cpf(): string {
    return this._cpf;
  }

  // accessor: setter
  // set cpf(novoCpf: string) {
  //   this._cpf = novoCpf;
  // }

  set cpf(novoCpf: string) {
    if (novoCpf.length !== 14) {
      // Lançando um erro
      throw new Error('CPF length is incorrect!');
    }

    this._cpf = novoCpf;
  }
}

class Professor extends Pessoa {
  // ! extends herda atributos da classe Pessoa nesse exemplo
  codigo: string;

  constructor(
    nome: string,
    idade: number,
    altura: number,
    cpf: string,
    codigo: string
  ) {
    // ! o super chama os atributos do construtor da classe mãe, a classe que estou herdando os atributos
    super(nome, idade, altura, cpf);
    this.codigo = codigo;
  }

  ensinar() {
    console.log('Ensinando...');
  }
}

// * Criando uma pessoa (individuo/objeto) a partir da definição da classe Pessoa
const pessoa1 = new Pessoa('Henrique', 29, 1.76, '123.456.789-00');
const pessoa2 = new Pessoa('Maria', 25, 1.56, '123.456.789-01');

console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa1.altura);
console.log(pessoa1);
pessoa1.dormir();

console.log(pessoa2);
console.log(pessoa2.nome);
console.log(pessoa2.idade);
console.log(pessoa2.altura);
console.log(pessoa1.cpf);
pessoa2.dormir();

pessoa1.nome = 'João';

console.log(pessoa1);

pessoa1.cpf = '999.999.999-99';
// pessoa1.cpf = '999.999'; // ! Retorna o erro "Error: CPF length is incorrect!"

// pessoa1.altura = 123.78; // ! vai ser atribuído um valor de altura errada, porém isso é por conta da falta de verificação

console.log(pessoa1);

// * Objeto da classe professor
const professor = new Professor(
  'Professor Joaquim',
  30,
  1.68,
  '123.456.789.10',
  '0001'
);

console.log(professor);
professor.dormir();
professor.ensinar();

// * Polimorfismo
// ! instanceof verifica se pessoa1 é uma instância da classe pessoa
console.log(pessoa1 instanceof Pessoa); // true
console.log(pessoa1 instanceof Professor); // false
console.log(professor instanceof Pessoa); // true
console.log(professor instanceof Professor); // true
