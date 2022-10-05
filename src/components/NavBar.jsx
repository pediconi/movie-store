import styles from "../assets/css/NavBar.module.css";
import { CartWidget } from "./CartWidget";
import { Utils } from "./Utils";
import { Link } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
  const [navbarColor, setNavbarColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

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
          <li>
            <Link to="/category/movie">Peliculas</Link>
            {/*el valor luego de category (o sea el de movie) es el que tomare en itemlistcontainer(xq asi lo indique en route en app*/}
          </li>
          <li>
            <Link to="/category/serie">Series</Link>
          </li>
          <li>
            <Link to="/category/new">Novedades</Link>
          </li>
        </ul>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </nav>
    </div>
  );
};
