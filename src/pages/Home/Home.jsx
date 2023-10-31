import React from "react";
import styles from "./Home.module.scss";
import video from "../../assets/video/video.mp4";
import { useNavigate } from "react-router";
import { Carousel } from "antd";
import fist_slider from "../../assets/images/first_slider_img.jpeg";
import heroes_img from "../../assets/images/heroes.jpg"
import { Button } from "../../shared";

export const Home = () => {
  const navigate = useNavigate();

  const showAboutPage = () => {
    navigate("/about");
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.home}>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
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
                  <img src={fist_slider} alt="" />
                </div>
                <div>
                  <h3>Interesting story</h3>

                  <img src={fist_slider} alt="" />
                </div>
                <div>
                  <h3>Bloody battles</h3>

                  <img src={fist_slider} alt="" />
                </div>
                <div>
                  <h3>New characters</h3>
                  <img src={fist_slider} alt="" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
        <section className={styles.home__hero}>
          <img src={heroes_img} alt="" />
          <h2>Become the best player</h2>
        </section>
        <section className={styles.home__forum}>
          <h2>Be the first to know everything</h2>
        </section>
      </div>
    </main>
  );
};
