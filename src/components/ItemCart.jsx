import React from "react";
import styles from "../assets/css/ItemCart.module.css";
import { useCartContext } from "../context/CartContext";

export const ItemCart = ({ movie }) => {
  const { removeMovie } = useCartContext();
  return (
    <li className={styles.movieCard}>

      <div className={styles.cardLi}>
        
        <div className={styles.description}>
          <img
            className={styles.movieImage}
            src={movie.src}
            alt={movie.title}
          />
          <p className={styles.movieTitle}>{movie.title}</p>
          <button
            className={styles.buttonRemove}
            onClick={() => removeMovie(movie)}
          >
            Eliminar
          </button>
          <p className={styles.movieText}>{movie.onCart} </p>
        </div>

        <div className={styles.description}>
          <p className={styles.moviePrice}>
            <strong>${movie.price}</strong>
          </p>
        </div>
      </div>
    </li>
  );
};
