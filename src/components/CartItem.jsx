import React from "react"
import styles from "../styles/CartItem.module.css"

const CartItem = ({ item }) => {
    return (
        <div className={styles.cartItemContainer} >
            <div className={styles.id}>
                <span>x{item.quantity}</span>
                <img className={styles.img} src={item.pictureUrl} />
            </div>
            <div className={styles.info}>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.price}>{item.price.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})} c/u</p>
            </div>
            <button className={styles.deleteButton}>Quitar</button>
        </div>
    )
}

export default CartItem