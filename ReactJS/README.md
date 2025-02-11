# 🚀 Introdução ao ReactJS

<div>
  <img align="left" alt="React Logo" height="80" width="80" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg" style="margin-right: 20px;" />

  O **ReactJS** é uma biblioteca JavaScript desenvolvida pelo Facebook que permite criar interfaces de usuário de forma eficiente e flexível. Ele facilita a construção de aplicativos com interfaces dinâmicas e responsivas, dividindo a aplicação em partes menores chamadas de **componentes**.
</div>

## ⚙ 1. O ReactJS pode ser utilizado para diferentes finalidades:

1. **Aplicações Web**
2. **Aplicações Mobile**
3. **Aplicações Desktop**
4. **Aplicações para TV**
5. **Aplicações de Realidade Aumentada**

A ideia central do React é criar **interfaces complexas** a partir de blocos de código menores, que chamamos de **componentes**. Com a componentização, fica mais fácil manter e reutilizar o código em várias partes da aplicação.
<div align="center">
  
  ![Ilustração da Componentização](https://github.com/user-attachments/assets/27775713-82a5-47df-a558-e8927047bdc8)
</div>

## 🔎 2. Principais Bibliotecas Associadas ao React

Cada tipo de aplicação possui uma biblioteca específica que facilita seu desenvolvimento com o React:

| Biblioteca        | Finalidade                       |
|-------------------|----------------------------------|
| **React DOM**     | Aplicações Web                   |
| **React Native**  | Aplicações Mobile                |
| **Electron**      | Aplicações Desktop               |
| **React TV**      | Aplicações para TV               |
| **React VR**      | Aplicações de Realidade Aumentada|

Link para a página oficial do ReactJS: [https://reactjs.org](https://reactjs.org)

---

## 💡 3. Como o React Funciona?

O React utiliza um conceito chamado **DOM Virtual** (ou **Virtual DOM**), que é uma representação leve da interface da aplicação. Quando ocorre uma atualização no estado ou nos dados de um componente, o Virtual DOM compara as mudanças com a interface atual e realiza apenas as atualizações necessárias, tornando o processo muito mais rápido e eficiente.

Além disso, o React usa **compiladores e empacotadores** para transformar e otimizar o código:

- **Babel**: Transforma o código JavaScript moderno para uma versão compatível com navegadores mais antigos.
- **Webpack**: Empacota todos os arquivos e módulos da aplicação em um único arquivo otimizado para uso em produção.

---

## 🛠 4. Configuração Básica do React

Para configurar e iniciar um projeto em React, siga os passos abaixo:

### 4.1. Instale o webpack-cli para empacotamento
```bash
npm install webpack-cli
```

### 4.2. Crie o arquivo de configuração do Webpack
#### Crie um arquivo chamado "webpack.config.js" na raiz do projeto e adicione suas configurações conforme necessário

### 4.3. Inicialize o Webpack
```bash
npx webpack
```

### 4.4. Inicie um novo projeto em React com o Create React App
```bash
npx create-react-app primeiro-projeto
```

### 4.5. Navegue até a pasta do projeto
```bash
cd primeiro-projeto
```

### 4.6. Execute o projeto
```bash
npm start
```

### 4.7. Abra o projeto no editor de código
```bash
code .
```

## 📥 5. Props e State:

- **Props**: Propriedades que permitem passar dados de um componente pai para um componente filho. Props são imutáveis, o que significa que não podem ser alteradas pelo componente que as recebe.

#### Exemplo de Uso:

```bash
  function Saudacao(props) {
    return <h1>Olá, {props.nome}!</h1>;
  }

  function App() {
    return <Saudacao nome="Henry" />;
  }
``` 

- **State**: é um objeto local gerenciado dentro do componente que permite armazenar e atualizar informações dinâmicas. Diferente das props, o state é mutável e é utilizado para controlar o comportamento interativo de um componente.

```bash
class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}
```

## 🛠️ 6. Componentes em Classe VS Componentes Funcionais

### 6.1. Componentes em Classe:
Os componentes em classe foram amplamente utilizados antes da introdução dos Hooks. Eles oferecem acesso ao estado e aos métodos do ciclo de vida do React, mas tendem a ser mais verbosos.

#### Exemplo:
```bash
class Saudacao extends React.Component {
  render() {
    return <h1>Olá, {this.props.nome}!</h1>;
  }
}
```

### 6.2. Componentes Funcionais:
Com os Hooks, os componentes funcionais passaram a suportar estado e ciclo de vida, tornando-os mais compactos e simples de escrever.

#### Exemplo:
```bash
function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}
```
## 🔄 7. Ciclo de Vida do React

### 7.1. Estapas do Ciclo de vida do React
- 1. Montagem
- 2. Atualização
- 3. Desmontagem

#### 🏗️ 7.1.1. Montagem:

Quando o componente é criado e inserido no DOM.

- constructor(): Inicializa o estado e vincula os métodos.
- componentWillMount() (descontinuado): Executado antes da montagem do componente.
- render(): Retorna os elementos JSX para exibir na interface.
- componentDidMount(): Executado após o componente ser montado no DOM. Ideal para chamadas de API.

#### ♻️ 7.1.2. Atualização:

Quando o estado ou as props do componente mudam.

- shouldComponentUpdate(): Decide se o componente deve ser atualizado.
- componentWillUpdate() (descontinuado): Executado antes da atualização.
- render(): Atualiza os elementos na interface.
- componentDidUpdate(): Executado após a atualização

#### 🗑️ 7.1.3. Desmontagem:
Quando o componente é removido do DOM.

- componentWillUnmount(): Limpa assinaturas, timers ou outros recursos.

## ⚙️ 8. React Funcional e Hooks

### 8.1. Hook de Estado:
O useState permite adicionar estado a componentes funcionais.

```bash
import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
```

### ⚡ 8.2. Hook de Efeito:
O useEffect gerencia efeitos colaterais, como chamadas de API ou manipulação de eventos.

```bash
import { useState, useEffect } from 'react';

function Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(intervalo); // Cleanup
  }, []);

  return <p>Hora Atual: {hora.toLocaleTimeString()}</p>;
}
```
### 📌 8.3. Hook de Referência:
O useRef cria uma referência que persiste entre renders. Ideal para acessar diretamente elementos DOM.

```bash
import { useRef } from 'react';

function EntradaFoco() {
  const inputRef = useRef();

  const focarInput = () => inputRef.current.focus();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focarInput}>Focar no Input</button>
    </div>
  );
}
```
### 🚀 8.4. Hook de Memoização:
O useMemo otimiza o desempenho ao memorizar valores calculados.

```bash
import { useState, useMemo } from 'react';

function SomaPesada({ num }) {
  const resultado = useMemo(() => {
    let soma = 0;
    for (let i = 0; i < 1e6; i++) soma += i;
    return soma + num;
  }, [num]);

  return <p>Soma Pesada: {resultado}</p>;
}
```
### 8.5. Hook de Contexto:
O useContext consome valores do Context API, evitando o prop drilling.

```bash
import React, { createContext, useContext } from 'react';

const TemaContexto = createContext('claro');

function Botao() {
  const tema = useContext(TemaContexto);
  return <button className={tema}>Clique Aqui</button>;
}

function App() {
  return (
    <TemaContexto.Provider value="escuro">
      <Botao />
    </TemaContexto.Provider>
  );
}
```
