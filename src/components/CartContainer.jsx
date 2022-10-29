import React from "react";
import styles from "../assets/css/CartContainer.module.css";
import { useCartContext } from "../context/CartContext";
import { useUserContext } from "../context/UserContext";
import { ItemCart } from "./ItemCart";
import { Link, useNavigate } from "react-router-dom";
import { SignInUser } from "./SignInUser.jsx";
import { addSingleDoc } from "../Utils/FireBase.jsx";
import { SweetAlert } from "../Utils/SweetAlert";

export const CartContainer = () => {
  const { cart, total, clearCart } = useCartContext();
  const { currentUser, logOut } = useUserContext();

  const navigate = useNavigate();

  const handleClick = () => {

    if (Object.keys(currentUser).length === 0) {
      SweetAlert.Info("Ingresar Primero");

    } else {
      addSingleDoc({
        user: currentUser,
        cart: cart,
        date: new Date().toLocaleString() + "",
      })
        .then((docRef) => {
          SweetAlert.Confirm(
            "Gracias Por Tu Compra " + currentUser.name,
            "Numero de orden: " + docRef.id
          );
          clearCart();
          logOut();
          navigate("/");
        })
        .catch((e) => SweetAlert.Rejected(e));
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

      {cart.length ? ( // si falla aca iba solo el signinuser, directo sin condicional
        <div>
          <SignInUser />
          <div className={styles.checkOutInformation}>
            Total ${total.toFixed(2)}{" "}
          </div>
          <button className={styles.buttonCheckout} onClick={handleClick}>
            {" "}
            Finalizar Compra
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
