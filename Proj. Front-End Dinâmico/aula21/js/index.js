// * Tipos de eventos

// TODO evento click
const botaoAumentar = document.querySelector('#aumentar-botao'); // ! pega o botão dentro da section
const botaoDiminuir = document.querySelector('#diminuir-botao');

const contadorElemento = document.querySelector('#contador');

const input = document.querySelector('#input');

// ! adiciona um evento
botaoAumentar.addEventListener('click', (event) => {
  // ! pega o valor do contador com textContent, converte para number e armazena em valorAtual
  const valorAtual = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual + 1; // ! faz o incremento do contadorElemento

  botaoAumentar.classList.add('btn');
  botaoDiminuir.classList.remove('btn');
});

// ! adiciona um evento
botaoDiminuir.addEventListener('click', (event) => {
  // ! pega o valor do contador com textContent, converte para number e armazena em valorAtual
  const valorAtual = Number(contadorElemento.textContent);
  contadorElemento.textContent = valorAtual - 1; // ! faz o incremento do contadorElemento

  botaoDiminuir.classList.add('btn');
  botaoAumentar.classList.remove('btn');
});

// TODO evento input
input.addEventListener('input', () => {
  console.log(input.value);
});

// * Adicionando estilos inline no elemento contador
contadorElemento.style.color = 'red'; // altera a cor do elemento
contadorElemento.style.padding = '0 2rem';
contadorElemento.style.border = '3px solid #649';
contadorElemento.style.width = '15px';
contadorElemento.style.backgroundColor = '#AAA';

// TODO manipular classes
// console.log(botaoDiminuir.classList);
// botaoAumentar.classList.add('btn'); // ! adiciona uma classe em um elemento
// botaoDiminuir.classList.remove('btn'); // ! remove uma classe em um elemento

// ? Modificando o tema da página
const themeButton = document.querySelector('#theme');

let darkTheme;

function alteraTema() {
  const body = document.querySelector('body');

  if (darkTheme) {
    body.style.backgroundColor = '#222222';
    body.style.color = '#ffffff';
  } else {
    body.style.backgroundColor = '#ffffff';
    body.style.color = '#222222';
  }
}

// ! onload é o momento que recarrega a página

// ? Definindo uma função que será executada ao carregar o conteúdo da página/janela
window.onload = () => {
  const isDarkThemeStorage = localStorage.getItem('isDarkTheme'); // ! pega a informação do tema no localStorage

  darkTheme = isDarkThemeStorage === 'true';

  alteraTema();
};

themeButton.addEventListener('click', () => {
  darkTheme = !darkTheme;

  localStorage.setItem('isDarkTheme', darkTheme); // ! adiciona a informação do tema no localStorage

  alteraTema();
});

// ! Meus exemplos de teste
// const tituloH1 = document.querySelector('#tagTeste');
// const botaoTeste = document.querySelector('#teste-botao');

// botaoTeste.addEventListener('click', (event) => {
//   tituloH1.textContent = 'O teste funcionou';
// });

// localStorage.setItem('nome', 'Henrique'); // ! adiciona um item no localStorage
// localStorage.getItem('nome'); // ! pega um item no localStorage
// localStorage.removeItem('nome'); // ! remove um item no localStorage
// localStorage.clear() // ! limpa todos os dados do localStorage
