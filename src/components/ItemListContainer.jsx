import React, { useState, useEffect } from "react";
import products from "../assets/mockData.json";
import ItemList from "./ItemList.jsx";
import styles from "../styles/ItemListContainer.module.css";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config.js"
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para el loading
  const {categoryId} = useParams();

  useEffect(() => {

    (async ()=> {
      let productsFiltered = []

      const querySnapshot = await getDocs(collection(db, "products"))
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`)
        productsFiltered.push({id: doc.id, ...doc.data()})
      });

      setItems(productsFiltered)
    })()

  }, [categoryId]);

  return (
    <>
      <ItemList products={items} />
    </>
  );
};

export default ItemListContainer;

