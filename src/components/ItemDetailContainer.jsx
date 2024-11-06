import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config.js"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); 
  useEffect(() => {
    (async()=>{
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({...docSnap.data(), id})
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }, [id]);

  return product && <ItemDetail product={product}/>
};

export default ItemDetailContainer;

