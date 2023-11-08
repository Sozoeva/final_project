import React, { useEffect, useState } from "react";
import styles from "./Register.module.scss";
import { Button } from "../../shared";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AiTwotoneEyeInvisible, AiTwotoneEye } from "react-icons/ai";
import { registerUser } from "../../store";

export const Register = () => {
  const [ eye, setEye ] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { userInfo} = useSelector((state) => state.users);

  const onSubmit = (values) => {
    dispatch(registerUser(values));
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [userInfo]);

  return (
    <section className={styles.wrapper}>
      <img
        src="https://prod-network-images.wbagora.com/network/account-wbgames-com/games/mortalkombat-com-mk1/mortalkombat-com-mk1-background.jpg"
        alt=""
        className={styles.wrapper__img}
      />
      <div className={styles.register}>
        <h2 className={styles.register__title}>Registration</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.register__form}
        >
          <input 
          className={styles.register__form_input}
          type="name"
          placeholder="Username"
          {...register("username")}
          />

          <input
            className={styles.register__form_input}
            type="email"
            placeholder="Your email"
            {...register("email")}
          />
          <div className={styles.register__password}>
            <input
              className={styles.register__form_input}
              type= {eye ? "text" : "password"} 
              placeholder="Password"
              {...register("password")}
            />
            {eye ? (
              <AiTwotoneEye onClick={() => setEye(!eye)} />
            ) : (
              <AiTwotoneEyeInvisible onClick={() => setEye(!eye)} />
            )}
          </div>
          <Button type="submit">Continue</Button>
        </form>
        <Link to="/login">Sing in</Link>
      </div>
    </section>
  );
};
