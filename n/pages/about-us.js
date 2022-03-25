import Link from "next/link";
import Head from "next/head";
import Heading from "../components/Heading";
import Layout from "../components/layout/Layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About us | JS frameworks</title>
      </Head>

      <Heading heading="This is the about page" />
    </Layout>
  );
}
