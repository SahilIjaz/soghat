import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Food & Beverage Store</title>
        <meta name="description" content="Best food and beverages online store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to My Food & Beverage Store</h1>
        <p>Delicious food and refreshing drinks delivered to your door!</p>
      </main>
    </>
  );
}
