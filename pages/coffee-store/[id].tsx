import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import coffeeStoresData from "../../data/coffee-stores.json";
import cls from "classnames";

import styles from "../../styles/Coffee-Store.module.css";
import { fetchCoffeeStores } from "../../lib/coffe-stores";

export async function getStaticProps(staticProps: any) {
  const { params } = staticProps;

  const coffeeStores = await fetchCoffeeStores();

  return {
    props: {
      coffeeStore: coffeeStores.find((coffeeStore: any) => {
        return coffeeStore.fsq_id.toString() === params.id; //dynamic id
      }),
    },
  };
}

export async function getStaticPaths() {
  const coffeeStores = await fetchCoffeeStores();

  const paths = coffeeStores.map((coffeStore: any) => {
    return {
      params: {
        id: coffeStore.fsq_id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

interface Location {
  address: string;
  locality: string;
  neighborhood: string;
}

interface coffeeStore {
  fsq_id: string;
  name: string;
  imgUrl: string;
  websiteUrl: string;
  address: string;
  neighbourhood: string;
  location: Location;
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

          <div className={styles.storeImgWrapper}>
            <Image
              className={styles.storeImg}
              src={
                coffeeStore.imgUrl ||
                "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              }
              width={500}
              height={360}
              alt={coffeeStore.name}
            />
          </div>
        </div>

        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src="/images/icons/places.svg" width={24} height={24} alt="icon" />
            <p className={styles.text}>{coffeeStore.location.address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/images/icons/nearMe.svg" width={24} height={24} alt="icon" />
            <p className={styles.text}>{coffeeStore.location.neighborhood}</p>
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
