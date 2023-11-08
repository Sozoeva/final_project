import React, { useEffect } from "react";
import styles from "./Profile.module.scss";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, getUserInfo } from "../../store";
import { Button } from "../../shared";

export const Profile = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUserById());
  }, []);
    
  if (!userInfo) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className={styles.profile}>
      <div className={`${styles.profile__content} ${"container"}`}>
        <div className={styles.profile__content_user}>
          <img
            src="https://abrakadabra.fun/uploads/posts/2021-12/1640528661_1-abrakadabra-fun-p-serii-chelovek-na-avu-1.png"
            alt="profile img"
          />
          <p>{userInfo.username}</p>
          <p>{userInfo.email}</p>
        </div>
        <form>
          <div>
            <p>Name</p>
            <input type="name" />
          </div>
          <div>
            <p>Lastname</p>
            <input type="lastname" />
          </div>
          <div>
            <p>Phone number</p>
            <input type="number" />
          </div>
          <div>
            <p>Game level</p>
            <input type="number" />
          </div>
          <Button>Сhange</Button>
        </form>
      </div>
    </section>
  );
};
