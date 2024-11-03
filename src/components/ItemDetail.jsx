import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount.jsx";
import styles from "../styles/ItemDetail.module.css";
import { Cart } from "../context/CartProvider.jsx";
import { NavLink } from "react-router-dom";
import { Theme } from "../context/ThemeProvider.jsx"

const ItemDetail = ({ product }) => {
    const {addCart} = useContext(Cart)
    const {dark} = useContext(Theme)
    const [itemCountVisibility, setItemCountVisibility] = useState(true)

    const handleCart = (quantity) => {
        if (isNaN(quantity) || quantity <= 0) {
            console.error('Cantidad inválida:', quantity);
            return;
        }
        setItemCountVisibility(false)
        addCart(product, quantity)
    }
    const { title, brand, description, price, pictureUrl, stock, features, category } = product;
    const capitalizeFirstLetter = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };
    const removeFirstWord = (title, brand) => {
        const words = title.split(" ");
        return words[0] === brand ? words.slice(1).join(" ") : title;
    };
    const addFinalDot = (description) => {
        if (!description.endsWith('.')) {
            return description + '.';
        }
        return description;
    };

    return (
        <div className={styles.itemDetailContainer}>
            <div className={styles.galleryContainer}>
                <div className={styles.galleryImageOptions}>
                    <img src={pictureUrl} alt={title} />
                    <img src={pictureUrl} alt={title} />
                    <img src={pictureUrl} alt={title} />
                    <img src={pictureUrl} alt={title} />
                    <img src={pictureUrl} alt={title} />
                </div>
                <div className={styles.galleryMainImage}>
                    <img src={pictureUrl} alt={title} />
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div>
                    <p>{brand}</p>
                    <h2 className={styles.itemDetailTitle}>{removeFirstWord(title)}</h2>
                    <p className={styles[`itemDetailPrice-${dark ? "dark" : "light"}`]}>{price.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}</p>
                    <p className={styles[`itemDetailDescription-${dark ? "dark" : "light"}`]}>{capitalizeFirstLetter(addFinalDot(description))}</p>
                    <p className={styles.itemDetailDescription}>Categoría: {capitalizeFirstLetter(category)}</p>
                    <p className={styles[`itemStock-${dark ? "dark" : "light"}`]}>Stock: {stock}</p>
                </div>
                <div>
                {itemCountVisibility ? (<ItemCount addCart={handleCart} stock={stock}/>) : (<NavLink to={'/cart'}><button className={styles.goCartButton}>Go cart</button></NavLink>)}
                </div>
                <div className={styles.featuresContainer}>
                        <h3>Características:</h3>
                        <ul>
                            {features.map((feature, index) => (
                                <li key={index} className={styles[`features-${dark ? "dark" : "light"}`]}>{feature}</li>
                            ))}
                        </ul>
                </div>
                
            </div>
        </div>
    );
};

export default ItemDetail;