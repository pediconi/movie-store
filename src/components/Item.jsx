import React from "react";
import styles from "../assets/css/Item.module.css";

import { Link } from "react-router-dom";

export const Item = ({ movie }) => {
  return (
    <li className={styles.movieCard}>
      <Link to={"/movie/" + movie.id}> {/* el valor de movie.id lo levanto con useparams en itemdetails */}
        <img className={styles.movieImage} src={movie.src} alt={movie.title} />
        <div className={styles.movieCard}>{movie.title}</div>
        <div className={styles.moviePrice}>${movie.price}</div>
      </Link>
    </li>
  );
};
