// console.log(document.title); // ! Exibe o título no console
// console.log(document.URL); // ! Exibe a URL no console

// * Selecionar elementos HTML da página utilizando o document

// TODO Selecionando pelo nome da tag
// const todosH1s = document.getElementsByTagName('h1'); // ! Seleciona um elemento pela tag
// console.log(todosH1s);
// console.log(todosH1s[0]);

// const todosPs = document.getElementsByTagName('p'); // ! Seleciona um elemento pela tag
// console.log(todosPs[0]);
// console.log(todosPs);

// TODO Selecionando pelo nome da classe
// const todasClasseParagrafo = document.getElementsByClassName('paragrafo');
// console.log(todasClasseParagrafo);

// TODO Selecionando pelo atributo name do elemento
// const emailInput = document.getElementsByName('email');
// console.log(emailInput);

// TODO Selecionando pelo id do elemento
// const jsLogoImg = document.getElementById('js-logo');
// console.log(jsLogoImg);

// TODO Query Selector utiliza tipo um seletor css para selecionar a primeira ocorrência do elemento
// const imagem = document.querySelector('body > img');
// const imagem = document.querySelector('body > img#js-logo');
// console.log(imagem);

// const paragrafos = document.querySelector('p');
// console.log(paragrafos);

// TODO Query Selector All utiliza tipo um seletor css para selecionar todas as ocorrências do elemento
// const paragrafos = document.querySelectorAll('p');
// console.log(paragrafos);

// console.clear(); // ! limpa o console

// * Acessando/alterando o conteúdo HTML das tags

// const primeiroParagrafo = document.querySelector('p.paragrafo');
// console.log(primeiroParagrafo);
// console.log('Conteúdo:', primeiroParagrafo.textContent);

// ! o textContent pega o conteúdo em texto da tag, e se dentro dessa tag tiver uma tag filha, ele ignora e exibe apenas o texto dela
// console.log('textContent:', primeiroParagrafo.textContent);

// ! o innerHTML pega o conteúdo em texto da tag, e se dentro dessa tag tiver uma tag filha, ele exibe ela e o texto dela também
// console.log('innerHTML:', primeiroParagrafo.innerHTML);

// primeiroParagrafo.textContent = 'Outra coisa'; // ! alterando o texto da tag html
// primeiroParagrafo.textContent = '<strong>Outra coisa</strong>'; // ! imprime a tag como texto, e não como html
// primeiroParagrafo.innerHTML = '<strong>Outra coisa</strong>'; // ! já nesse caso, entende que o strong é um html e renderiza ele

// ? Resumindo:
// ? textContent: tudo dentro da tag é texto incluindo html
// ? innerHTML: html é renderizado e texto é exibido

// TODO value
// const emailInput = document.getElementsByName('email');
// console.log(emailInput.value);
// emailInput[0].value = 'teste@teste.com'; // ! o array emailInput[0] com o value coloca no input de email o valor 'teste@teste.com'

// TODO criando elementos na página HTML
const listaUl = document.querySelector('ul#lista'); // ! pega o elemento
const listaLis = document.querySelectorAll('ul > li');

const novaTagLi = document.createElement('li'); // ! cria um elemento e guarda em uma variável, porém ainda não está no HTML e está vazia
novaTagLi.textContent = 'Segundo item'; // ! adiciona um texto dentro da tag li que ainda não está no html
// listaUl.appendChild(novaTagLi); // ! adiciona um elemento filho no final de uma tag html, nesse caso dentro da lista

// TODO adicionando em uma ordem específica com insert before
listaUl.insertBefore(novaTagLi, listaLis[1]); // ! joga o novo elemento no índice 1 da lista (posição 2). A ordem é document.insertBefore(tagNova, onde_vai_ser_adicionado);
listaUl.removeChild(listaLis[0]); // ! remove o elemento de acordo com o indice
