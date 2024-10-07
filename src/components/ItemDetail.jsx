import React from "react";
import ItemCount from "./ItemCount.jsx";
import "../styles/ItemDetail.css";

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
        <div className="item-detail-container">
            <div className="gallery-container">
                <div className="gallery-image-options">
                    <img src={imageUrl} alt={title} />
                    <img src={imageUrl} alt={title} />
                    <img src={imageUrl} alt={title} />
                    <img src={imageUrl} alt={title} />
                    <img src={imageUrl} alt={title} />
                </div>
                <div className="gallery-main-image">
                    <img src={imageUrl} alt={title} />
                </div>

            </div>
            <div>
                <p>{brand}</p>
                <h2 className="item-detail-title">{removeFirstWord(title)}</h2>
                <p className="item-detail-price">{price.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}</p>
                <p className="item-detail-description">{capitalizeFirstLetter(addFinalDot(description))}</p>
                <p>Stock: {stock}</p>
                <ItemCount stock={stock}/>
            </div>
        </div>
    );
};

export default ItemDetail;