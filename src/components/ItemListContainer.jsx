import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../assets/css/ItemListContainer.module.css";
import { ItemList } from "./ItemList";
import { LoadingWidget } from "./LoadingWidget";
import { getCollection, filterCollection} from "../Utils/FireBase.jsx";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = (props) => {
  const { idCategory } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

   /*  const db = getFirestore();
    const data = collection(db, "Movies"); */

    if (idCategory) {

      filterCollection("Movies" , ["category", "==" , idCategory]).then((value) => {
        const resp = value.docs.map((value) => {
          return value.data();
        });
        setMovies(resp);
      })
      .catch((err) => console.log(err));

      /*const q = query(data, where("category", "==", idCategory));

      getDocs(q)
        .then((value) => {
          const resp = value.docs.map((value) => {
            return value.data();
          });
          setMovies(resp);
        })
        .catch((err) => console.log(err));*/


    } else {

      getCollection("Movies").then((value) => {
        const resp = value.docs.map((value) => {
          return value.data();
        });
        setMovies(resp);
      })
      .catch((err) => alert(err));

      /*getDocs(data)
        .then((value) => {
          const resp = value.docs.map((value) => {
            return value.data();
          });
          setMovies(resp);
        })
        .catch((err) => alert(err));*/
    }

    setLoading(false);

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
      <ItemList movies={movies} />
    </Fragment>
  );
};
