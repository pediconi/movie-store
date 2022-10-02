import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchData } from "../Utils/FetchData";
import styles from "../assets/css/ItemDetails.module.css";
import { LoadingWidget } from "./LoadingWidget";
import { ItemCount } from "./ItemCount";

export const ItemDetails = () => {
  const { idMovie } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  const onAdd = (quantity) => {
    alert(`comprados : ${quantity} de ${movie.title}`);
  };

  useEffect(() => {
    FetchData(true).then((data) => {
      let search = data.find((el) => {
        return el.id == idMovie;
      });
      setMovie(search);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingWidget />;
  }

  if (!movie) {
    return null;
  }

  return (
    <div className={styles.container}>
      <img
        className={`${styles.movieImage} ${styles.item}`}
        src={movie.src}
        alt={movie.title}
      />
      <div className={styles.item}>
        <p className={styles.title}>
          <strong> Title</strong> : {movie.title}
        </p>

        <p>
          <strong>Genre: </strong>
          {movie.genres.map((genre) => genre).join(", ")}
          {/*forEach no devuelve nada, map devuelve un nuevo array modificado por la funcion que se indique */}
        </p>

        <p>
          <strong> Duration </strong> : {movie.duration} min
        </p>
        <p>
          <ItemCount stock={movie.stock} onAdd={onAdd} />
        </p>
      </div>
    </div>
  );
};