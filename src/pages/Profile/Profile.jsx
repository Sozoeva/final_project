import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { editUser, getUserById } from "../../store";
import { Button } from "../../shared";
import { useForm } from "react-hook-form";

export const Profile = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.users);
  const [isDisabled, setIsDisabled] = useState(true);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(getUserById());
  }, []);

  if (!userInfo) {
    return <h1>Loading...</h1>;
  }

  const editProfile = (values) => {


    const newData = { ...values, id: userInfo.id }
    console.log(newData);
    dispatch(editUser(newData))
    setIsDisabled(!isDisabled)
  }

  return (
    <section className={styles.profile}>
      <div className={styles.profile__content}>
        <div>Нужен</div>
        <div className={styles.profile__content_about}>
          <img
            src="https://abrakadabra.fun/uploads/posts/2021-12/1640528661_1-abrakadabra-fun-p-serii-chelovek-na-avu-1.png"
            alt="profile img"
          />
          <div className={styles.profile__content_about_form}>
            <div>
              <p>Username</p>
              <input
              disabled={isDisabled}
              
                defaultValue={userInfo.username}
                type="text"
                {...register("username")}
              />
            </div>
            <div>
              <p>Email</p>
              <input
              disabled={isDisabled}
                defaultValue={userInfo.email}
                type="email"
                {...register("email")}
              />
            </div>
            <div>
              <p>Name</p>

              <input type="text" 
              disabled={isDisabled}
              defaultValue={userInfo.firstname}

               {...register("firstname")}/>
             
            </div>
            <div>
              <p>Lastname</p>
              <input type="text" 
              disabled={isDisabled}
              defaultValue={userInfo.lastname}

               {...register("lastname")}/>
             
            </div>
            <div>
              <p>Phone number</p>
              <input type="text" 
              disabled={isDisabled}
              defaultValue={userInfo.number}

               {...register("number")}/>
             
            </div>
            <div>
              <p>Game level</p>
              <input type="number" 
              disabled={isDisabled}
              defaultValue={userInfo.level}

              {...register("level")}/>
              
            </div>
            {
              isDisabled ? (
                <button onClick={()=> setIsDisabled(!isDisabled)}>Edit</button>
              ) : (
                <button onClick={handleSubmit(editProfile)}> Save</button>
              )
            }

          </div>
        </div>
      </div>
    </section>
  );
};
