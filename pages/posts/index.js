import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First post</title>
        </Head>
        <h1>🔥 Stuff from the internet</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>
  );
}
