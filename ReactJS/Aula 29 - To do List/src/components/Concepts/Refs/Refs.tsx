import { FormEvent, useRef } from "react";
import styles from "./style.module.scss";

export const Refs: React.FC = () => {

  const inputNameRef = useRef<HTMLInputElement>(null); // { current: null }
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  function handleOnSubmit(event: FormEvent){
    event.preventDefault(); // Evita que a página seja recarregada ao submeter o formulário.
    console.log(inputNameRef.current?.value);
    console.log(inputEmailRef.current?.value);
    console.log(inputPasswordRef.current?.value);
  }

  return (
    <form className={styles.formRef} onSubmit={(event) => handleOnSubmit(event)}>
      <h1 className={styles.h1Ref}>UseRef</h1>

      <br />
      <input className={styles.inputRef} type="text" placeholder="Nome Completo" ref={inputNameRef}/>
      <input className={styles.inputRef} type="email" placeholder="Email" ref={inputEmailRef}/>
      <input className={styles.inputRef} type="password" placeholder="Senha" ref={inputPasswordRef}/>
      <br />
      <button className={styles.buttonRef} type="submit">Submeter</button>
    </form>
  );
};



// import { FormEvent, useRef, useState, useEffect } from "react";
// import styles from "./style.module.scss";

// export const Refs: React.FC = () => {
//.   // Ref para armazenar um valor que não causa re-renderização
//   const ref = useRef(0); // { current: 0 }

//.   // Estado para controlar o toggle
//   const [toggle, setToggle] = useState(false);

//.   // Função para manipular a ref
//   function handleClickButton() {
//     ref.current = ref.current + 1;
//     console.log(ref.current);
//   }

//.   // Refs para os inputs do formulário
//   const inputNameRef = useRef<HTMLInputElement>(null); // { current: null }
//   const inputEmailRef = useRef<HTMLInputElement>(null);
//   const inputPasswordRef = useRef<HTMLInputElement>(null);

//.   // Exemplo de uso do useEffect com ref
//   useEffect(() => {
//     console.log("Input refs:", inputNameRef, inputEmailRef, inputPasswordRef);
//   }, []);

//.   // Função para colocar foco no input ao clicar
//   function handleFocusInput() {
//     if (inputNameRef.current) {
//       inputNameRef.current.focus(); // Coloca o foco no input
//     }
//   }

//.   // Função de envio do formulário
//   function handleOnSubmit(event: FormEvent) {
//     event.preventDefault(); // Evita que a página seja recarregada
//     console.log("Nome:", inputNameRef.current?.value);
//     console.log("Email:", inputEmailRef.current?.value);
//     console.log("Senha:", inputPasswordRef.current?.value);
//   }

//   return (
//     <>
//       {/* Formulário com refs */}
//       <form className={styles.formRef} onSubmit={handleOnSubmit}>
//         <h1 className={styles.h1Ref}>UseRef - Formulário</h1>
//         <br />
//         <input
//           className={styles.inputRef}
//           type="text"
//           placeholder="Nome Completo"
//           ref={inputNameRef}
//         />
//         <input
//           className={styles.inputRef}
//           type="email"
//           placeholder="Email"
//           ref={inputEmailRef}
//         />
//         <input
//           className={styles.inputRef}
//           type="password"
//           placeholder="Senha"
//           ref={inputPasswordRef}
//         />
//         <br />
//         <button className={styles.buttonRef} type="submit">
//           Submeter
//         </button>
//         <button
//           className={styles.buttonRef}
//           type="button"
//           onClick={handleFocusInput}
//         >
//           Focar no Nome
//         </button>
//       </form>

//       {/* Div para manipular a ref */}
//       <div className={styles.container}>
//         <h1 className={styles.title}>UseRef - Contador</h1>
//         <p className={styles.text}>{`O valor da ref é: ${ref.current}`}</p>
//         <br />
//         <button className={styles.button} onClick={handleClickButton}>
//           Incrementar Ref
//         </button>
//         <br />
//         <button
//           className={styles.toggleBtn}
//           onClick={() => setToggle(!toggle)}
//         >
//           Toggle
//         </button>
//         {toggle && <p className={styles.text}>O toggle está ativo!</p>}
//       </div>
//     </>
//   );
// };