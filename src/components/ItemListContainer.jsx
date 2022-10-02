import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../assets/css/ItemListContainer.module.css";
import { FetchData } from "../Utils/FetchData";
import { Item } from "./Item";
import { LoadingWidget } from "./LoadingWidget";

export const ItemListContainer = (props) => {
  const { idCategory } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    FetchData(true).then((data) => {

      if (idCategory) {
        const filter = data.filter((el) => el.category === idCategory);
        setMovies(filter);
      } else {
        setMovies(data);
      }
      
      setLoading(false);
    });
  }, [idCategory]);

  if (loading) {
    return <LoadingWidget />;
  }

  return (
    <Fragment>
      <p className={styles.text}>
        <strong>
          {idCategory ? idCategory.toUpperCase() + "S" : "BIENVENIDO"}
        </strong>
      </p>

      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <Item key={movie.id} movie={movie} />
        ))}
      </ul>
    </Fragment>
  );
};
