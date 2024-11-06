import React from "react";
import styles from "../styles/OrderModal.module.css"; // Asegúrate de crear los estilos

const OrderModal = ({ orderData, onClose }) => {
    if (!orderData) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2>Detalles de la Orden</h2>
                <p><strong>ID de Orden:</strong> {orderData.id}</p>
                <p><strong>Nombre:</strong> {orderData.user.name}</p>
                <p><strong>Teléfono:</strong> {orderData.user.phone}</p>
                <p><strong>Email:</strong> {orderData.user.email}</p>
                <p><strong>Total:</strong> {orderData.total.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</p>
                <h3>Productos:</h3>
                <ul>
                    {orderData.products.map((product) => (
                        <li key={product.id}>
                            {product.title} - Cantidad: {product.quantity}
                        </li>
                    ))}
                </ul>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default OrderModal;
