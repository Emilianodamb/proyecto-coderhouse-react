import React from "react";
import Item from "./Item.jsx";
import styles from "../styles/ItemList.module.css";

const ItemList = ({products}) => {

  return (
    <div className={styles.itemList}>
        {products.map((product) => {
            return (<Item item={product} key={product.id}/>)
        })}
    </div>
  );
}

export default ItemList;