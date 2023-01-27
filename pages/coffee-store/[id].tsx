import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import coffeeStoresData from "../../data/coffee-stores.json";
import cls from "classnames";

import styles from "../../styles/Coffee-Store.module.css";

export function getStaticProps(staticProps: any) {
  const { params } = staticProps;

  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id; //dynamic id
      }),
    },
  };
}

export function getStaticPaths() {
  const paths = coffeeStoresData.map((coffeStore) => {
    return {
      params: {
        id: coffeStore.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

interface coffeeStore {
  id: number;
  name: string;
  imgUrl: string;
  websiteUrl: string;
  address: string;
  neighbourhood: string;
}

interface CoffeeStoreProps {
  coffeeStore: coffeeStore;
}

export default function CoffeeStore(props: CoffeeStoreProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleUpvoteButton = () => {
    console.log("handle upvote");
  };

  const { coffeeStore } = props;

  return (
    <div className={styles.layout}>
      <Head>
        <title>{coffeeStore.name}</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">Back to Home</Link>
          </div>

          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{coffeeStore.name}</h1>
          </div>

          {/* <div className={styles.storeImgWrapper}>
            <Image className={styles.storeImg} src={coffeeStore.imgUrl} width={300} height={600} alt={coffeeStore.name} />
          </div> */}
          <div className={styles.storeImgWrapper}>
            <Image className={styles.storeImg} src={coffeeStore.imgUrl} width={500} height={360} alt={coffeeStore.name} />
          </div>
        </div>

        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src="/images/icons/places.svg" width={24} height={24} alt="icon" />
            <p className={styles.text}>{coffeeStore.address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/images/icons/nearMe.svg" width={24} height={24} alt="icon" />
            <p className={styles.text}>{coffeeStore.neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/images/icons/star.svg" width={24} height={24} alt="icon" />
            <p className={styles.text}>1</p>
          </div>

          <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
            Up Vote!
          </button>
        </div>
      </div>
    </div>
  );
}
