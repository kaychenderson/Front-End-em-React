// O App.jsx controla o que irá aparecer na aplicação.
// Componentes baseados em classe
// Todo Componente terá agora a extenção .tsx, como o App.js = App.tsx

import React from "react";
import "./styles/App.css";

import { Navbar } from "./components/Navbar/Navbar"; // Quando o arquivo é .jsx ou .js naão precisa por a extenção.
import { Article } from "./components/Article/Article";
import article1Img from './assets/images/article01.png';
import article2Img from './assets/images/article02.jpg';
import article3Img from './assets/images/article03.jpg';
import article4Img from './assets/images/article04.jpg';
import { Counter } from "./components/Counter/Counter";

// * Componente em Classe é uma classe que herda a classe Component do React e retorna HTML dentro do método render.

class App extends React.Component {
  // Metodo responsável por renderizar o conteúdo HTML no nosso componente.
  // Atalho para acessar o conteúdo dos components: CTRL + click
  // Dentro do método render só pode conter uma tag: o fragment: <></>
  render(){
    return (
      <>
        <Navbar />

        <section id="articles">
          <Article 
            title="Designing Dashboards" 
            provider="NASA" 
            description="Amet minim mollit non deserunt ullanco est sit aliqua color do amet sint. Velit officia consequat duis enim velit mollit. Exercitation venium sonsequat sunt nostrud amet."
            thumbnail={article1Img}
          />
          <Article 
            title="Vibrant Portraits of 2024" 
            provider="Space News" 
            description="Amet minim mollit non deserunt ullanco est sit aliqua color do amet sint. Velit officia consequat duis enim velit mollit. Exercitation venium sonsequat sunt nostrud amet."
            thumbnail={article2Img}
          />
          <Article 
            title="36 days os Malayalam type"
            provider="Space Flight Now"
            description="Amet minim mollit non deserunt ullanco est sit aliqua color do amet sint. Velit officia consequat duis enim velit mollit. Exercitation venium sonsequat sunt nostrud amet."
            thumbnail={article3Img}
          />
          <Article 
            title="1000 miles" 
            provider="Space Trip" 
            description="Amet minim mollit non deserunt ullanco est sit aliqua color do amet sint. Velit officia consequat duis enim velit mollit. Exercitation venium sonsequat sunt nostrud amet."
            thumbnail={article4Img}
          />
        </section>

        <Counter />          
      </>
    ); 
  }
}

export default App;
