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