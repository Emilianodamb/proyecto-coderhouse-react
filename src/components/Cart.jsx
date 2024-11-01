import React, { useContext } from "react"
import { Cart as CartContext } from "../context/CartProvider.jsx"
import CartItem from "./CartItem.jsx"
import styles from "../styles/Cart.module.css"
import { NavLink } from "react-router-dom"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from "../firebase/config.js"
import endPurchase from "../services/endPurchase.js"


const Cart = () => {
    const { cart } = useContext(CartContext)
    console.log({ cart })

    const handlePurchase = () => {
        const order = {
            buyer: {
                name: "Emilio",
                lastName: "Baquiano",
                email: "elbaquiano@latest.com",
            },
            products: cart,
            total: 1245,
            timestamp: serverTimestamp()
        }

        ;(async()=>{
            try {
                // Add a new document with a generated id.
                const docRef = await addDoc(collection(db, "orders"), order);
                console.log("Document written with ID: ", docRef.id);
            } catch (error) {
                console.log(error)
            }
        })()
    }

    return (
        <div className={styles.container}>
            {cart.length ? (
                <>
                {cart.map((cartItem) => {
                    return <CartItem item={cartItem} key={cartItem.id}/>
                })}
                <button onClick={()=>endPurchase(cart)}>Finalizar compra</button>
                </>
            ):(
                <>
                <h1>No hay productos en el carrito</h1>
                <NavLink to={"/"}>Home</NavLink>
                </>
            )}
        </div>
    )
}

export default Cart