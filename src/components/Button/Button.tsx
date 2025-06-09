import styles from './styles.module.scss';

function Button({ children }: { children: React.ReactNode }) {
  return <button className={styles.btn}>{children}</button>;
}

export default Button;
