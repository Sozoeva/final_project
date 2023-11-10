import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getComments, getNewsById, getUserById } from "../../store";
import { deleteComment } from "../../store";
import { ForumComments } from "../../components";
import styles from "./ForumItem.module.scss";

export const ForumItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedNews } = useSelector((state) => state.news);
  const { userInfo } = useSelector((state) => state.users);
  const { comments } = useSelector((state) => state.comments);

  const filteredComments = useMemo(() => {
    return comments.filter(({ newsId }) => newsId == id);
  }, [comments]);

  useEffect(() => {
    dispatch(getNewsById(id));
    dispatch(getUserById());
    dispatch(getComments());
  }, []);

  if (!selectedNews) {
    return <h1>Loading...</h1>;
  }

  const handleDeleteComment = (id) => {
    dispatch(deleteComment(id));
  };

  return (
    <section className={styles.comment}>
      <div className={styles.comment__content}>
        <div className={styles.comment__content_text}>
          <h2>{selectedNews.title}</h2>
          <p>{selectedNews.description}</p>
        </div>
        <div>
          {filteredComments.length === 0 ? (
            "no comments"
          ) : (
            <div>
              <p>{userInfo.username}</p>
              <p>{userInfo.email}</p>
              {filteredComments.map((comment) => (
                <div key={comment.id} className={styles.forum__comments_news}>
                  <div>
                    <textarea defaultValue={comment.comment} type="" />
                    <div className={styles.forum__comments_btns}>
                      <button
                        type="submit"
                        onClick={() => handleDeleteComment(comment.id)}
                      >
                        Delete
                      </button>
                      <button type="submit">Edit</button>
                      <button type="submit">Save</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <ForumComments />
      </div>
    </section>
  );
};
