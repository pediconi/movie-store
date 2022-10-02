import React from "react";
import styles from "../assets/css/Utils.module.css";

export const Utils = {
  Title: () => {
    return <h1 className={styles.title}> MOVIE STORE</h1>;
  },

  Description: (props) => {
    return <h2 className={styles.description}> {props.name} </h2>;
  },
};
