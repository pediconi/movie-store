import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { SweetAlert } from "../Utils/SweetAlert";

const CarritoContext = createContext();
export const useCartContext = () => useContext(CarritoContext); // hook para utilizar el contexto CarritoContext en otros componentes al llamarlo

export const CartContextProvider = ({ children }) => {
  // defino todas las funcionalidades que va a proveer CartContext
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const exist = (movie) => cart.some((el) => el.id === movie.id); // verifico si ya existe la pelicula en el carrito

  const addMovie = (movie, quantity) => {
    if (exist(movie) && movie.onCart + quantity <= movie.stock) {
      movie.onCart += quantity;
      setTotalItems(totalItems + quantity);
      setCart(cart);
      SweetAlert.Confirm();
    } else if (!exist(movie)) {
      movie.onCart += quantity;
      setTotalItems(totalItems + quantity);
      setCart([...cart, movie]); // agrego movie a lo que esta en cart
      SweetAlert.Confirm();
    } else {
      SweetAlert.Rejected("Stock Insuficiente");
    }
  };

  const removeMovie = (movie) => {
    if (movie.onCart > 0) {
      cart.map((el) => {
        if (el.id === movie.id) {
          return { ...el, onCart: (movie.onCart -= 1) };
        } else return { el };
      });
      setTotalItems(totalItems - 1);
    }
    if (movie.onCart === 0) {
      const cartModified = cart.filter((el) => el.id !== movie.id);
      setCart(cartModified);
      checkEmptyCart(); //Esta funcion se ejecuta cuando se pasa de 1 a 0 item, pero totalItems aun vale 1 cuando se activa
    }
  };

  const checkEmptyCart = () => {
    if (totalItems === 1) {
      SweetAlert.Info("Carrito Vacio");
    }
  };

  return (
    <CarritoContext.Provider
      value={{ cart, exist, addMovie, removeMovie, totalItems }}
    >
      {children}
    </CarritoContext.Provider> //retorno al proveedor de cartContext
  );
};
