import React from "react"
import styles from "../styles/Footer.module.css"
import { NavLink } from "react-router-dom";

const Footer = () => {

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
      </nav>
    )
  }
  
  export default Footer