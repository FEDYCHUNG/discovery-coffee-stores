import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
import cls from "classnames";

interface CardProps {
  name: string;
  imgUrl: string;
  href: string;
}

export default function Card(props: CardProps) {
  return (
    <Link href={props.href} className={styles.cardLink}>
      <div className={cls("glass", styles.container)}>
        <div className={styles.cardHeaderWrapper}>
          <h2>{props.name}</h2>
        </div>
        <div className={styles.cardImageWrapper}>
          <Image src={props.imgUrl} width={260} height={160} alt="card" className={styles.cardImage} />
        </div>
      </div>
    </Link>
  );
}
