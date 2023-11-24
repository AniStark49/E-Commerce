import React, { createContext, useContext, useState } from "react";
import all_products from "../Components/Assets/all_product.js";

export const ShopContext = createContext();


const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemID) => {
    const selectedProduct = all_products.find(
      (product) => product.id === itemID
    );

    if (selectedProduct) {
      const existingIndex = cartItems.findIndex((item) => item.id === itemID);

      if (existingIndex !== -1) {
        // Product already in cart, increase quantity
        const updatedCart = [...cartItems];
        updatedCart[existingIndex].quantity += 1;
        setCartItems(updatedCart);
      } else {
        // Product not in cart, add it with quantity 1
        setCartItems((prev) => [...prev, { ...selectedProduct, quantity: 1 }]);
      }
    }
  };

  const removeFromCart = (itemID) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemID ? { ...item, quantity: item.quantity - 1 } : item
    );

    setCartItems(updatedCart.filter((item) => item.quantity > 0));
  };

  const getTotalCartAmount = () => {
    const totalPrice = cartItems.reduce((acc, item) => {
      // Check if the item has the 'new_price' property and it's a valid number
      if (item.new_price && typeof item.new_price === 'number') {
        const productPrice = item.quantity * item.new_price;
        return acc + productPrice;
      } else {
        console.error(`Invalid price for item with ID ${item.id}`);
        return acc;
      }
    }, 0);
    return totalPrice;
  };
  

  const getCartItems = () => {
    return cartItems;
  };

  const contextValue = {
    getTotalCartAmount,
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

export const useCart = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useCart must be used within a ShopContextProvider");
  }

  const { cartItems, addToCart, removeFromCart, getCartItems } = context;

  return { cartItems, addToCart, removeFromCart, getCartItems };
};
