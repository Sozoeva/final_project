import React, { useEffect } from "react";
import styles from "./About.module.scss";
import { Carousel } from "antd";
import { motion, useAnimation } from "framer-motion";


export const About = () => {

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementPosition = document.getElementById("farmer-motion").offsetTop;

      if (scrollPosition > elementPosition - window.innerHeight / 2) {
        controls.start({ opacity: 1, y: 0 });
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);


  return (
    <section className={styles.about}>
      <section className={styles.about__pack}>
        <img
          src="https://cdn-mk1.mortalkombat.com/media/kombat-pack.jpg"
          alt="Kombat-pack img"
        />

        <div className={styles.about__pack_discrip}>
          <div>
            <h5>JUSTICE. THEIR WAY.</h5>
            <h3>KOMBAT PACK</h3>
          </div>
          <div>
            <h5>
              Introducing your roster for the Mortal Kombat 1 Kombat Pack
              fighters.
            </h5>
            <h4>
              TAKEDA • QUAN CHI • ERMAC • PEACEMAKER • HOMELANDER • OMNI-MAN
            </h4>
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
          <motion.div 
          id="farmer-motion"
          initial={{ opacity: 0, y: 15 }}
          animate={controls}
          transition={{ duration: 1 }}
          >
            <h2>KAMEO FIGHTERS</h2>
            <motion.p
            id="farmer-motion"
            initial={{ opacity: 0, y: 15 }}
            animate={controls}
            transition={{ duration: 1 }}
            >
              Kameos are a unique roster of partner fighters who assist the main
              fighter during matches, creating expanded gameplay possibilities
              for players. Kameos dramatically enhance every fight, assisting
              teammates with their own Special Moves, Throws and defensive
              Breakers.
            </motion.p>
          </motion.div>
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
          <motion.div
          id="farmer-motion"
          initial={{ opacity: 0, y: 15 }}
          animate={controls}
          transition={{ duration: 1 }} 
          className={styles.about__location_campaign}>
            <h2 className={styles.title}>IMMERSIVE STORY CAMPAIGN</h2>
            <p>
              Mortal Kombat’s genre-defining story mode kontinues. Reflecting
              Fire God Liu Kang’s vision of perfection, Mortal Kombat 1’s brand
              new universe is familiar, yet radically altered. And potentially,
              more dangerous than ever. Discover the forces set to undermine Liu
              Kang’s New Era.
            </p>
          </motion.div>
        </div>
        <div >
          <img
            src="https://cdn-mk1.mortalkombat.com/game/invasions-bg-2442.jpg"
            alt=""
          />
          <motion.div
          id="farmer-motion"
          initial={{ opacity: 0, y: 15 }}
          animate={controls}
          transition={{ duration: 1 }}
          className={styles.about__location_invasions}>
          <h2>INVASIONS</h2>
          <p>
            Fight against the invading forces that threaten your timeline.
            Invasions is a dynamic single player campaign with a variety of
            distinct challenges. With built in progression and RPG mechanics,
            mixed with MK1’s incredible fighting action, Invasions provides
            deep, and engaging challenges, and a ton of rewards along the way.
          </p>
        </motion.div>
        </div>
        
      </section>
      <video autoPlay loop muted className={styles.about__line}>
          <source src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4" type="video/mp4" />
        </video>  
            </section>
  );
};
