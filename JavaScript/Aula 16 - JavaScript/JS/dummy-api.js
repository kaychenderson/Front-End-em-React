// ! Função para pegar usuários
async function getUsers() {
    const respostaRequisicao = await fetch(
      'https://dummyapi.io/data/v1/user?created=1',
      {
        headers: {
          'app-id': '662ac8ae9995da0f7a0c1ff6',
        },
      }
    );
  
    const usuarios = await respostaRequisicao.json();
  
    console.log(usuarios.data);
}
  
getUsers();
  
// ! Função para pegar UM usuário específico
async function getUser() {
    const respostaRequisicao = await fetch(
      'https://dummyapi.io/data/v1/user/662acc651846fb8d32d189a8',
      {
        headers: {
          'app-id': '662ac8ae9995da0f7a0c1ff6',
        },
      }
    );
  
    const usuario = await respostaRequisicao.json();
  
    console.log(usuario);
}
  
getUser();
  
// ! Função para criar um usuário
async function createUser() {
    const dadosUsuario = {
      firstName: 'Outro',
      lastName: 'Usuario 2',
      email: 'outro.john.doe2@teste.com',
    };
  
    try {
      await fetch('https://dummyapi.io/data/v1/user/create', {
        method: 'POST',
        headers: {
          'app-id': '662ac8ae9995da0f7a0c1ff6',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosUsuario),
      });
    } catch (erro) {
      console.log('Deu erro ao tentar criar um novo usuário: ', erro);
    }
}
  
// createUser();
  
// ! Função para pegar UM usuário específico
async function deleteUser() {
    const respostaRequisicao = await fetch(
      'https://dummyapi.io/data/v1/user/662af4a81846fb476ad1c10b',
      {
        method: 'DELETE',
        headers: {
          'app-id': '662ac8ae9995da0f7a0c1ff6',
        },
      }
    );
  
    const usuarioDeletado = await respostaRequisicao.json();
  
    console.log(usuarioDeletado);
}
  
// deleteUser();
  