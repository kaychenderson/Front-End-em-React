import React from 'react';
import './style.css';

/* 
  this.props = {
    title: "Designing Dashboards"
    provider: "NASA"
    description: "---"
  }
*/

export function Article({ title, provider, description, thumbnail }) {
  // Como parâmetro pode receber o objeto 'props' como consequência as propriedades devem ser passadas assim: props.propriedade; Ou podemos passar como parâmtro sua versão desestruturada acima.
  return (
    <article id="article">
      <img className="imgArticle" src={thumbnail} alt={title} />

      <div className="article-infos">
        <h2>{title}</h2>
        <h3>{provider}</h3>

        <p>{description}</p>
      </div>
    </article>
  );
}

// export default Article; //! Não é muito recomendado a exportação padrão, opite por realizar a exportação direta.