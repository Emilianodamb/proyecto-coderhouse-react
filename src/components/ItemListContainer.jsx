import React, { useState, useEffect } from "react";
import products from "../assets/mockData.json";
import ItemList from "./ItemList.jsx";
import styles from "../styles/ItemListContainer.module.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      });
    };


    fetchProducts()
      .then((resolvedProducts) => {
        setItems(resolvedProducts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>{items.length === 0 ? (<p>Cargando productos...</p>) : (<ItemList products={items} />)}</div>
  );
}

export default ItemListContainer;