import React from "react";
import styles from "./Home.module.scss";
import video from "../../assets/video/video.mp4";

export const Home = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.home}>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <section className={styles.home__title}>
          <h1>Welcome to Mortal Combat</h1>
          <div>
            <button>Watch trailer</button>
            <button>Learn more</button>
          </div>
        </section>
      </div>
    </main>
  );
};
