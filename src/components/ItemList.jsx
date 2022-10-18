import React from "react";
import styles from "../assets/css/ItemListContainer.module.css";
import { Item } from "./Item";

export const ItemList = ({movies}) => {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <Item key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
