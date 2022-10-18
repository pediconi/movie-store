import React from "react";
import styles from "../assets/css/CartContainer.module.css";
import { useCartContext } from "../context/CartContext";
import { ItemCart } from "./ItemCart";
import { Link } from "react-router-dom";

export const CartContainer = () => {
  const { cart } = useCartContext();

  return (
    <div className={cart.length ? styles.container : ""}>
      <ul className={cart.length ? styles.moviesGridCart : ""}>
        {cart.length ? (
          cart.map((movie) => <ItemCart key={movie.id} movie={movie} />)
        ) : (
          <div className={styles.emptyCart}>
            CARRITO VACIO: CLICK---{">"}
            <Link className={styles.link} to="/">
              AQUI
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
};
