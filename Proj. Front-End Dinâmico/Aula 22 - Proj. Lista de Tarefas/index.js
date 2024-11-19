const form = document.querySelector('#todo-form');
const taskTitleInput = document.querySelector('#task-title-input');
const todoListUl = document.querySelector('#todo-list');
let tasks = []; //[{ title:'Tarefa 1', done: true, ...}]

function renderTaskOnHTML(taskTitle, done = false){
  // Adicionando a nova tarefa no HTML
  const li = document.createElement('li');

  const input = document.createElement('input'); //<input/>
  input.setAttribute('type', 'checkbox'); //<input type="checkbox"/>
  input.addEventListener('change', (event) => {
    const liToToggle = event.target.parentElement;

    const spanToToggle = liToToggle.querySelector('span');

    const done = event.target.checked;
    if (done) {
      spanToToggle.style.textDecoration = 'line-through';
    } else {
      spanToToggle.style.textDecoration = 'none';
    }

    tasks = tasks.map(t => {
      if(t.title == spanToToggle.textContent){
        return {
          title: t.title,
          done: !t.done,
        }
      } 
      return t;
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
  input.checked = done;

  const span = document.createElement('span');
  span.textContent = taskTitle; // <span>Tarefa 01</span>
  if(done) {
    span.style.textDecoration = 'line-through';
  }

  const button = document.createElement('button');
  button.textContent = 'Remover'; // <button>Remover</button>
  button.addEventListener('click', (event) => {
    const liToRemove = event.target.parentElement;

    const titleToRemove = liToRemove.querySelector('span').textContent; // Tarefa 1

    tasks = tasks.filter(t => t.title !== titleToRemove);

    todoListUl.removeChild(liToRemove);
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  todoListUl.appendChild(li); // Adicionando no final do elemento <ul>
}

window.onload = () => {
  tasksOnLocalStorage= localStorage.getItem('tasks');
  console.log(tasksOnLocalStorage);

  if(!tasksOnLocalStorage){
    return;
  }

  tasks = JSON.parse(tasksOnLocalStorage); // Pega o que é string e converte para um array de objetos.

  tasks.forEach(t => {
    renderTaskOnHTML(t.title, t.done);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita o comportamento padrão de carregar a página ao submeter o formulário.

  const taskTitle = taskTitleInput.value;

  if(taskTitle.length < 3){
    alert("Sua tarefa precisa ter pelo menos 3 caracteres.");
    return;
  }

  // Adicionando a nova tarefa no array de tasks
  tasks.push({
    title: taskTitle,
    done: false,
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));

  //Adicionando a nova Tarefa no HTML
  renderTaskOnHTML(taskTitle);

  taskTitleInput.value = ''; // String vazia para limpar o input após submissão de uma tarefa.
});

const themeToggleButton = document.querySelector('#theme-toggle-btn');
const body = document.body;

// Carrega o tema salvo no armazenamento local, se disponível
const savedTheme = localStorage.getItem('theme') || 'light-theme';
body.classList.add(savedTheme);
themeToggleButton.textContent = savedTheme === 'dark-theme' ? 'Tema Claro' : 'Tema Escuro';

// Alterna entre os temas e salva a preferência
themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');

  const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
  localStorage.setItem('theme', currentTheme);

  themeToggleButton.textContent = currentTheme === 'dark-theme' ? 'Tema Claro' : 'Tema Escuro';
});