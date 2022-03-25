import Link from "next/link";
import Head from "next/head";
import Heading from "../components/Heading";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>JS frameworks MA 4</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading heading="This is the home page" />
    </Layout>
  );
}
