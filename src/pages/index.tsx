import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

const REVALIDATE_TIME_SECONDS = 60 * 60 * 24; //24 hours

interface HomeProps {
  product: {
    priceId: string;
    price: number;
  };
}

export default function Home(props: HomeProps) {
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
            <span> for {props.product.price} month</span>
          </p>
          <SubscribeButton priceId={props.product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="girl-coding" />
      </main>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const price = await stripe.prices.retrieve("price_1KvV6OCNTTRyL0XV02V2n54D");

//   const product = {
//     priceId: price.id,
//     price: new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//     }).format(price.unit_amount / 100),
//   };
//   return { props: { product } };
// };

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1KvV6OCNTTRyL0XV02V2n54D");

  const product = {
    priceId: price.id,
    price: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };
  return { props: { product }, revalidate: REVALIDATE_TIME_SECONDS };
};
