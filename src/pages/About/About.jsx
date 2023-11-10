import React, { useEffect } from "react";
import styles from "./About.module.scss";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getForum } from "../../store";

export const About = () => {

  return (
    <section className={styles.about}>
      <section className={styles.about__pack}>
        <img
          src="https://cdn-mk1.mortalkombat.com/media/kombat-pack.jpg"
          alt="Kombat-pack img"
        />

        <div className={styles.about__pack_discrip}>
          <div>
            <h3>JUSTICE. THEIR WAY.</h3>
            <h2>KOMBAT PACK</h2>
          </div>
          <div>
            <h4>
              Introducing your roster for the Mortal Kombat 1 Kombat Pack
              fighters.
            </h4>
            <h3>
              TAKEDA • QUAN CHI • ERMAC • PEACEMAKER • HOMELANDER • OMNI-MAN
            </h3>
          </div>
          <video autoPlay loop muted className={styles.home__forum_video}>
            <source
              src="https://cdn-mk1.mortalkombat.com/media/kombat-pack.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
      <video autoPlay loop muted className={styles.about__line}>
          <source src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4" type="video/mp4" />
        </video>       
         <section className={styles.about__kameo}>
        <div className={`${styles.about__kameo_about} ${"container"}`}>
          <div>
            <h2>KAMEO FIGHTERS</h2>
            <p>
              Kameos are a unique roster of partner fighters who assist the main
              fighter during matches, creating expanded gameplay possibilities
              for players. Kameos dramatically enhance every fight, assisting
              teammates with their own Special Moves, Throws and defensive
              Breakers.
            </p>
          </div>
          <div className={styles.about__kameo_about_carousel}>
            <Carousel autoplay>
              <img
                src="https://cdn-mk1.mortalkombat.com/game/kameo-screen-02-t.jpg"
                alt=""
              />
              <img
                src="https://cdn-mk1.mortalkombat.com/game/kameo-screen-03-t.jpg"
                alt=""
              />
              <img
                src="https://cdn-mk1.mortalkombat.com/game/kameo-screen-04-t.jpg"
                alt=""
              />
            </Carousel>
          </div>
        </div>
      </section>
      <video autoPlay loop muted className={styles.about__line}>
          <source src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4" type="video/mp4" />
        </video>  
              <section className={styles.about__location}>
        <div>
          <img
            src="https://cdn-mk1.mortalkombat.com/game/story-env-b.jpg"
            alt=""
          />
          <div className={styles.about__location_campaign}>
            <h2 className={styles.title}>IMMERSIVE STORY CAMPAIGN</h2>
            <p>
              Mortal Kombat’s genre-defining story mode kontinues. Reflecting
              Fire God Liu Kang’s vision of perfection, Mortal Kombat 1’s brand
              new universe is familiar, yet radically altered. And potentially,
              more dangerous than ever. Discover the forces set to undermine Liu
              Kang’s New Era.
            </p>
          </div>
        </div>
        <div >
          <img
            src="https://cdn-mk1.mortalkombat.com/game/invasions-bg-2442.jpg"
            alt=""
          />
          <div className={styles.about__location_invasions}>
          <h2>INVASIONS</h2>
          <p>
            Fight against the invading forces that threaten your timeline.
            Invasions is a dynamic single player campaign with a variety of
            distinct challenges. With built in progression and RPG mechanics,
            mixed with MK1’s incredible fighting action, Invasions provides
            deep, and engaging challenges, and a ton of rewards along the way.
          </p>
        </div>
        </div>
        
      </section>
      <video autoPlay loop muted className={styles.about__line}>
          <source src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4" type="video/mp4" />
        </video>  
            </section>
  );
};
