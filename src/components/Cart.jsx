import React, { useContext, useState, useRef, useEffect } from "react";
import { Cart as CartContext } from "../context/CartProvider.jsx";
import CartItem from "./CartItem.jsx";
import Checkout from "./Checkout.jsx";
import styles from "../styles/Cart.module.css";
import { NavLink } from "react-router-dom";

const Cart = () => {
    const { cart, total, removeItem } = useContext(CartContext);
    const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);
    const openButtonRef = useRef(null);

    useEffect(() => {
        if (isCheckoutVisible) {
            openButtonRef.current?.focus();
        }
    }, [isCheckoutVisible]);

    const handleCheckoutClose = () => {
        setIsCheckoutVisible(false);
        setPurchaseCompleted(true);  // Marca la compra como completada
    };

    return (
        <div className={styles.container}>
            {cart.length > 0 ? (
                <>
                    <div>
                        {cart.map((cartItem) => (
                            <CartItem item={cartItem} key={cartItem.id} onRemove={removeItem} />
                        ))}
                    </div>
                    <div className={styles.totalContainer}>
                        <h2>Total: {total.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</h2>
                        <button
                            className={styles.endPurchase}
                            onClick={() => setIsCheckoutVisible(true)}
                            ref={openButtonRef}
                        >
                            Finalizar compra
                        </button>
                    </div>
                </>
            ) : purchaseCompleted ? (
                <>
                    <h3>¡Compra exitosa!</h3>
                    <button onClick={() => alert("Mostrando ticket...")}>Mostrar ticket</button>
                </>
            ) : (
                <>
                    <h1>No hay productos en el carrito</h1>
                    <NavLink to={"/"}>Home</NavLink>
                </>
            )}

            {isCheckoutVisible && !purchaseCompleted && (
                <Checkout 
                    cart={cart} 
                    onClose={handleCheckoutClose} 
                />
            )}
        </div>
    );
};

export default Cart;