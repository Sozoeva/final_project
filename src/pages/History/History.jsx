import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHistory, getHistoryById } from "../../store/actions";
import { SlArrowRight } from "react-icons/sl";
import { motion } from "framer-motion";
import line from "../../assets/images/line.svg";
import styles from "./History.module.scss";
import { ForumComments } from "../../components";

export const History = () => {
  const dispatch = useDispatch();
  const { history } = useSelector((state) => state.history);
  


  useEffect(() => {
    dispatch(getHistory());
  }, []);

  return (
    <section className={styles.history}>
      <img
        className={styles.history__bgr}
        src="https://4kwallpapers.com/images/wallpapers/mortal-kombat-sub-zero-scorpion-3840x2160-1030.jpg"
        alt=""
      />
      <div className={`${styles.history__content} ${"container"}`}>
        {history.map((item) => (
          <div key={item.id} className={styles.history__card}>
            <div className={styles.history__card_data}>
              <motion.h2>{item.data}</motion.h2>
            </div>
            <img
              src={line}
              alt={item.name}
              className={styles.history__card__data_line}
            />
            <div className={styles.history__card_content}>
              <img
                className={styles.history__card_content_logo}
                src={item.logo}
                alt={item.name}
              />
              <h2 className={styles.history__card_content_name}>{item.name}</h2>
              <img
                className={styles.history__card_content_img}
                src={item.images}
                alt={item.name}
              />
              <SlArrowRight />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
