import React from "react";
import styles from "../assets/css/CartWidget.module.css";
import { useCartContext } from "../context/CartContext";

export const CartWidget = () => {
  const {totalItems } = useCartContext();
  return (
    <div className={styles.container}>
      <img className={styles.cartImage} src={require("../images/cart.png")} alt="" />
      <div className={styles.quantity}><strong>{totalItems}</strong> </div>
    </div>
  );
};
