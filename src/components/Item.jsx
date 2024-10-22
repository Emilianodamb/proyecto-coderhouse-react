import React from "react";
import styles from "../styles/Item.module.css";
import ItemCount from "./ItemCount.jsx";
import { NavLink } from "react-router-dom";

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

const Item = ({item}) => {
    return (
        <div className={styles.itemContainer}>
            <img src={item.imageUrl} alt={item.title}/>
            <div className={styles.itemInfo}>
                <b>{item.brand}</b>
                <NavLink className={styles.links} to={`/item/${item.id}`}>
                    <h2>{removeFirstWord(item.title, item.brand)}</h2>
                </NavLink>
                <span className={styles.itemDescription}>{addFinalDot(capitalizeFirstLetter(item.description))}</span>
                <div className={styles.itemInfoDetails}>
                    <span className={styles.itemStock}>Stock: {item.stock}</span>
                    
                </div>
                
                <div className={styles.itemInfoFooter}>
                    <span className={styles.itemPrice}>{item.price.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}</span>
                    <NavLink className={styles.links} to={`/item/${item.id}`} >
                        <button>Ver Detalles / Comprar</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Item;