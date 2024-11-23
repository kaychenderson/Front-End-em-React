// npx create-react-app todo-list --template typescript
// npm install sass

import './styles/global.css';

import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';
import { TasksProvider } from './context/TasksContext';
// import { Memoization } from './components/Concepts/Memoization/Memoization';
// import { Refs } from './components/Concepts/Refs';

function App() {
  return (
    <TasksProvider>
      <Header />
      <Tasks />
      {/* <Refs /> */}
      {/* <Memoization financialData={{ incomes: [60, 40, 40], outcomes: [30, 30, 20] }}/> */}
    </TasksProvider>
  );
}

export default App;



// import { useState } from 'react';

// const [toggle, setToggle] = useState(false);

  // O useEffect será disparado quando alguma variável do array de dependências for alterado.
  // Por padrão, sempre o useEffect será disparado após a montagem do componente.
  // (componentDidMount)
    // useEffect(() => {
      //   console.log("Ola...");

      // ? componentWillUnmount (Cleanup Function)

      //   return () => {
      //     console.log("Isso vai ser executado quando o componente App for desmontado.");
      //   };
    // }, [toggle]);

    // <button 
    //     onClick={() => setToggle(!toggle)}>Toggle
    // </button>