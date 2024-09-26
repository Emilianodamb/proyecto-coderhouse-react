import React from "react";
import Item from "./Item.jsx";
import "./ItemList.css";

function ItemList({products}) {

  return (
    <div className="item-list">
        {products.map((product) => {
            return (<Item item={product} key={product.id}/>)
        })}
    </div>
  );
}

export default ItemList;