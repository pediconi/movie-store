import React from 'react'
import styles from "../assets/css/ItemDetails.module.css";
import { ItemCount } from "./ItemCount";

export const ItemDetails = ({movie, onAdd}) => {
  return (

    <div
      className={styles.container}
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${movie.bgsrc})`,
      }}
    >
      <img
        className={`${styles.movieImage} ${styles.item}`}
        src={movie.src}
        alt={movie.title}
      />
      <div className={styles.item}>
        <p className={styles.title}>
          <strong className={styles.movieTitle}> {movie.title} </strong>
        </p>

        <p>
          <strong> Description</strong> : {movie.overview}
        </p>

        <p>
          <strong>Genre: </strong>
          {movie.genres.map((genre) => genre).join(", ")}
          
        </p>

        <p>
          <strong> Duration </strong> : {movie.duration} min
        </p>
        <p>
          <ItemCount stock={movie.stock} onAdd={onAdd} />
        </p>
      </div>
    </div>
    
  )
}
