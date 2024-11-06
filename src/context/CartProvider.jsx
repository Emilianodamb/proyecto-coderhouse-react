import { createContext, useState, useMemo } from "react";

export const Cart = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addCart = (product, productQuantity) => {
        const productInCart = isInCart(product.id);
        let cartUpdated = [...cart];

        if (productInCart) {
            cartUpdated = cart.map(cartProduct => {
                if (cartProduct.id === product.id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + productQuantity
                    };
                }
                return cartProduct;
            });
        } else {
            cartUpdated.push({ ...product, quantity: productQuantity });
        }

        setCart(cartUpdated);
    };

    const isInCart = (productId) => {
        return cart.some(cartProduct => cartProduct.id === productId);
    };

    const removeItem = (itemId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const quantity = useMemo(() => 
        cart.reduce((acc, item) => acc + item.quantity, 0),
        [cart]
    );

    const total = useMemo(() => 
        cart.reduce((acc, item) => acc + (item.price * item.quantity), 0),
        [cart]
    );

    return (
        <Cart.Provider value={{ cart, addCart, removeItem, clearCart, quantity, total }}>
            {children}
        </Cart.Provider>
    );
};

export default CartProvider;
