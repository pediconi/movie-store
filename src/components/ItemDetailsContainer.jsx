import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingWidget } from "./LoadingWidget";
import { useCartContext } from "../context/CartContext";
import { getSingleDoc } from "../Utils/FireBase.jsx";
import { ItemDetails } from "./ItemDetails";


export const ItemDetailsContainer = () => {
  const { idMovie } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  const { addMovie } = useCartContext(); // traigo esta funcion del cart context

  const onAdd = (quantity) => {
    addMovie(movie, quantity); // llamo al metodo addMovie que me provee el cart Context
  };

  useEffect(() => {
    getSingleDoc("Movies", idMovie)
      .then((value) => {
        setMovie(value.data());
      })
      .catch((err) => alert(err));

    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingWidget />;
  }

  if (!movie) {
    return null;
  }

  return (
    <ItemDetails movie={movie} onAdd={onAdd} />
  );
};
