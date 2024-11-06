import { addDoc, collection, doc, runTransaction, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config.js";

const endPurchase = async (cart, clientData) => {
    const productsToUpdateRefs = [];

    for (const cartProduct of cart) {
        const productRef = doc(db, "products", cartProduct.id);
        productsToUpdateRefs.push({ ref: productRef, id: cartProduct.id });
    }

    const orderCollectionRef = collection(db, "orders");

    try {
        const order = await runTransaction(db, async (transaction) => {
            const stocksUpdated = [];

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
                    throw `Product: ${product.data().title} doesn't have enough stock.`;
                }

                stocksUpdated.push({
                    productId: product.id,
                    stock: resultStock,
                });
            }

            for (const product of productsToUpdateRefs) {
                const { ref, id } = product;
                const stockUpdated = stocksUpdated.find(
                    (stock) => stock.productId === id
                );

                transaction.update(ref, {
                    stock: stockUpdated.stock,
                });
            }

            const orderData = {
                products: [...cart],
                total: cart.reduce((acc, item) => acc + (item.price * item.quantity), 0),
                user: {
                    name: clientData.name,
                    phone: clientData.phone,
                    email: clientData.email
                },
                timestamp: serverTimestamp(),
            };

            const orderRef = await addDoc(orderCollectionRef, orderData);
            return { id: orderRef.id, ...orderData }; // Retorna id junto a los datos de la orden
        });

        return order;
    } catch (e) {
        console.error("Error creating order: ", e);
        throw e;
    }
};

export default endPurchase;
