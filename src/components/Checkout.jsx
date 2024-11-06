import React, { useState, useContext } from "react";
import styles from "../styles/Checkout.module.css";
import endPurchase from "../services/endPurchase.js";
import { Cart as CartContext } from "../context/CartProvider.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = ({ cart, onClose }) => {
    const notify = () => toast.info('Generando la orden...');
    const { clearCart } = useContext(CartContext);
    const [clientData, setClientData] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const order = await endPurchase(cart, clientData);
            clearCart();
            onClose(order);
        } catch (error) {
            console.error("Error completing purchase: ", error);
        }
    };

    return (
        <div className={styles.checkoutContainer}>
            <p className={styles.title}>Ingresa tus datos para confirmar la compra</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={clientData.name}
                    onChange={(e) => setClientData({ ...clientData, name: e.target.value })}
                    required
                />
                <input
                    type="tel"
                    placeholder="Teléfono"
                    value={clientData.phone}
                    onChange={(e) => setClientData({ ...clientData, phone: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={clientData.email}
                    onChange={(e) => setClientData({ ...clientData, email: e.target.value })}
                    required
                />
                <div>
                    <button onClick={notify} type="submit">Confirmar Compra</button>
                    <ToastContainer 
                        position="top-center"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={true}
                        rtl={false}
                        pauseOnFocusLoss
                        pauseOnHover={false}
                        theme="colored"
                        transition: Bounce
                    />
                </div>
            </form>
            <button onClick={() => onClose(null)}>Cerrar</button>
        </div>
    );
};

export default Checkout;
