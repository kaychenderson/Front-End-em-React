import React from 'react';

// Ordem da montagem: 
// 1- contructor
// 2- componentWillMount
// 3- render
// 4- componentDidMount

// Atualização:
// 1- shouldComponentUpdate
// 2- componentWillUpdate
// 3- render
// 4- componentDidUpdate

// Desmontagem
// 1- componentWillUnmount

// shouldComponentUpdate(): Um metodo que será chamado sempre que houver uma mudança de porps ou estados. Caso o seu retorno seja true, ocorrerá uma atualização do componente. Caso seu retorno seja false, nada acontecerá.

// componentWillUnmount(): Método chamado pouco antes de momento em que um componente é desmontado (removido) da tela. Pode ser útil para, por exemplo:
// - Remover a inscrição de um evento que estava associado ao componente.
// - Cancelar uma requisição HTTP.
// - Invalidar algum timer.

export class Counter extends React.Component {
  constructor(){
    super();
    this.state = { contador: 0 };

    console.log("Construindo a classe Counter.");
  }

  UNSAFE_componentWillMount(){ // ! React está descontinuando, não utilize.
    console.log("O componente Counter será montado.");
  }

  componentDidMount(){
    console.log("O componente Counter foi montado. ✅");

    document.addEventListener('scroll', this.consoleClick);
  }

  // Será chamado sempre uma prop ou estado for atualizado.
  shouldComponentUpdate(){
    // if(this.state.contador === 2) return false;
    return true;
  }

  UNSAFE_componentWillUpdate(){ // ! React está descontinuando, não uitlize.
    console.log("O componente vai atualizar.");
  }

  componentDidUpdate(){
    console.log("O componente foi atualizado. ✅");
  }

  componentWillUnmount(){
    console.log("O componente será desmontador");

    document.removeEventListener('scroll', this.consoleClick);
  }

  consoleClick(){
    console.log("Rolando a página...");
  }

  render(){
    console.log("Renderizando o componente Counter.");
    return (
      <div>
        <h1>{this.state.contador}</h1>

        <button
          onClick={() => this.setState({ contador: this.state.contador - 1})}>Diminuir
        </button>

        <button 
          onClick={() => this.setState({ contador: this.state.contador + 1 })}>Aumentar
        </button>
      </div>
    );
  }
}