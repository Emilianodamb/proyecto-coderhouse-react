import React from "react";
import "../styles/Item.css";
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
        <div className="item-container">
            <img src={item.imageUrl} alt={item.title}/>
            <div className="item-info">
                <b>{item.brand}</b>
                <h2>{removeFirstWord(item.title)}</h2>
                <span className="item-description">{addFinalDot(capitalizeFirstLetter(item.description))}</span>
                <span className="item-stock">Stock: {item.stock}</span>
                <div className="item-info-footer">
                    <span className="item-price">{item.price.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}</span>
                    <button><a href=""></a></button>
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    )
}

export default Item;