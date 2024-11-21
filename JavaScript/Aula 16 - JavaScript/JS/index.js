// * Fetch API

// TODO then/catch

// fetch("https://viacep.com.br/ws/01001000/json/")
//   .then((respostaRequisicao) => {
//     respostaRequisicao.json().then((dados) => console.log(dados));
//   })
//   .catch((erro) => {
//     console.log(erro);
//   }); // ! função que faz requisições http

// const endereco = "37440000";

// TODO async / await
async function obterDadosDoCep() {
    try {
      // const respostaRequisicao = await fetch(
      //   `https://viacep.com.br/ws/${endereco}/json/`
      // );
  
      const respostaRequisicao = await fetch(
        'https://viacep.com.br/ws/01001000/json/'
      );
  
      const dados = await respostaRequisicao.json();
  
      console.log(dados);
    } catch (erro) {
      console.log('Deu errado! ', erro);
    } finally {
      console.log('Terminou a requisição.');
    }
}
  
obterDadosDoCep();  