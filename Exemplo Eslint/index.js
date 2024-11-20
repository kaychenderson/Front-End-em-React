// Instalando o Eslint: 
// npm install eslint -D ou npm install eslint --save-dev
// npx eslint --init

// * Lendo um arquivo JSON

const fs = require('fs');
const arquivo = '.prettierrc.json';

fs.readFile(arquivo, (erro, dados) => {
  if (erro) {
    console.log('Erro:', erro);
  } else {
// dados: Buffer com os dados do arquivo json
console.log(JSON.parse(dados)); // ! convertendo dados do arquivo para json
    const dadosObjeto = JSON.parse(String(dados)); // convertendo o buffer em um objeto do JS
    console.log(dadosObjeto.rules);
  }
});

// * Convertendo JSON, em formato de string, para um objeto.

const jsonString = '{"nome": "Kayc"}';
console.log(JSON.parse(jsonString));

// * Convertendo um objeto do JS, em um JSON (string).
const pessoa = {
  nome: 'Tony Stark',
  papel: 'Homem de Ferro',
};

console.log(JSON.stringify(pessoa));