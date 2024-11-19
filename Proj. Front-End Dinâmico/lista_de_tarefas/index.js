// * Altera tema da página
const themeButton = document.querySelector('#theme-button');
const addTaskButton = document.querySelector('#add-task-button');

addTaskButton.classList.add('bi');
addTaskButton.classList.add('bi-pencil-square');

let darkTheme;

function alterarTemaPagina() {
  const bodyPage = document.querySelector('body');

  if (darkTheme) {
    bodyPage.style.backgroundColor = '#222222';
    bodyPage.style.color = '#ffffff';
    themeButton.classList.add('bi');
    themeButton.classList.add('bi-brightness-high-fill');
    themeButton.classList.remove('bi');
    themeButton.classList.remove('bi-moon-stars-fill');
    themeButton.style.backgroundColor = '#ffffff';
    //
  } else {
    bodyPage.style.backgroundColor = '#ffffff';
    bodyPage.style.color = '#222222';
    themeButton.classList.add('bi');
    themeButton.classList.add('bi-moon-stars-fill');
    themeButton.classList.remove('bi');
    themeButton.classList.remove('bi-brightness-high-fill');
    themeButton.style.backgroundColor = '#c8c8c8';
    // tarefa.style.color = '#ffffff';
  }
}

themeButton.addEventListener('click', (eventButton) => {
  darkTheme = !darkTheme;
  localStorage.setItem('isDarkTheme', darkTheme);

  alterarTemaPagina();
});

// * Pegando elementos do formulário html e da lista ul, e armazenando as informações nas constantes do js
const form = document.querySelector('#todo-form'); // ! pega o formulário
const taskTitleInput = document.querySelector('#task-title-input'); // ! pega o campo título no formulário
const todoListUl = document.querySelector('#todo-list'); // ! pega a lista ul

let tasks = []; // [{ title: 'Tarefa 1', done: false }, ...]

function renderTaskOnHTML(taskTitle, done = false) {
  const li = document.createElement('li'); // ! cria um elemento HTML
  // li.style.display = 'flex';
  // li.style.flexDirection = 'row';
  // li.style.justifyContent = 'space-around';
  li.style.alignItems = 'center';
  li.style.backgroundColor = '#f2f2f2';
  li.style.width = '600px';
  li.style.margin = '20px auto';
  li.style.padding = '20px';

  const input = document.createElement('input'); // ! cria um elemento input do HTML <input />
  input.setAttribute('type', 'checkbox'); // ! cria um atributo no elemento <input type="checkbox" />
  input.addEventListener('change', (eventButton) => {
    const liToToggle = eventButton.target.parentElement; // ! pega o elemento pai e armazena na constante liToToggle

    const spanToToggle = liToToggle.querySelector('span');

    const done = eventButton.target.checked; // ! verifica se o checkbox está marcado, e retorna true ou false na constante done

    if (done) {
      spanToToggle.style.textDecoration = 'line-through';
    } else {
      spanToToggle.style.textDecoration = 'none';
    }

    // ! percorre todas as tarefas
    tasks = tasks.map((t) => {
      // ! se o título for igual ao da tarefa que está sendo alternada, retorna o título, porém com o done com valor invertido
      if (t.title === spanToToggle.textContent) {
        return {
          title: t.title,
          done: !t.done,
        };
      }

      return t; // ! retorna a própria tarefa
    });

    localStorage.setItem('tasks', JSON.stringify(tasks)); // ! seta os itens da tasks no localstorage
  });

  input.checked = done; // ! pega o valor booleano do checkbox

  const span = document.createElement('span'); // ! cria um elemento input do HTML <span></span>
  span.textContent = taskTitle; // ! Atribui ao span o título da tarefa <span>Título-Tarefa</span>

  // ! Se done for false, a tarefa não é riscada
  if (done) {
    span.style.textDecoration = 'line-through';
  }

  span.style.color = '#222222';

  const button = document.createElement('button');
  // button.textContent = '  Remover  '; // ! Atribui ao botão o texto remover
  button.classList.add('bi');
  button.classList.add('bi-trash3-fill');
  button.style.width = '40px';
  button.style.height = '40px';
  button.style.backgroundColor = '#FA8072';
  button.style.border = 'none';
  button.style.borderRadius = '20px';

  // ? Cria o evento para o botão remover elemento da lista
  button.addEventListener('click', (eventButton) => {
    const liToRemove = eventButton.target.parentElement; // ! pega o elemento pai e armazena na constante liToRemove

    const titleToRemove = liToRemove.querySelector('span').textContent; // Tarefa 1

    // ! cria um filtro pra pegar apenas as tarefas com o título diferente do título que será removido e adiciona ao array final
    tasks = tasks.filter((t) => t.title !== titleToRemove);

    todoListUl.removeChild(liToRemove); // ! remove a li que foi pega

    localStorage.setItem('tasks', JSON.stringify(tasks)); // ! seta os itens da tasks no localstorage
  });

  // ! Adiciona os elementos html à pagina dentro da li
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  todoListUl.appendChild(li); // ! Adiciona o html à pagina
}

window.onload = () => {
  const isDarkThemeStorage = localStorage.getItem('isDarkTheme');
  darkTheme = isDarkThemeStorage === 'true';

  alterarTemaPagina();

  const tasksOnLocalStorage = localStorage.getItem('tasks');

  if (!tasksOnLocalStorage) return;

  tasks = JSON.parse(tasksOnLocalStorage);

  tasks.forEach((t) => {
    renderTaskOnHTML(t.title, t.done);
  });
};

// ? Adicionando um evento ao botão do formulário
form.addEventListener('submit', (eventButton) => {
  eventButton.preventDefault(); // ! Evita o comportamento padrão de recarregar a página ao submeter o formulário

  const taskTitle = taskTitleInput.value; // ! Pega o valor digitado no campo do formulário e armazena na constante taskTitle

  // ! verifica se o comprimento do título da tarefa tem menos de 3 caracteres, se não tiver ele sai da função
  if (taskTitle.length < 3) {
    alert('Sua tarefa precisa ter, pelo menos, 3 caracteres.');
    return; // ! sai da função sem rodar o restante do código
  }

  // ! Adiciona a nova tarefa no array tasks
  tasks.push({
    title: taskTitle,
    done: false,
  });

  localStorage.setItem('tasks', JSON.stringify(tasks)); // ! seta os itens da tasks no localstorage

  // ! Adicionando a nova tarefa no HTML

  renderTaskOnHTML(taskTitle);

  taskTitleInput.value = ''; // ! Limpa o input
});
