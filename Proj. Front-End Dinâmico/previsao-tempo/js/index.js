var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { saudacao, PI } from './exemplo.js'; // ! Importação do tipo ES Modules: import { função1, função2 } do_arquivo './exemplo.ts'
// import { PI } from './exemplo'; // ! import { função } do_arquivo './exemplo.ts'
// const { saudacao, PI } = require('./exemplo.js'); // ! importação do tipo CommonJS
saudacao();
console.log(PI);
// ? Obs: A importação dará erro então será necessário alterar o tsconfig.json de "module": "CommonJS"
// ? para "module": "ES6" na linha 28
const form = document.querySelector('#search-form > form');
const input = document.querySelector('#input-localizacao');
const sectionTempoInfo = document.querySelector('#tempo-info');
// ! o símbolo de interrogação é colocado pelo ts como um prevenção caso o form retorne algum null
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (eventButton) => __awaiter(void 0, void 0, void 0, function* () {
    eventButton.preventDefault();
    if (!input || !sectionTempoInfo)
        return;
    const localizacao = input.value;
    if (localizacao.length < 3) {
        alert('O local precisa ter, pelo menos, 3 letras.');
        return;
    }
    try {
        const resposta = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=cd103e4154f94c3cf572f0e29ef4e4b6&lang=pt_br&units=metric`);
        const dados = yield resposta.json();
        console.log(dados);
        const infos = {
            temperatura: Math.round(dados.main.temp),
            local: dados.name,
            icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
        };
        sectionTempoInfo.innerHTML = `
  <div class="tempo-dados">
    <h2>${infos.local}</h2>
    <span>${infos.temperatura}°C</span>
  </div>
  <img src="${infos.icone}" />
  `;
    }
    catch (err) {
        console.log('Deu um erro na obtenção dos dados da API.', err);
    }
}));
