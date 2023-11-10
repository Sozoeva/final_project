import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Forum.module.scss";
import { AiOutlineComment, AiFillFire } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { PiGameControllerLight } from "react-icons/pi";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { Link } from "react-router-dom";
import { getNews, getNewsByCategory } from "../../store";

export const Forum = () => {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.news);
  const [activeButton, setActiveButton] = useState("all");

  const handleClickFilterBtn = (tag) => {
    if (tag === "all") {
      dispatch(getNews());
      setActiveButton("all")
    } else {
      dispatch(getNewsByCategory(tag));
      setActiveButton(tag);
    }
  };

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <section className={styles.forum}>
      <img
        src="https://cdn-mk1.mortalkombat.com/game/invasions-bg-2442.jpg"
        alt=""
      />

      <div className={`${styles.forum__content} ${'container'}`}>
        <div className={styles.forum__content_btns}>
        <div>
            <button  onClick={() => {
              handleClickFilterBtn("all");
            }}>All</button>
          </div>
          <div>
            <BsNewspaper />
            <button  onClick={() => {
              handleClickFilterBtn("news");
            }}>News</button>
          </div>
          <div>
            <PiGameControllerLight />
            <button  onClick={() => {
              handleClickFilterBtn("gameplay");
            }}>Gameplay</button>
          </div>
          <div>
            <GiNinjaHeroicStance />
            <button  onClick={() => {
              handleClickFilterBtn("character");
            }}>About characters</button>
          </div>
          <div>
            <AiFillFire />
            <button  onClick={() => {
              handleClickFilterBtn("animation");
            }}>Animation</button>
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
