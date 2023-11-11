import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "../../store/actions";
import { SlArrowRight } from "react-icons/sl";
import { motion } from "framer-motion";
import line from "../../assets/images/line.svg";
import styles from "./History.module.scss";
import {
  animation,
  rigthAnimation,
} from "../../components/Animation/Animation";

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
            <motion.div
              initial="hidden"
              whileInView="visible"
              className={styles.history__card_data}
            >
              <motion.h2 variants={animation}>{item.data}</motion.h2>
            </motion.div>
            <img
              src={line}
              alt={item.name}
              className={styles.history__card__data_line}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              className={styles.history__card_content}
            >
              <motion.img
                variants={rigthAnimation}
                className={styles.history__card_content_logo}
                src={item.logo}
                alt={item.name}
              />
              <motion.h2
                variants={rigthAnimation}
                className={styles.history__card_content_name}
              >
                {item.name}
              </motion.h2>
              <motion.img
                variants={rigthAnimation}
                className={styles.history__card_content_img}
                src={item.images}
                alt={item.name}
              />
              <SlArrowRight />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
