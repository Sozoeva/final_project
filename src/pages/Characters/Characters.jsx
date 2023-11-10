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
      <h2>GET OVER HERE!</h2>
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
      <video autoPlay loop muted className={styles.home__line}>
          <source
            src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4"
            type="video/mp4"
          />
        </video>
    </div>
  );
};
