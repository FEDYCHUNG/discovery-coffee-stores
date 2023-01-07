import styles from "../../styles/Banner.module.css";
import { MouseEventHandler } from "react";

interface LayoutProps {
  buttonText: string;
  handleOnClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Banner(props: LayoutProps) {
  const { buttonText, handleOnClick } = props;

  return (
    <div className={styles.container}>
      <h1>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Pontianak</span>
      </h1>
      <p className={styles.subtitle}>Temukan Cafe Local! </p>
      <button className={styles.button} onClick={handleOnClick}>
        {buttonText}
      </button>
    </div>
  );
}
