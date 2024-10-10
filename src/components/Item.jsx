import React from "react";
import styles from "../styles/Item.module.css";
import ItemCount from "./ItemCount.jsx";

const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

const removeFirstWord = (title) => {
    const words = title.split(" ");
    return words.slice(1).join(" ");
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
                <h2>{removeFirstWord(item.title)}</h2>
                <span className={styles.itemDescription}>{addFinalDot(capitalizeFirstLetter(item.description))}</span>
                <span className={styles.itemStock}>Stock: {item.stock}</span>
                <div className={styles.itemInfoFooter}>
                    <span className={styles.itemPrice}>{item.price.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}</span>
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    )
}

export default Item;