import Head from 'next/head';
import mulher from '../../public/images/mulher.svg';
import Image from 'next/image';
import styles from './home.module.scss'

import { GetStaticProps } from 'next';
import { SubscribeInButton } from '../components/SubscribeInButton';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Ig.News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>
            👏Hey, welcome!
          </span>
          <h1>News about the <span>React</span> world.</h1>
          <SubscribeInButton priceId={product.priceId} />
          <p>Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
        </section>
        <Image src={mulher} alt="mulher codando" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JLEaXLSgkzCJCnaDr7ELNSj');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US',
      {
        style: 'currency',
        currency: 'USD',
      }
    ).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}