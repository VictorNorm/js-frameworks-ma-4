import Layout from "../components/layout/Layout";
import Head from "../components/Head";
import Heading from "../components/Heading";
import { baseUrl } from "../constants/api";
import axios from "axios";
import Image from "next/image";

export default function Games(props) {
  console.log(props);
  return (
    <Layout>
      <Head>
        <title>Games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading heading="This is the game page" />
      <div className="game-wrapper">
        {props.games.map((game) => {
          return (
            <div key={game.id} className="game-container">
              <Image
                src={game.background_image}
                width="300"
                height="150"
                alt="An image of the game"
              />{" "}
              <h3>{game.name}</h3>
            </div>
          );
        })}
      </div>
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
