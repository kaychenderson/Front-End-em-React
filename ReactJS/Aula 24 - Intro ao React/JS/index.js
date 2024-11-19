// import prompt from 'readline-sync' // Mais recente
// const prompt = require('readline-sync'); // Mais antiga
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { saudacao, PI } from "./exemplo.js"; // ESmodules
// const { saudacao, PI } = require('./exemplo.js'); // O TS está convertendo para essa forma do CommonJS, sendo necessário configurar o "module" no tsconfig.json para ES6
saudacao();
console.log(PI);
const form = document.querySelector("#search-form > form");
const input = document.querySelector("#input-localizacao");
const sectionTempoInfo = document.querySelector("#tempo-info");
// ! O símbolo de interrogação é colocado pelo TS como prevenção caso o form retorne null
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!input || !sectionTempoInfo) {
        return;
    }
    const localizacao = input === null || input === void 0 ? void 0 : input.value;
    if (localizacao.length < 3) {
        alert("O local precisa ter pelo menos 3 letras.");
        return;
    }
    try {
        const resposta = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=08018fba0baecb5f1b780e6f94fbae03&lang=pt_br&units=metric`);
        const dados = yield resposta.json();
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
    }
    catch (erro) {
        console.log("Deu erro na obtenção dos dados da API: ", erro);
    }
}));
