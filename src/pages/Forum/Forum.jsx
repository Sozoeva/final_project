import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Forum.module.scss";
import { AiOutlineComment, AiFillFire } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { PiGameControllerLight } from "react-icons/pi";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { Link } from "react-router-dom";
import { getNews } from "../../store";

export const Forum = () => {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <section className={styles.forum}>
      <img
        src="https://cdn-mk1.mortalkombat.com/game/invasions-bg-2442.jpg"
        alt=""
      />

      <div className={styles.forum__content}>
        <div className={styles.forum__content_btns}>
          <div>
            <BsNewspaper />
            <button>News</button>
          </div>
          <div>
            <PiGameControllerLight />
            <button>Gameplay</button>
          </div>
          <div>
            <GiNinjaHeroicStance />
            <button>About characters</button>
          </div>
          <div>
            <AiFillFire />
            <button>Animation</button>
          </div>
        </div>
        {news.map((item) => (
          <Link to={`/forum/${item.id}`}>
            <div key={item.id} className={styles.forum__content_news}>
              <AiOutlineComment />
              <h2>{item.title}</h2>
              <div></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
