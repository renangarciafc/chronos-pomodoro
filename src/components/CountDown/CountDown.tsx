import styles from './CountDown.module.css';

export function CountDown() {
  return (
    <span className={styles.countdown}>
      00:00
    </span>
  );
}