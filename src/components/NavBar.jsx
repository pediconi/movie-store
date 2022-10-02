import styles from "../assets/css/NavBar.module.css";
import { CartWidget } from "./CartWidget";
import { Utils } from "./Utils";
import { Link } from "react-router-dom";


export const NavBar = () => {
  return (
    <nav className={styles.navBarMenu}>
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
  );
};
