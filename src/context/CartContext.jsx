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
  const [total, setTotal] = useState(0);

  const exist = (movie) => cart.some((el) => el.id === movie.id); 

  const addMovie = (movie, quantity) => {
    if (movie.onCart + quantity <= movie.stock) {
      
      let newCart;
      let findMovie = cart.find((el) => el.id === movie.id);

      if (findMovie && findMovie.onCart + quantity <= movie.stock) {
        findMovie.onCart += quantity;
        newCart = [...cart];
        setCart(newCart);
        setTotalItems(totalItems + quantity);
        setTotal(total + movie.price * quantity);
        SweetAlert.Confirm("Pelicula Agregada","");
      } else if (!findMovie) {
        findMovie = { ...movie, onCart: quantity };
        newCart = [...cart, findMovie];
        setCart(newCart);
        setTotalItems(totalItems + quantity);
        setTotal(total + movie.price * quantity);
        SweetAlert.Confirm("Pelicula Agregada","");
      } else {
        SweetAlert.Rejected("Stock Insuficiente");
      }
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
      setTotal(total - movie.price);
    }
    if (movie.onCart === 0) {
      const cartModified = cart.filter((el) => el.id !== movie.id);
      setCart(cartModified);
      checkEmptyCart(); //Esta funcion se ejecuta cuando se pasa de 1 a 0 item, pero totalItems aun vale 1 cuando se activa
    }
  };

  const checkEmptyCart = () => {
    if (totalItems === 1) {
      SweetAlert.Info("Carrito Vacio","");
    }
  };

  const clearCart = () => {
    setCart([]);
    setTotalItems(0);
    setTotal(0);
  };

  return (
    <CarritoContext.Provider
      value={{
        cart,
        exist,
        addMovie,
        removeMovie,
        totalItems,
        total,
        clearCart,
      }}
    >
      {children}
    </CarritoContext.Provider> //retorno al proveedor de cartContext
  );
};
