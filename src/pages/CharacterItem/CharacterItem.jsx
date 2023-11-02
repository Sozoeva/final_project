import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterById } from "../../store";
import { useParams } from "react-router";
import { Button } from "../../shared";
import { Link } from "react-router-dom";
import {BsPlayCircle} from "react-icons/bs"
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
          <span>
          <button><BsPlayCircle/></button>
          </span>
          <Link to="/characters">
          <Button>Back to list</Button>
          </Link>
        </div>
    </div>
  );
};
