import { createContext, useContext, useState, useEffect } from "react"


const CartContext = createContext({
    cart: []
})

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);

    const addItem = (newProduct) => {
        
        const index = cart.findIndex(product => product.id === newProduct.id)  

        if (index === -1 ) {
            setCart([...cart,newProduct])              
        } else {
            cart[index].quantity += newProduct.quantity
            setCart( [ ...cart ])
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter (prod => prod.id !== itemId)
        setCart (cartUpdated)
    }

    const clearCart = () => {
        setCart ([])
    }

    const isInCart = (itemId) => {
        return cart.some (prod => prod.id === itemId)
    }

    const totalQuantity = () =>{
        return cart.reduce( (totalQuantity, item) => totalQuantity += item.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((totalPrice, item) => totalPrice += (item.price * item.quantity), 0)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, totalQuantity, totalPrice}}>
        { children }
        </CartContext.Provider>
    )
}
