import React from "react";
import styles from "../assets/css/CartContainer.module.css";
import { useCartContext } from "../context/CartContext";
import { useUserContext } from "../context/UserContext";
import { ItemCart } from "./ItemCart";
import { Link } from "react-router-dom";
import { SignInUser } from "./SignInUser.jsx";
import { addSingleDoc } from "../Utils/FireBase.jsx";
import { SweetAlert } from "../Utils/SweetAlert";


export const CartContainer = () => {
  const { cart, total } = useCartContext();
  const { currentUser } = useUserContext();

  const handleClick = () => {

    if (Object.keys(currentUser).length === 0) {

      SweetAlert.Info("Ingresar Primero");

    } else {
      addSingleDoc({
        user: currentUser,
        cart: cart,
      });
    }
  };

  return (
    <div className={cart.length ? styles.container : ""}>
      <ul className={cart.length ? styles.moviesGridCart : ""}>
        {cart.length ? (
          cart.map((movie) => <ItemCart key={movie.id} movie={movie} />)
        ) : (
          <div className={styles.emptyCart}>
            CARRITO VACIO: CLICK---{">"}
            <Link className={styles.link} to="/">
              AQUI
            </Link>
          </div>
        )}
      </ul>
      {/* <div style={{color:"black"}}> IMPORTE FINAL: {total}</div>
      <button onClick={handleClick}> Finalizar Compra</button> */}


    {cart.length ? ( // si falla aca iba solo el signinuser, directo sin condicional
      <div>  
        <div style={{color:"black"}}> IMPORTE FINAL: {total}</div>
        <button onClick={handleClick}> Finalizar Compra</button>
        <SignInUser/>  
      </div>
    ):(<div>CARRO VACIO</div> )}  

  </div> 
  );
};
