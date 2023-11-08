import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCharacters, getUsers } from "../../store";
import styles from "./Characters.module.scss";

export const Characters = () => {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* <img src={bgr} alt="" className={styles.wrapper__img} /> */}
      <h2>Choose your hero</h2>
      <div className={`${styles.characters}`}>
        {characters.map((character) => (
          <Link to={`/characters/${character.id}`}>
            <div key={character.id} className={styles.character}>
              <img src={character.imagesSmall} alt="Character immages" />
              <div className={styles.character__name}>
              <span>{character.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
