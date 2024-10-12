import React, { useState, useEffect } from "react";
import products from "../assets/mockData.json";
import ItemList from "./ItemList.jsx";
import styles from "../styles/ItemListContainer.module.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para el loading
  const {categoryId} = useParams();

  useEffect(() => {
    setLoading(true); // Iniciamos el estado de loading en true al comenzar la carga

    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      });
    };

    fetchProducts()
      .then((resolvedProducts) => {
        let productsFiltered;
        if (categoryId) {
          productsFiltered = resolvedProducts.filter(product => product.category === categoryId);
        } else {
          productsFiltered = resolvedProducts;
        }
        setItems(productsFiltered); // Guardamos los productos filtrados
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false); // Cambiamos el estado de loading a false cuando termina la carga
      });

  }, [categoryId]); // Se ejecuta cuando cambia la categoría

  return (
    <>
      {loading ? (<p>Cargando productos...</p>) : (<ItemList products={items} />)/*Mostramos el mensaje mientras loading es true*/}
    </>
  );
};

export default ItemListContainer;

