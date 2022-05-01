import Head from "next/head";
import Image from "next/image";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏🏻 Hey welcome</span>
          <h1>
            News about the <span>React</span> world
          </h1>
          <p>
            Get access to all posts <br />
            <span> for $9.99 month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="girl-coding" />
      </main>
    </>
  );
}
