import "./CartWidget.css";
import cart from '../assets/cartwdgt.svg'

function CartWidget() {

  return (
    <div className="cart-container">
        <button className="cart-button">
            <img src={cart} alt="boton carrito" className="cart" />
        </button>
        <span className="cart-count">3</span>
    </div>
  );
}

export default CartWidget;


