// Escutadores de Eventos e Estilos

// const button = document.querySelector('section button');

// button.addEventListener('click', (event) => {
//   console.log(event);
// });


// * 1. addEventListener

const botaoDiminuir = document.querySelector('#diminuir-botao');
const botaoAumentar = document.querySelector('#aumentar-botao'); // Pega o botão dentro da section.

const contadorElemento = document.querySelector('#contador');

// 1.1. Evento: 'click'
// Adiciona um evento
botaoAumentar.addEventListener('click', (event) => {
  // Pega o valor do contador com textContent, converte para number e armazena em valorAtual.
  const valorAtual = Number(contadorElemento.textContent);
  contadorElemento.textContent = valorAtual + 1; // Faz o incremento do contadorElemento.

  botaoAumentar.classList.add('btn');

  botaoDiminuir.classList.remove('btn');

  atualizarCor();
});

// Adiciona um evento
botaoDiminuir.addEventListener('click', (event) => {
  // Pega o valor do contador com textContent, converte para number e armazena em valorAtual.
  const valorAtual = Number(contadorElemento.textContent); 
  contadorElemento.textContent = valorAtual - 1; // Faz o decremento do contadorElemento.

  botaoDiminuir.classList.add('btn');

  botaoAumentar.classList.remove('btn');

  atualizarCor();
});

// 1.2. Evento: 'input'
const input = document.querySelector('#input');

input.addEventListener('input', (event) => {
  console.log(input.value);
});

// * 2. Adicionando Estilos inline de elementos

// contadorElemento.style.color = 'red';
contadorElemento.style.padding = '0 2rem';
contadorElemento.style.backgroundColor = '#aaa';
contadorElemento.style.border = '1px solid #aaa';
contadorElemento.style.borderRadius = '20px';
contadorElemento.style.width = '30px';

function atualizarCor() {
  if (Number(contadorElemento.textContent) < 0) {
    contadorElemento.style.color = 'red';
  } else if (Number(contadorElemento.textContent) > 0) {
    contadorElemento.style.color = 'green';
  } else {
    contadorElemento.style.color = 'white'; 
  }
}

// * 3. Manipulando classes

console.log(botaoDiminuir.classList);

// botaoAumentar.classList.add('btn'); // ! adiciona uma classe em um elemento

// botaoDiminuir.classList.remove('btn'); // ! remove uma classe em um elemento

// * 4. Modificando o tema da página

const themeButton = document.querySelector('#theme');

let darkTheme;

// Definindo uma função que será executada ao carregar o conteúdo da janela.
window.onload = () => {
  const isDarkThemeStorage = localStorage.getItem('isDarkTheme');  // Retorna uma string ou null

  // darkTheme = isDarkThemeStorage === 'true' ? true : false;
  //Otimizando, pois se satisfazer a condição vai retornar um booleano:
  darkTheme = isDarkThemeStorage === 'true';

  alteraTema();
};

themeButton.addEventListener('click', (event) => {
  darkTheme = !darkTheme;

  localStorage.setItem('isDarkTheme', darkTheme); // Adiciona a informação do tema no localStorage.

  alteraTema();
});

function alteraTema() {
  const body = document.querySelector('body');

  if(darkTheme){
    body.style.backgroundColor = '#222';
    body.style.color = '#d4d4d4';
  } else {
    body.style.backgroundColor = '#d4d4d4';
    body.style.color = '#222';
  }
}

// * 5. WEB Storage API
// localStorage vs sessionStorage
// No sessionStorage, aofechar a aplicação e abrir novamente todos os dados são perdido.
// No localStrogem, os dados são mantidos.

// localStorage.setItem('nome', 'Pedro'); // ! adiciona um item no localStorage
// localStorage.getItem('nome'); // ! pega um item no localStorage
// localStorage.removeItem('nome'); // ! remove um item no localStorage
// localStorage.clear() // ! limpa todos os dados do localStorage

// O mesmo funciona para o sessionStorage:
// sessionStorage.getItem()
// sessionStorage.setItem()
// sessionStorage.removeItem()
// sessionStorage.clear()