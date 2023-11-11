import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, getNews, getUserById } from "../../store";
import { useForm } from "react-hook-form";
import styles from "./Profile.module.scss";

export const Profile = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.users);
  const [isDisabled, setIsDisabled] = useState(true);
  const { news } = useSelector((state) => state.news);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(getUserById());
    dispatch(getNews());
  }, []);

  if (!userInfo) {
    return <h1>Loading...</h1>;
  }

  const editProfile = (values) => {
    const newData = { ...values, id: userInfo.id };
    dispatch(editUser(newData));
    setIsDisabled(!isDisabled);
  };

  return (
    <section className={styles.profile}>
      <img
        className={styles.profile__bgr}
        src="https://prod-network-images.wbagora.com/network/account-wbgames-com/games/mortalkombat-com-mk1/mortalkombat-com-mk1-background.jpg"
        alt=""
      />
      <div className={styles.profile__content}>
        <div className={`${styles.profile__content_about} ${"container"}`}>
          <div className={styles.profile__content_title}>
            <img
              src="https://abrakadabra.fun/uploads/posts/2021-12/1640528661_1-abrakadabra-fun-p-serii-chelovek-na-avu-1.png"
              alt="profile img"
            />
            <h2>User profile</h2>
          </div>
          <div className={styles.profile__content_about_form}>
            <div>
              <span>Username</span>
              <input
                disabled={isDisabled}
                defaultValue={userInfo.username}
                type="text"
                {...register("username")}
              />
            </div>
            <div>
              <span>Email</span>
              <input
                disabled={isDisabled}
                defaultValue={userInfo.email}
                type="email"
                {...register("email")}
              />
            </div>
            <div>
              <span>Name</span>

              <input
                type="text"
                disabled={isDisabled}
                defaultValue={userInfo.firstname}
                {...register("firstname")}
              />
            </div>
            <div>
              <span>Lastname</span>
              <input
                type="text"
                disabled={isDisabled}
                defaultValue={userInfo.lastname}
                {...register("lastname")}
              />
            </div>
            <div>
              <span>Phone number</span>
              <input
                type="text"
                disabled={isDisabled}
                defaultValue={userInfo.number}
                {...register("number")}
              />
            </div>
            <div>
              <span>Game level</span>
              <input
                type="number"
                disabled={isDisabled}
                defaultValue={userInfo.level}
                {...register("level")}
              />
            </div>
            {isDisabled ? (
              <button
                className={styles.editBtn}
                onClick={() => setIsDisabled(!isDisabled)}
              >
                Edit
              </button>
            ) : (
              <button
                className={styles.saveBtn}
                onClick={handleSubmit(editProfile)}
              >
                {" "}
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
