// Explorando o DOM

// : Seletores: Obtendo elementos do DOM

// Selecionar elementos HTML da nossa página utilizando o document.

// console.log(document.title);
// console.log(document.URL);

// * 1. Pelo nome da Tag

const todosPs = document.getElementsByTagName('p');

console.log(todosPs[0]);

// * 2. Pelo nome da Classe

const todosclasseParagrafo = document.getElementsByClassName('paragrafo');

console.log(todosclasseParagrafo);

// * 3. Pelo name da Tag

const emailInput = document.getElementsByName('email');

console.log(emailInput);

// * 4. Pelo Id da Tag

const jsLogoImg = document.getElementById('email-input');

console.log('js-logo');

// * 5. Query Selector
// Utiliza tipo um seletor css para selecionar a primeira ocorrência do elemento

const imagem = document.querySelector('body > img#js-logo');

console.log(imagem);

// * 6. Query Selector All
// uUiliza tipo um seletor css para selecionar todas as ocorrências do elemento

const paragrafos = document.querySelectorAll('p');

console.log(paragrafos);

console.clear(); // Limpa Console


// : Acessando / Alterando o conteudo HTML das tags

const primeiroParagrafo = document.querySelector('p.paragrafo');

console.log(primeiroParagrafo);

console.log("textContent: ", primeiroParagrafo.textContent);
// ! o textContent pega o conteúdo em texto da tag, e se dentro dessa tag tiver uma tag filha, ele ignora e exibe apenas o texto dela.

console.log("innerHTML: ", primeiroParagrafo.innerHTML);
// ! o innerHTML pega o conteúdo em texto da tag, e se dentro dessa tag tiver uma tag filha, ele exibe ela e o texto dela também.

primeiroParagrafo.textContent = 'Outra coisa'; // Alterando o texto da tag html

primeiroParagrafo.textContent = '<strong>Outra coisa</strong>'; // Imprime a tag como texto, e não como html

primeiroParagrafo.innerHTML = '<strong>Outra coisa</strong>'; // Já nesse caso, entende que o strong é um html e renderiza ele

// ? Resumindo:
// ? textContent: tudo dentro da tag é texto incluindo html
// ? innerHTML: html é renderizado e texto é exibido

console.clear();

// value
const emailInput2 = document.getElementsByName('email');

console.log(emailInput2.value);

emailInput[0].value = 'teste@teste.com'; // O array emailInput[0] com o value coloca no input de email o valor 'teste@teste.com'


// : Adicionar elementos na página WEB

// * 1. createElement + (textContent)

const listaUl = document.querySelector('ul#lista'); 
const listaLis = document.querySelectorAll('ul > li');

const novaTagLi = document.createElement('li'); // Criando uma tag <li> vazia.
novaTagLi.textContent = 'Segundo Item'; // Adicionando um texto dentro da tag <li>

console.log(novaTagLi);

// * 2. appendChild e 3. insertBefore
// Adiciona elementos no final de outro elemento.

// listaUl.appendChild(novaTagLi); // ! Adiciona um elemento filho no final de uma tag html, nesse caso dentro da lista.

// Adiciona elemento antes do elemento informado no indice, neste caso, antes do 'Terceiro Item'
listaUl.insertBefore(novaTagLi, listaLis[1]);

listaUl.removeChild(listaLis[0]); // Remove o elemento de acordo com o indice
