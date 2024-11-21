const fs = require('fs');
const caminhoArquivo = './arquivo.txt';

// * 1. Callbacks

console.log('Antes de ler o arquivo...')

// Função assíncrona (ler um arquivo leva um tempo)
fs.readFile(caminhoArquivo, (erro, conteudoArquivo) => {
    if(erro){
        console.log('Ocorreu um erro ao tentar ler o arquivo:', erro);
    }else{
        console.log(conteudoArquivo);
    }
});

// ! A função assíncrona é executada por último, pois leva mais tempo para ser processada
// Função assíncrona (ler um arquivo leva um tempo)
fs.readFile(caminhoArquivo, (erro, conteudoArquivo) => {
    if(erro){
        console.log('Ocorreu um erro ao tentar ler o arquivo:', erro);
    }else{
        console.log(conteudoArquivo);
        console.log(String(conteudoArquivo)); // Sem converter pra string, como na linha acima, será exibido o buffer do arquivo
    }
});

console.log('Depois da função de ler o arquivo...');
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// * Exemplo 2: setTimeout()

console.log('Antes do setTimeout...');

setTimeout(() => {
    console.log('Isso aqui vai ser executado após 2 segundos');
}, 2 * 1000); // 2 * 1000 equivale a 2000ms = 2seg

console.log('Depois do setTimeout...');

// * 2. Promises (promessas)

// * resolve: promessa resolvida
// * reject: promessa não resolvida
// * pending: promessa pendente
const fs = require('fs');

console.log('Antes da criação da promessa...');

const promessa = new Promise((resolve, reject) => {
    fs.readFile(caminhoArquivo, (erro, conteudoArquivo) => {
        if(erro){
            reject('Ocorreu um erro ao tentar ler o arquivo!', erro);
        }else{
            resolve(String(conteudoArquivo));
        }
    });
});

// Foco a partir daqui...
promessa.then((retornoResolvePromessa) => {
    console.log('Deu certo!');
    console.log(retornoResolvePromessa);
}).catch((erro) => {
    console.log('Deu erro!');
    console.log(erro);
}).finally(() => {
    console.log('Isso aqui vai ser executado, independente do sucesso ou fracasso da promessa, no final dela.');
});

// * Exemplo 3
const fs = require('fs');

console.log('Antes da criação da promessa...');

function lerArquivoPromise(){
    return new Promise((resolve, reject) => {
        fs.readFile(caminhoArquivo, (erro, conteudoArquivo) => {
            if(erro){
                reject('Ocorreu um erro ao tentar ler o arquivo!', erro);
            }else{
                resolve(String(conteudoArquivo));
            }
        });
    });
}

lerArquivoPromise().then((retornoResolvePromessa) => {
    console.log('Deu certo!');
    console.log(retornoResolvePromessa);
}).catch((erro) => {
    console.log('Deu erro!');
    console.log(erro);
}).finally(() => {
    console.log('Isso aqui vai ser executado, independente do sucesso ou fracasso da promessa, no final dela.');
});

// * 3. async/await
const fs = require('fs');

// Promessa
function lerArquivoPromise(){
    return new Promise((resolve, reject) => {
        fs.readFile(caminhoArquivo, (erro, conteudoArquivo) => {
            if(erro){
                reject('Ocorreu um erro ao tentar ler o arquivo!', erro);
            }else{
                resolve(String(conteudoArquivo));
            }
        });
    });
}

// ? Faz a execução sequencial
async function leituraDados(){
    console.log('Isso é executado antes da promise ser resolvida!');
    
    try{
        const dadosArquivoLido = await lerArquivoPromise(); //! espera a promessa ser resolvida para avançar no código
        console.log(dadosArquivoLido);
        console.log('Isso é executado DEPOIS da promise ser resolvida!');
    }catch(err){
        console.log(err);
        console.log('Isso aqui é executado depois da promise (com erro)');
    }finally{
        console.log('Dentro do finally!');
    }
}

leituraDados();
