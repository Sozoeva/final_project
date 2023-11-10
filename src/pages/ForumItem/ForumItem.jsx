import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getComments, getNewsById, getUserById } from "../../store";
import { ForumComments } from "../../components";
import {BiPointer} from "react-icons/bi"
import styles from "./ForumItem.module.scss";

export const ForumItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedNews } = useSelector((state) => state.news);
  const { userInfo } = useSelector((state) => state.users);
  const { comments } = useSelector((state) => state.comments);
  const [inputValue, setInputValue] = useState("");

  console.log(userInfo);

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

  return (
    <section className={styles.comment}>
      <img
        className={styles.comment__bgr}
        src="https://cdn-mk1.mortalkombat.com/game/invasions-bg-2442.jpg"
        alt=""
      />
      <div className={styles.comment__bgr_img}>
        <div className={`${styles.comment__content} ${"container"}`}>
          <div className={styles.comment__content_text}>
            <h2>{selectedNews.title}</h2>
            <p>{selectedNews.description}</p>
          </div>
          <div>
          <h2>Comments</h2>
            {filteredComments.length === 0 ? (
              <h2 className={styles.forum__nocomments}>There are no comments in this section. Be the first!</h2>
            ) : (
              <div>
                {filteredComments.map((comment) => (
                  <div key={comment.id} className={styles.forum__comments_news}>
                    <div>
                    <BiPointer/>
                    <p>
                      <textarea defaultValue={comment.comment} 
                      type="" />
                    </p>
                    </div>
                    
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <ForumComments />

      </div>
    </section>
  );
};
