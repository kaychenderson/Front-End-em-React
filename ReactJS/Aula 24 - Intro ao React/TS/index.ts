// import prompt from 'readline-sync' // Mais recente
// const prompt = require('readline-sync'); // Mais antiga

import { saudacao, PI } from "./exemplo.js"; // ESmodules

// const { saudacao, PI } = require('./exemplo.js'); // O TS está convertendo para essa forma do CommonJS, sendo necessário configurar o "module" no tsconfig.json para ES6

saudacao();

console.log(PI);

const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null = document.querySelector("#input-localizacao");

const sectionTempoInfo = document.querySelector("#tempo-info");

// O símbolo de interrogação '?' é colocado pelo TS para prevenção, pois há possibilidade do form retornar null.
form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!input || !sectionTempoInfo) {
    return;
  }

  const localizacao = input?.value;

  if (localizacao.length < 3) {
    alert("O local precisa ter pelo menos 3 letras.");
    return;
  }

  try {
    const resposta = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=08018fba0baecb5f1b780e6f94fbae03&lang=pt_br&units=metric`
    );
  
    const dados = await resposta.json();
  
    const infos = {
      temperatura: Math.round(dados.main.temp),
      local: dados.name,
      icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
    };
  
    sectionTempoInfo.innerHTML = `
          <div class="tempo-dados">
            <h2>${infos.local}</h2>
            <span>${infos.temperatura}</span>
          </div>
  
          <img src="${infos.icone}" />`;
  } catch (erro) {
    console.log("Deu erro na obtenção dos dados da API: ", erro);
  }
});
