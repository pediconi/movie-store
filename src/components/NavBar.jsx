import styles from "../assets/css/NavBar.module.css";
import { CartWidget } from "./CartWidget";
import { Utils } from "./Utils";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useUserContext } from "../context/UserContext";

export const NavBar = () => {
  const [navbarColor, setNavbarColor] = useState(false);
  const [categories, setCategories] = useState([]);

  const { currentUser} = useUserContext();

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  useEffect(() => {
    const db = getFirestore();
    const data = collection(db, "Categories");
    getDocs(data)
      .then((value) => {
        const resp = value.docs.map((value) => {
          return value.data();
        });
        setCategories(resp);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <div className={navbarColor ? styles["header-scroll"] : styles["header"]}>
      <nav className={styles["navbar"]}>
        <ul>
          <Link to="/">
            <Utils.Title />
          </Link>
          <li>
            <Link to="/">Home</Link>
          </li>

          {categories.map((categorie) => (
            <li key={categorie.key}>
              <Link to={"/category/" + categorie.name}>
                {" "}
                {categorie.name.charAt(0).toUpperCase() +  //paso a mayuscula la primera letra
                  categorie.name.slice(1)+"s"}
              </Link>
            </li>
          ))}
          <div>{Object.keys(currentUser).length === 0 ? "" : "EN SESION "+currentUser.name+" "+currentUser.surname } </div>
        </ul>
        <Link to="/cart">
          <CartWidget />
        </Link>
        
      </nav>
    </div>
  );
};
