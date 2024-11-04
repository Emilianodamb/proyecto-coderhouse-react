import React, { useContext, useState, useRef, useEffect } from "react";
import { Cart as CartContext } from "../context/CartProvider.jsx";
import CartItem from "./CartItem.jsx";
import styles from "../styles/Cart.module.css";
import { NavLink } from "react-router-dom";
import endPurchase from "../services/endPurchase.js";

const Cart = () => {
    const { cart, total, removeItem } = useContext(CartContext); // Obtiene removeItem del contexto
    const [modalVisible, setModalVisible] = useState(false);
    const [clientData, setClientData] = useState({
        name: "",
        phone: "",
        email: ""
    });
    const modalRef = useRef(null);
    const openButtonRef = useRef(null);

    useEffect(() => {
        if (modalVisible) {
            modalRef.current?.focus();
        } else {
            openButtonRef.current?.focus();
        }
    }, [modalVisible]);

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            setModalVisible(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalVisible(false);
        endPurchase(cart, clientData); // Llama a endPurchase con la data del cliente
    };

    return (
        <div className={styles.container}>
            {cart.length ? (
                <>
                    <div>
                        {cart.map((cartItem) => (
                            <CartItem item={cartItem} key={cartItem.id} onRemove={removeItem} /> // Pasa onRemove a CartItem
                        ))}
                    </div>
                    <div className={styles.totalContainer}>
                        <h2>Total: {total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</h2>
                        <button 
                            className={styles.endPurchase} 
                            onClick={() => setModalVisible(true)}
                            ref={openButtonRef}
                        >
                            Finalizar compra
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <h1>No hay productos en el carrito</h1>
                    <NavLink to={"/"}>Home</NavLink>
                </>
            )}

            {modalVisible && (
                <div
                    className={styles.modalContainer}
                    onClick={handleOutsideClick}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div
                        className={styles.modal}
                        ref={modalRef}
                        tabIndex="-1"
                    >
                        <h1 id="modal-title">Ingresa tus datos para finalizar la compra</h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Nombre"
                                value={clientData.name}
                                onChange={(e) =>
                                    setClientData({ ...clientData, name: e.target.value })
                                }
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Teléfono"
                                value={clientData.phone}
                                onChange={(e) =>
                                    setClientData({ ...clientData, phone: e.target.value })
                                }
                                required
                            />
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                value={clientData.email}
                                onChange={(e) =>
                                    setClientData({ ...clientData, email: e.target.value })
                                }
                                required
                            />
                            <button type="submit">Confirmar Compra</button>
                        </form>
                        <button onClick={() => setModalVisible(false)}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
