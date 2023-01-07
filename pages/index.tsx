import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("banner clicked");
  };

  return (
    <>
      <Head>
        <title>Coffee Pontianak</title>
        <meta name="description" content="Coffee Pontianak" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="Lihat caffee terdekat" handleOnClick={handleOnBannerBtnClick} />
      </main>
    </>
  );
}
