import React from "react";
import ItemCount from "./ItemCount.jsx";
import styles from "../styles/ItemDetail.module.css";

const ItemDetail = ({ product }) => {
    if (!product) {
      return <p>Cargando...</p>;
    }
  
    const { title, brand, description, price, imageUrl, stock } = product;
  
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

    return (
        <div className={styles.itemDetailContainer}>
            <div className={styles.galleryContainer}>
                <div className={styles.galleryImageOptions}>
                    <img src={imageUrl} alt={title} />
                    <img src={imageUrl} alt={title} />
                    <img src={imageUrl} alt={title} />
                    <img src={imageUrl} alt={title} />
                    <img src={imageUrl} alt={title} />
                </div>
                <div className={styles.galleryMainImage}>
                    <img src={imageUrl} alt={title} />
                </div>

            </div>
            <div className={styles.infoContainer}>
                <div>
                    <p>{brand}</p>
                    <h2 className={styles.itemDetailTitle}>{removeFirstWord(title)}</h2>
                    <p className={styles.itemDetailPrice}>{price.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}</p>
                    <p className={styles.itemDetailDescription}>{capitalizeFirstLetter(addFinalDot(description))}</p>
                    <p>Stock: {stock}</p>
                </div>
                <ItemCount stock={stock}/>
            </div>
        </div>
    );
};

export default ItemDetail;