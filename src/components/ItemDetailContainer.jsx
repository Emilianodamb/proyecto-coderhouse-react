import React, { useEffect, useState } from "react";
import products from "../assets/mockData.json";
import ItemDetail from "./ItemDetail.jsx";
import styles from "../styles/ItemDetailContainer.module.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams(); // Captura el id desde la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carga

  // Función que simula la obtención del producto con un retraso
  const getItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const foundProduct = products.find((item) => item.id === parseInt(id)); // Busca el producto por id
        resolve(foundProduct); // Resuelve la promesa con el producto encontrado
      }, 2000); // Simula un retardo de 2 segundos
    });
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true); // Comienza a cargar
      const productData = await getItem(); // Espera a que la promesa se resuelva
      setProduct(productData); // Establece el producto encontrado
      setLoading(false); // Deja de cargar
    };

    fetchProduct();
  }, [id]); // El efecto se ejecuta cuando cambia el id

  return (
    <div className={styles.container}>
      {loading ? (
        <p>Loading...</p> // Muestra el mensaje de carga mientras se espera
      ) : product ? (
        <ItemDetail product={product} /> // Muestra el producto cuando esté disponible
      ) : (
        <p>Producto no encontrado</p> // Si no se encuentra el producto
      )}
    </div>
  );
};

export default ItemDetailContainer;

