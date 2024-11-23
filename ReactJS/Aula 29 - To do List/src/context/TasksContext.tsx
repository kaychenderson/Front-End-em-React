import { createContext, useEffect, useState } from "react";

export interface Task {
  title: string;
  done: boolean;
  id: number;
}

interface TasksContextProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TasksContext = createContext({} as TasksContextProps);

interface TasksProviderProps {
  children: React.ReactNode;
}

export const TasksProvider:React.FC<TasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem('tasks');

    if(tasksOnLocalStorage) {
      setTasks(JSON.parse(tasksOnLocalStorage)); // Por termos transformado em string, temos que transformar agora em um array e armazenamos no estado de tarefas.
    }
  }, []);

  return (
    <TasksContext.Provider value={{
      tasks,
      setTasks,
    }}>
      { children }
    </TasksContext.Provider>
  )
}