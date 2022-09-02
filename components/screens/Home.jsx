import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Flex from "../ui/Flex";

const Home = () => {
  return (
    <React.Fragment>
      {" "}
      <div className="flex f-space-eve f-start">
        <section className={styles.homePage_section}>
          <Flex>
            {" "}
            <Image
              src="/logo.svg"
              alt="home-image-logo"
              width={100}
              height={100}
            />
            <h1>Welcome to Paathshaala</h1>
          </Flex>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Home;
