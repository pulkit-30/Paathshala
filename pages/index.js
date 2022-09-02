import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
import Feed from "../components/screens/Feed";
import HomePage from "../components/screens/Home";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Paathshaala</title>
        <meta name="description" content="Connect and Grow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* user login then render feed page */}
      {session && <Feed />}
      {/* user not login then render home-default page */}
      {!session && <HomePage />}
    </div>
  );
}
