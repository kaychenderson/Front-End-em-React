import React from "react";
import { Counter } from "./Components/Counter/Counter";

class App extends React.Component {
  constructor() {
    super();

    this.state = { showCounter: false };
  }

  render() {
    return (
      <div>
        <h1>Ciclo de Vida do React</h1>

        <button
          onClick={() => {
            this.setState({ showCounter: !this.state.showCounter });
          }}
        >
          {this.state.showCounter ? "Remover Contador" : "Mostrar Contador"}
        </button>

        { this.state.showCounter ? <Counter />: null } {/* true: mostre o contador, false: não mostre */}
      </div>
    );
  }
}

export default App;
