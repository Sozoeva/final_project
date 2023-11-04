import React, { useEffect, useState } from "react";
import { Button } from "../../shared";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AiTwotoneEyeInvisible, AiTwotoneEye } from "react-icons/ai";
import styles from "./Login.module.scss";
import { loginUser } from "../../store/actions";

export const Login = () => {
  const [eye, setEye] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.users);

  const onSubmit = (values) => {
    dispatch(loginUser(values));
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/profile");
    }
  }, [userInfo]);

  return (
    <section className={styles.wrapper}>
      <img
        src="https://prod-network-images.wbagora.com/network/account-wbgames-com/games/mortalkombat-com-mk1/mortalkombat-com-mk1-background.jpg"
        alt=""
        className={styles.wrapper__img}
      />
      <div className={styles.login}>
        <h2 className={styles.login__title}>Authorization</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.login__form}
        >
          <input
            className={styles.login__form_input}
            type="email"
            placeholder="Your email"
            {...register("email")}
          />
          <div className={styles.login__password}>
            <input
              className={styles.login__form_input}
              type={eye ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
            />
            {eye ? (
              <AiTwotoneEye onClick={() => setEye(!eye)} />
            ) : (
              <AiTwotoneEyeInvisible onClick={() => setEye(!eye)} />
            )}
          </div>
          <Button type="submit">Sing in</Button>
        </form>
      </div>
    </section>
  );
};
