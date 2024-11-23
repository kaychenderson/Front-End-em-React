import styles from './style.module.scss';

// Tipando os componentes quando estão recebendo props, pois o TS exige.
interface StatsCardProps {
  title: string;
  value: number;
}

// <> (generic): passaremos a interface das propriedas.
// Após isso, podemos realizar a desestruturação do props.
export const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <article className={styles.stats_card}>
      <h2>{title}</h2>
      <span>{value}</span>
    </article>
  );
}