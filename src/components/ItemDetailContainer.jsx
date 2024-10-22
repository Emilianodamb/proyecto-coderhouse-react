import React, { useEffect, useState } from "react";
import products from "../assets/mockData.json";
import ItemDetail from "./ItemDetail.jsx";
import styles from "../styles/ItemDetailContainer.module.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 

  const getItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const foundProduct = products.find((item) => item.id === parseInt(id));
        resolve(foundProduct);
      }, 2000);
    });
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const productData = await getItem();
      setProduct(productData);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  return (
    <div className={styles.container}>
      {loading ? (
        <p>Loading...</p> 
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

