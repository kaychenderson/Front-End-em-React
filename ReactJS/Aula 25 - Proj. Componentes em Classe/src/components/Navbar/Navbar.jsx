import React from "react";
import logoImg from '../../assets/images/logo.png';
import "./style.css"

export class Navbar extends React.Component {
  render() {
    return (
    <header>
      <nav id="nav-bar">
        <div className="nav-brand">
          <img src={logoImg} alt="" />
          <h1>Space Flight News</h1>
        </div>

        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/">Tranding</a></li>
          <li><a href="/">Categories</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </nav>
    </header>
    )
  }
}

// export default Navbar; // ! Não é muito recomendado a exportação padrão, opite por realizar a exportação direta.
