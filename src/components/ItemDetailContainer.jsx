import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.jsx";
import styles from "../styles/ItemDetailContainer.module.css";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config.js"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); 

  // const getItem = () => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       const foundProduct = products.find((item) => item.id === parseInt(id));
  //       resolve(foundProduct);
  //     }, 2000);
  //   });
  // };

  useEffect(() => {
    // const fetchProduct = async () => {
    //   setLoading(true);
    //   const productData = await getItem();
    //   setProduct(productData);
    //   setLoading(false);
    // };
    (async()=>{

      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setProduct({...docSnap.data(), id})
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
        
      } catch (error) {
        console.log(error)
      }


    })()



    // fetchProduct();
  }, [id]);

  return product && <ItemDetail product={product}/>
};

export default ItemDetailContainer;

