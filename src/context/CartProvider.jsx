import { createContext, useState } from "react";

//1. Crear contexto
export const Cart = createContext()

//2. Crear el componente que va a proveer ese contexto <NombreProvider>
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)

    const addCart = (product, productQuantity) => {
        const productInCart = isInCart(product.id);
        console.log(productInCart);
        console.log("quantity:", productQuantity);
    
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
        return cart.some(cartProduct => cartProduct.id === productId )
    }

    return(
        <Cart.Provider value={{cart, addCart, quantity}}>{children}</Cart.Provider>
    )
}

export default CartProvider