import React, { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import styles from "../styles/ItemListContainer.module.css";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config.js"
import { collection, query, where, getDocs } from "firebase/firestore";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {

    (async ()=> {

      try {
        let productsFiltered = []
        if (categoryId) {
          
          const q = query(
            collection(db, "products"), 
            where("category", "==", categoryId));

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            productsFiltered.push({id: doc.id, ...doc.data()})
          });

        } else {
          const querySnapshot = await getDocs(collection(db, "products"))
          querySnapshot.forEach((doc) => {
            productsFiltered.push({id: doc.id, ...doc.data()})
          });  
        }
        setItems(productsFiltered)
      } catch (error) {
        console.log(error)
      }


    })()

  }, [categoryId]);

  return (
    <>
      <ItemList products={items} />
    </>
  );
};

export default ItemListContainer;

