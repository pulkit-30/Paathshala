import Head from "next/head";
import styles from "../styles/Home.module.css";
import RegisterPage from "../components/screens/Register";

function Register() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paathshaala</title>
        <meta name="description" content="Connect and Grow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RegisterPage />
    </div>
  );
}

export default Register;
