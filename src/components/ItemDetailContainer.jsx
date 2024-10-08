import React, { useEffect, useState } from "react"
import products from "../assets/mockData.json"
import ItemDetail from "./ItemDetail.jsx"
import styles from "../styles/ItemDetailContainer.module.css"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    const getItem = () => {
      setProduct(products[0]);
    };
    
    getItem();
  }, []);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer