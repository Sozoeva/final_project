import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import name from "../../assets/images/name.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__content} ${'container'}`}>
        <nav className={styles.header__nav}>
          <div className={styles.header__nav_logo}>
            <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="logo"  />
            </Link>
            </div>
            <div className={styles.name}>
              <Link to="/">
              <img src={name} alt="name" />
              </Link>
            </div>
          </div>
          <div className={styles.header__div}>
            <div className={styles.header__nav_links}>
              <Link className={styles.header___nav_link} to="/about">
                About
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
              <Link className={styles.header__link} to="/questions">
                FAQ
              </Link>
            </div>
            <div className={styles.header__nav_btns}>
              <div>
                <button>EN</button>
              </div>
              <Link to="/register">
                <button>Register/Login</button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
