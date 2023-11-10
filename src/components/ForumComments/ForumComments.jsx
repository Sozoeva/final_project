import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getNewsById, getUserById } from "../../store";
import styles from "./ForumComments.module.scss";

export const ForumComments = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
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
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.forum__form}>
        <p>{userInfo.username}</p>
        <p>{userInfo.email}</p>
        <input
          className={styles.forum__form_input}
          type="comment"
          placeholder="Your comment"
          {...register("comment")}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
