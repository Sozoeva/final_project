import React from "react";
import styles from "./Home.module.scss";
// import video from "../../assets/video/video.mp4";
import { useNavigate } from "react-router";
import { Carousel } from "antd";
import { Button } from "../../shared";
import heroes_img from "../../assets/images/heroes.jpg";

export const Home = () => {
  const navigate = useNavigate();

  const showAboutPage = () => {
    navigate("/about");
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.home}>
        {/* <video autoPlay loop muted className={styles.home__video}>
          <source src={video} type="video/mp4" />
        </video> */}
        <section className={styles.home__title}>
          <h1>Welcome to Mortal Combat</h1>
          <div className={styles.home__title_btns}>
            <Button>
              <a
                href="https://www.youtube.com/watch?v=UZ6eFEjFfJ0"
                target="_blank"
              >
                Watch trailer
              </a>
            </Button>
            <Button onClick={showAboutPage}>Learn more</Button>
          </div>
        </section>
        <div className={styles.home__line}></div>
        <section className={styles.home__about}>
          <div className={styles.home__about_text}>
            <h2>Discover a new world</h2>
            <p>
              Get ready for an incredible battle where magic meets brutal moves!
              Enter the Mortal Kombat arena and prove your combat skills! Crush
              your enemies using deadly combos and carve your path to victory.
              Become a champion, fighting in the most legendary battle of all
              time!
            </p>
          </div>
          <div className={styles.home__about_imgs}>
            <div>
              <Carousel autoplay>
                <div>
                  <h3>New locations</h3>
                  <img
                    src="https://images8.alphacoders.com/133/1330819.png"
                    alt="Locations"
                  />
                </div>
                <div>
                  <h3>Interesting story</h3>
                  <img
                    src="https://images2.alphacoders.com/133/1337233.jpeg"
                    alt="Story"
                  />
                </div>
                <div>
                  <h3>Bloody battles</h3>
                  <img
                    src="https://images3.alphacoders.com/133/1330813.png"
                    alt="Battles"
                  />
                </div>
                <div>
                  <h3>New characters</h3>
                  <img
                    src="https://images5.alphacoders.com/132/1329225.jpeg"
                    alt="Characters"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
        <div className={styles.home__line}></div>
        <section className={styles.home__hero}>
          <img src={heroes_img} alt="" />
          <div className={styles.home__hero_content}>
            <h2>Become the best player</h2>
          </div>
        </section>
        <div className={styles.home__line}></div>
        <section className={styles.home__forum}>
          <h2>Be the first to know everything</h2>
        </section>
        <div className={styles.home__line}></div>
      </div>
    </main>
  );
};
