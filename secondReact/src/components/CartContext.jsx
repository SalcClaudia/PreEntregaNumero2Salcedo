import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [bag, setBag] = useState([])


    const addItem = (item, quantity) => {
        if (!item || !item.id) {
            console.error("Item is undefined or missing 'id':", item);
            return;
        }
        if (isInCart(item.id)) {
            console.log("esta")
            const object = bag.find(obj => obj.id == item.id);
            object.quantity += quantity
            setBag([...bag]);
        } else {
            setBag([...bag, {...item, quantity: quantity}]);
        }
    }

    const removeItem = (id) => {
        const erase = bag.filter(item => item.id != id);
        setBag([...erase]);
    }

    const clear = () => {
        setBag([]);

    }

    const isInCart = (id) => {
        return bag.some(item => item.id == id);
    }

    const totalProducts = () =>{
        return bag.reduce((add, item) => add += item.quantity, 0);
    }

    const sumProducts = () =>{
        return bag.reduce((add, item) => add += item.quantity * item.price, 0);
    }

    return <CartContext.Provider value={{ bag, addItem, removeItem, clear, totalProducts, sumProducts }}>
        {children}

    </CartContext.Provider>

}

export default CartContextProvider;