import React from "react";
import styles from "../assets/css/CartWidget.module.css";

export const CartWidget = () => {
  return (
    <img
      className={styles.imgCart}
      src={require("../images/cart.png")}
      alt=""
    />
  );
};
