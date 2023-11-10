import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getNewsById, getUserById } from "../../store";
import styles from "./ForumComments.module.scss";
import { toast } from "react-toastify";
import { Button } from "../../shared";

export const ForumComments = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const { userInfo } = useSelector((state) => state.users);
  const { selectedNews } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getUserById());
  }, []);

  if (!userInfo) {
    return <h1>Loading...</h1>;
  }

  const onSubmit = (values) => {
    dispatch(addComment({ ...values, newsId: selectedNews.id }));
    reset();
  };

  return (
    <div>
      <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.form__content}>
          
        <h4> {userInfo.username}</h4>
        <input
          className={styles.form__input}
          type="comment"
          placeholder="Your comment"
          {...register("comment", { required: "Username is required" })}
        />
                <Button type="submit">Add</Button>

        </div>
      </form>
      </div>
      
    </div>
  );
};
