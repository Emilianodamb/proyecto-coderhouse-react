import styles from "../styles/CartWidget.module.css";
import cart from '../assets/cartwdgt.svg'

const CartWidget = () => {

  return (
    <div className={styles.cartContainer}>
        <button className={styles.cartButton}>
            <img src={cart} alt="boton carrito" className={styles.cart} />
        </button>
        <span className={styles.cartCount}>3</span>
    </div>
  );
}

export default CartWidget;


