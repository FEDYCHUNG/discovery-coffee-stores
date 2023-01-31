import styles from "./banner.module.css";
import { MouseEventHandler } from "react";

type LayoutProps = {
  buttonText: string;
  handleOnClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Banner({ buttonText, handleOnClick }: LayoutProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Pontianak</span>
      </h1>
      <p className={styles.subTitle}>Temukan Cafe Local! </p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleOnClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
