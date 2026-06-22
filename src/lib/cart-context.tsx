"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { Product } from "./products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  wishlist: string[];
}

type CartAction =
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; id: string }
  | { type: "UPDATE_QUANTITY"; id: string; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_WISHLIST"; id: string }
  | { type: "HYDRATE"; state: CartState };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.items.find((i) => i.product.id === action.product.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.product.id === action.product.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { product: action.product, quantity: 1 }] };
    }
    case "REMOVE_FROM_CART":
      return { ...state, items: state.items.filter((i) => i.product.id !== action.id) };
    case "UPDATE_QUANTITY":
      if (action.quantity <= 0)
        return { ...state, items: state.items.filter((i) => i.product.id !== action.id) };
      return {
        ...state,
        items: state.items.map((i) =>
          i.product.id === action.id ? { ...i, quantity: action.quantity } : i
        ),
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "TOGGLE_WISHLIST": {
      const inList = state.wishlist.includes(action.id);
      return {
        ...state,
        wishlist: inList
          ? state.wishlist.filter((id) => id !== action.id)
          : [...state.wishlist, action.id],
      };
    }
    case "HYDRATE":
      return action.state;
    default:
      return state;
  }
}

interface CartContextValue {
  state: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (id: string) => void;
  cartCount: number;
  cartTotal: number;
  isInWishlist: (id: string) => boolean;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], wishlist: [] });

  useEffect(() => {
    try {
      const saved = localStorage.getItem("afganJewellers-cart");
      if (saved) dispatch({ type: "HYDRATE", state: JSON.parse(saved) });
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("afganJewellers-cart", JSON.stringify(state));
  }, [state]);

  const cartCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart: (product) => dispatch({ type: "ADD_TO_CART", product }),
        removeFromCart: (id) => dispatch({ type: "REMOVE_FROM_CART", id }),
        updateQuantity: (id, quantity) => dispatch({ type: "UPDATE_QUANTITY", id, quantity }),
        clearCart: () => dispatch({ type: "CLEAR_CART" }),
        toggleWishlist: (id) => dispatch({ type: "TOGGLE_WISHLIST", id }),
        cartCount,
        cartTotal,
        isInWishlist: (id) => state.wishlist.includes(id),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
