import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Card from "../components/Card";
import logger from "../logger";

import coffeeStoresData from "../data/coffee-stores.json";
import { fetchCoffeeStores } from "../lib/coffe-stores";

export async function getStaticProps(context: any) {
  const data = await fetchCoffeeStores();
  return {
    props: {
      coffeeStores: data,
    },
  };
}

interface coffeeStore {
  fsq_id: string;
  name: string;
  imgUrl: string;
  websiteUrl: string;
  address: string;
  neighbourhood: string;
}

interface HomeProps {
  coffeeStores: coffeeStore[];
}

export default function Home(props: HomeProps) {
  try {
    const { coffeeStores } = props;

    const handleOnBannerBtnClick = () => {
      console.log("banner clicked");
    };

    return (
      <div className={styles.container}>
        <Head>
          <title>Coffee Pontianak</title>
          <meta name="description" content="Coffee Pontianak" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>

            <Banner buttonText="Lihat caffee terdekat" handleOnClick={handleOnBannerBtnClick} />

            <div className={styles.heroImage}>
              <Image src="/images/hero-image.png" width={700} height={400} alt="hero" />
            </div>
            {coffeeStores.length > 0 && (
              <>
                <h2 className={styles.heading2}>Pontianak Store</h2>
                <div className={styles.cardLayout}>
                  {coffeeStores?.map((coffeeStore) => (
                    <div className={styles.card} key={coffeeStore.fsq_id}>
                      <Card
                        name={coffeeStore.name}
                        imgUrl={
                          coffeeStore.imgUrl ||
                          "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                        }
                        href={`/coffee-store/${coffeeStore.fsq_id}`}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
        </main>
      </div>
    );
  } catch (error) {
    logger.error(error);
  }
}
