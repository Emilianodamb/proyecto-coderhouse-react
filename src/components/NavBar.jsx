import CartWidget from "./CartWidget.jsx";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <nav className={styles.nav}>
      <div className={styles.navbarBrand}>
        <NavLink className={styles.links} to={"/"}>
          <p className={styles.brand}>TheMobil<strong className={styles.green}>eShop</strong></p>
        </NavLink>
      </div>
      <ul className={styles.categories}>
        <li>
            <NavLink className={styles.links} to={"/category/top"}>
              TOP GAMMA
            </NavLink>
        </li>
        <li>
            <NavLink className={styles.links} to={"/category/mid"}>
              MIDDLE GAMMA
            </NavLink>
        </li>
        <li>
            <NavLink className={styles.links} to={"/category/offer"}>
              IN OFFER
            </NavLink>
        </li>
      </ul>
      <CartWidget />
      
    </nav>
  );
}

export default NavBar;


{/*
  <li>
    <a>
      <NavLink className={ ({isActive}) => {
            return isActive ? styles.isActive : styles.notActive;
      }} to={"/brand/Motorola"}>
          Motorola
      </NavLink>
    </a>
  </li> 
*/}