import Layout from "../components/layout/Layout";
import Head from "../components/Head";
import Heading from "../components/Heading";
import { baseUrl } from "../constants/api";
import axios from "axios";

export default function Games(props) {
  console.log(props);
  return (
    <Layout>
      <Head>
        <title>Games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading heading="This is the game page" />
      {props.games.map((game) => {
        return <div key={game.id}>{game.name}</div>;
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  console.log("asdasdasdasd");
  let games = [];
  try {
    const response = await axios.get(baseUrl);
    console.log(response.data);
    games = response.data.results;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      games: games,
    },
  };
}
