import { addDoc, collection, doc, runTransaction, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config.js";

const endPurchase = async (cart, clientData) => {
    const productsToUpdateRefs = [];

    // 1. Crear referencias a los productos en el carrito para verificar el stock
    for (const cartProduct of cart) {
        const productRef = doc(db, "products", cartProduct.id);
        productsToUpdateRefs.push({ ref: productRef, id: cartProduct.id });
    }

    const orderCollectionRef = collection(db, "orders");

    try {
        // 2. Ejecutar la transacción para actualizar el stock y crear la orden
        const order = await runTransaction(db, async (transaction) => {
            const stocksUpdated = [];

            // Verificar el stock y calcular el nuevo stock para cada producto en el carrito
            for (const productToUpdate of productsToUpdateRefs) {
                const { ref } = productToUpdate;
                const product = await transaction.get(ref);

                if (!product.exists()) {
                    throw "Product does not exist!";
                }

                const productInCart = cart.find(
                    (cartElement) => cartElement.id === product.id
                );

                const resultStock = product.data().stock - productInCart.quantity;

                if (resultStock < 0) {
                    throw `Product: ${
                        product.data().title
                    } doesn't have enough stock. Stock: ${
                        product.data().stock
                    }, quantity added to cart: ${productInCart.quantity}.`;
                }

                stocksUpdated.push({
                    productId: product.id,
                    stock: resultStock,
                });
            }

            // Actualizar el stock de cada producto en la base de datos
            for (const product of productsToUpdateRefs) {
                const { ref, id } = product;
                const stockUpdated = stocksUpdated.find(
                    (stock) => stock.productId === id
                );

                transaction.update(ref, {
                    stock: stockUpdated.stock,
                });
            }

            // 3. Crear la orden en la base de datos, incluyendo los datos del cliente
            const order = {
                products: [...cart],
                total: cart.reduce((acc, item) => acc + (item.price * item.quantity), 0),
                user: {
                    name: clientData.name,
                    phone: clientData.phone,
                    email: clientData.email
                },
                timestamp: serverTimestamp(),
            };

            await addDoc(orderCollectionRef, order);
            return order;
        });

        console.log("Order created successfully!", order);
    } catch (e) {
        console.error("Error creating order: ", e);
    }
};

export default endPurchase;
