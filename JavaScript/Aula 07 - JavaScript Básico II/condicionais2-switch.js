// * Switch é muito útil quando sua variável possui valores específicos

// const permissoes = 'aluno'; // ? 'aluno' ou 'professor' ou 'admin'
// const permissoes = 'banana';

const permissoes = 'admin';

switch(permissoes){
    case 'aluno':
        console.log('Você só pode visualizar as aulas.');
        break;
    case 'professor':
        console.log('Você pode alterar as aulas e adicionar exercícios.');
        break;
    case 'admin':
        console.log('Você pode fazer o que quiser no sistema!');
        break;
    default:
        console.log('Não sei quem você é no sistema!');
}