import { TasksContext } from "../../context/TasksContext";
import styles from "./style.module.scss";
import { FormEvent, useContext, useState } from "react";

// interface Task {
//   title: string;
//   done: boolean;
//   id: number;
// }

export const Tasks: React.FC = () => {

  const [taskTitle, setTaskTitle] = useState("");
  // const [tasks, setTasks] = useState([] as Task[]);

  const { tasks, setTasks } = useContext(TasksContext);
  
  /* 
    [
      {title: Tarefa 1, done: boolean, id: number}
    ]
  */

  // Função para armazenar o título da tarefa após clicar no botão de adicionar tarefa.
  // O TS exige o tipo do event
  function handleSubmitAddTask(event: FormEvent){ 
    event.preventDefault();
    
    if(taskTitle.length < 3){
      alert("Não é possível adicionar uma tarefa com menos de 3 caracteres.");
      return;
    }

    const newTask = {
      id: Date.now(), // Gerando uma chave única com base no timestamp
      title: taskTitle,
      done: false,
    };

    // Adicionar Tarefa
    const newTasks = [
      ...tasks, // Pega todas as tarefas que já existiam e coloca nesse novo valor de estado da tarefa.
      newTask,
    ]
    setTasks(newTasks); // O estado de tarefas leva um tempo pra atualizar e obter o novo valor atualizado, por isso utilizamos uma variável auxiliar 'newTasks' que possuirá.
    localStorage.setItem('tasks', JSON.stringify(newTasks)); // Adicionando as tarefas no localStorage

    setTaskTitle(''); // Limpando o input após adicionar tarefa.
  }

  function handleToggleTaskStatus(taskId: number){
    const newTasks = tasks.map((task) => {
      if(taskId === task.id) {
        return {
          ...task,
          done: !task.done
        }
      }

      return task;
    })

    setTasks(newTasks);
  }

  // Utilizar o filter para remover a tarefa do array de tarefas
  function handleRemoveTask(taskId: number) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks)); // Atualiza o localStorage também
  }

  // useEffect(() => {
  //   const tasksOnLocalStorage = localStorage.getItem('tasks');

  //   if(tasksOnLocalStorage) {
  //     setTasks(JSON.parse(tasksOnLocalStorage)); // Por termos transformado em string, temos que transformar agora em um array e armazenamos no estado de tarefas.
  //   }
  // }, []);

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}> 

        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>

          <input 
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)} // Pegar o que o usuário está digitando no input e pondo no estado, ou seja, definindo como o títlulo da tarefa.
            type="text" 
            id="task-title" 
            placeholder="Título da Tarefa" 
          />
        </div>

        <button type="submit">Adicionar Tarefa</button>
      </form>
      
      {/* Adicionando tarefas dinâmicamente */}
      <ul>
        {tasks.map((task) => {
          return ( // Voltando para o HTML
            <li key={task.id}> {/* A propriedade key: tem que está dentro do primeiro elemento a ser renderizado quando utilizamos um map. Para que o React consiga identificar qual elemento que será atualizado ou removido. */}

              <input 
                type="checkbox" 
                id={`task.${task.id}`} 
                onChange={() => handleToggleTaskStatus(task.id)}
              />

              <label 
                className={task.done ? styles.done : ''}
                htmlFor={`task.${task.id}`}>{task.title} 
              </label>

              <button 
                onClick={() => handleRemoveTask(task.id)}>Remover
              </button>
            </li>
          ); 
        })}
      </ul>   
    </section>
  )
}