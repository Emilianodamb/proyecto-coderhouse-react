import CartWidget from "./CartWidget.jsx";
import styles from "../styles/NavBar.module.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <p>TheMobileShop</p>
      </div>
      <ul className={styles.categories}>
        <li>

            <NavLink to={"/"}>
              Home
            </NavLink>

        </li>
        <li>

            <NavLink to={"/brand/Apple"}>Apple</NavLink>

        </li>
        
        <li>

            qwrqw

        </li>
        <li>

            558796

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