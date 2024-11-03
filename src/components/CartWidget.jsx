import { useContext } from "react";
import { Cart } from "../context/CartProvider";
import styles from "../styles/CartWidget.module.css";
import cart from '../assets/cartwdgt.svg'

const CartWidget = () => {
  const { quantity } = useContext(Cart)

  return (
    <div className={styles.cartContainer}>
        <button className={styles.cartButton}>
            <img src={cart} alt="boton carrito" className={styles.cart} />
        </button>
        {quantity > 0 && <span className={styles.cartCount}>{quantity}</span>}
    </div>
  );
}

export default CartWidget;


