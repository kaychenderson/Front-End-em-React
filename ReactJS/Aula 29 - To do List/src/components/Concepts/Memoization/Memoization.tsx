import React, { useMemo, useState } from "react";
import styles from './style.module.scss';

interface MemoizationProps {
  financialData: {
    incomes: number[];
    outcomes: number[];
  };
}

export const Memoization: React.FC<MemoizationProps> = ({ financialData }) => {
  // Estado que define se os valores devem ser mostrados ou não.
  const [showValues, setShowValues] = useState(true);

  // Implementando o useMemo:
  const totalIncomes = useMemo(() => {
    return financialData.incomes.reduce((total, income) => {
      console.log("Calculando o total de Receitas...");
      return total += income;
    }, 0)
  }, [financialData.incomes]);

  const totalOutcomes = useMemo(() => {
    return financialData.outcomes.reduce((total, outcome) => {
      console.log("Calculando o total de Despesas...");
      return total += outcome;
    }, 0);
  }, [financialData.outcomes]);

  // Implementando o useCallback sem dependência externa:
  // function soma(num1: number, num2: number){
  //   console.log(num1 + num2);
  // }
  // soma(10, 20);

  // Se possuir uma dependência externa na função, afunção vai ser recriada. Ex:

  // const aplicarDesconto = useCallback((desconto: number) => {
  //   return (totalOutcomes * (1 - desconto));
  // }, [totalOutcomes]);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Memoization</h1>

      <h2 className={styles.h2}>UseMemo</h2>

      <p className={styles.p}>{`Total de Receitas: R$ ${ showValues ? totalIncomes : 'XXXXX' }`}</p>

      <p className={styles.p}>{`Total de Despesas: R$ ${ showValues ?totalOutcomes : 'XXXXX' }`}</p>

      <button 
        className={styles.button}
        onClick={() => setShowValues(!showValues)}>
        { showValues ? 'Ocultar Valores' : 'Mostrar Valores' }
      </button>
    </div>
  );
}