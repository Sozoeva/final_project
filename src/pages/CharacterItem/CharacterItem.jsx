import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterById } from "../../store";
import { useParams } from "react-router";
import { Button } from "../../shared";
import { Link } from "react-router-dom";
import { AiOutlinePlayCircle } from "react-icons/ai";
import styles from "./CharacterItem.module.scss";

export const CharacterItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCharacter } = useSelector((state) => state.characters);
  
  useEffect(() => {
    dispatch(getCharacterById(id));
  }, []);

  if (!selectedCharacter) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.character}>
      <div className={styles.character__img}>
        <img src={selectedCharacter.imagesLarge} alt="" />
      </div>
      <div className={styles.character__descrip}>
        <h4>{selectedCharacter.characteristic}</h4>
        <h3>{selectedCharacter.name}</h3>
        <p>{selectedCharacter.description}</p>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/VpAnjdhPbSI?si=IfgjO7VtWlrG0USE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        <Link to="/characters">
          <Button>Back to list</Button>
        </Link>
      </div>
    </div>
  );
};
