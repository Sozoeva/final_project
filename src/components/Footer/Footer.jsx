import React from "react";
import styles from "./Footer.module.scss";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsTiktok, BsDiscord } from "react-icons/bs";
import { SiTwitch } from "react-icons/si";

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={`${styles.footer__content} ${"container"}`}>
        <div className={styles.footer__content_media}>
          <div>
            <a href="https://www.youtube.com/MortalKombat">
            <AiFillYoutube />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/mortalkombat/">
            <AiOutlineInstagram />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/mortalkombat">
            <AiFillTwitterCircle />
            </a>
          </div>
          <div>
            <a href="https://www.tiktok.com/@mortalkombat">
            <BsTiktok />
            </a>
          </div>
          <div>
            <a href="https://www.twitch.tv/netherrealm">
            <SiTwitch />
            </a>
          </div>
          <div>
            <a href="https://discord.com/invite/mortalkombat">
            <BsDiscord />
            </a>
          </div>
        </div>
        <div className={styles.footer__content_title}>
          <div className={styles.footer__content_title_about}>
            <p>
              MORTAL KOMBAT 1 Software © 2023 Warner Bros. Entertainment Inc.
              Developed by NetherRealm Studios. Unreal® Engine, copyright
              1998-2023 Epic Games, Inc. Unreal, Unreal Technology and the
              Powered by Unreal Technology logo are trademarks or registered
              trademarks of Epic Games, Inc. Uses Oodle Data Compression
              Copyright and Bink Video (C) 1997-2023 by RAD Game Tools, Inc.
              NETHERREALM STUDIOS LOGO, MORTAL KOMBAT, THE DRAGON LOGO, and all
              related characters and elements are trademarks of and © 2023
              Warner Bros. Entertainment Inc.
            </p>
            <div>
              <img
                src="https://cdn-mk1.mortalkombat.com/static/wb-shield-white.svg"
                alt=""
                className={styles.footer__content_title_about_WB}
              />
              <span>
                WARNER BROS. GAMES LOGO, WARNER BROS. INTERACTIVE LOGO, WB
                SHIELD: ™ & © Warner Bros. Entertainment Inc. (s23)
              </span>
            </div>
          </div>
          <img
            src="https://cdn-mk1.mortalkombat.com/ratings/esrb/esrb.svg"
            alt=""
            className={styles.footer__content_title_ERSB}
          />
        </div>
      </div>
    </section>
  );
};
