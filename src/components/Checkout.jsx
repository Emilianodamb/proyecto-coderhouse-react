import React, { useState, useContext } from "react";
import styles from "../styles/Checkout.module.css";
import endPurchase from "../services/endPurchase.js";
import { Cart as CartContext } from "../context/CartProvider.jsx";

const Checkout = ({ cart, onClose }) => {
    const { clearCart } = useContext(CartContext);
    const [clientData, setClientData] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        endPurchase(cart, clientData).then(() => {
            clearCart();            // Vacía el carrito después de la compra
            onClose();               // Cierra el Checkout inmediatamente
        });
    };

    return (
        <div className={styles.checkoutContainer}>
            <h1>Ingresa tus datos para finalizar la compra</h1>
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
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
};

export default Checkout;