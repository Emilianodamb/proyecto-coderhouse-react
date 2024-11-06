import React, { useContext } from "react";
import styles from "../styles/OrderModal.module.css";
import { Theme } from "../context/ThemeProvider.jsx"

const OrderModal = ({ orderData, onClose }) => {
    const {dark} = useContext(Theme)
    if (!orderData) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles[`modalContent-${dark ? "dark" : "light"}`]} onClick={(e) => e.stopPropagation()}>
                <h2>Detalles de la Orden</h2>
                <p><strong>Nombre:</strong> {orderData.user.name}</p>
                <p><strong>Teléfono:</strong> {orderData.user.phone}</p>
                <p><strong>Email:</strong> {orderData.user.email}</p>
                <p><strong>#Orden:</strong> {orderData.id}</p>
                <h3>Productos:</h3>
                <ul>
                    {orderData.products.map((product) => (
                        <li key={product.id}>
                            x{product.quantity} {product.title}
                        </li>
                    ))}
                </ul>
                <p><strong>Total:</strong> {orderData.total.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default OrderModal;
