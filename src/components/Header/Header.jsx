import React, { useEffect } from "react";
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../assets/images/logo1.png";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getUserInfo } from "../../store";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  const singIn = () => {
    const id = localStorage.getItem("id")
    navigate(`/profile/${id}`);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Log Out");
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.header__content} ${"container"}`}>
              <Link to="/">
                <img className={styles.header__logo} src={logo1} alt="logo" />
              </Link>
          <div className={styles.header__nav}>
            <div className={styles.header__nav_links}>
              <Link
                className={styles.header___nav_link}
                to="/about"
                style={{ whiteSpace: "nowrap" }}
              >
                About game
              </Link>
              <Link className={styles.header__link} to="/history">
                History
              </Link>
              <Link className={styles.header__link} to="/characters">
                Characters
              </Link>
              <Link className={styles.header__link} to="/forum">
                Forum
              </Link>
              {/* <Link className={styles.header__link} to="/questions">
                FAQ
              </Link> */}
            </div>
            <div className={styles.header__nav_btns}>
              <button>En</button>
              {localStorage.getItem("token") ? (
                <div className={styles.header__nav_btns_profile}>
                  <button onClick={singIn}>Profile</button>
                  <button onClick={logOut} style={{ whiteSpace: "nowrap" }}>
                    Log out
                  </button>
                </div>
              ) : (
                <Link to="/register">
                  <button>Register/Login</button>
                </Link>
              )}
            </div>
          </div>
      </div>
    </header>
  );
};
