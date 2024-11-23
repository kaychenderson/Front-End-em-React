import { useEffect, useState } from "react";
import "./styles/App.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import { ThreeDots } from "react-loader-spinner"; // Instale o pacote: yarn add react-loader-spinner.
import axios from "axios"; 

function App() {
  const [news, setNews] = useState([]);

  // Deixando o projeto dinâmico:  
  // Instale axios: npm install axios ou yard add axios.
  //Para instalar o yarn: npm install yard

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await axios.get(
          "https://api.spaceflightnewsapi.net/v4/articles/?format=json"
        ); // Assíncrono
        const newsData = response.data.results; // Acesse a propriedade `results` do objeto retornado.
        setNews(newsData); // Atualize o estado com o array de artigos.
      } catch (error) {
        console.error("Erro ao carregar as notícias:", error);
      }
    }

    loadNews();
  }, []);

  return (
    <>
      <Navbar />

      <section id="articles">
        {news.length === 0 ? (
          <div
            style={{
              height: "400px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThreeDots
              height="80"
              width="80"
              radius="9" 
              color="white"
              ariaLabel="loading" 
            />
          </div>
        ) : (
          news.map((article) => (
            <Article
              key={article.id}
              title={article.title}
              provider={article.news_site} 
              description={article.summary}
              thumbnail={article.image_url} 
            />
          ))
        )}
      </section>
    </>
  );
}

export default App;