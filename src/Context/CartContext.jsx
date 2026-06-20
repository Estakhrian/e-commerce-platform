import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";


const CartContext = createContext()

export function CartProvider({ children }) {

    const [CartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart")

        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(CartItems))
    }, [CartItems])

    const addToCart = (product) => {
        setCartItems(prev => [...prev, { ...product, quantity: 1 }])
        toast.success(`${product.title} added to cart`)
    }

    const decreaseQuantity = (productId) => {
        setCartItems(prev => prev.map(item => item.id === productId ? {...item, quantity: item.quantity -1 } : item)
    .filter(item => item.quantity > 0))
    }

    const increaseQuantity = (productId) => {
        setCartItems(prev => prev.map(item => item.id === productId ? {...item, quantity: item.quantity + 1} :item))
    }

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    return (
        <CartContext.Provider
            value={{
                CartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity
            }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {

    return useContext(CartContext)
}