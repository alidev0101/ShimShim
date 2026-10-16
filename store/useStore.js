"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(persist((set, get) => ({
  cart: [], wishlist: [],
  addToCart: (product, options = {}) => set({ cart: [...get().cart, { ...product, qty: 1, ...options, lineId: `${product.id}-${Date.now()}` }] }),
  removeFromCart: (lineId) => set({ cart: get().cart.filter((item) => item.lineId !== lineId) }),
  setQty: (lineId, qty) => set({ cart: get().cart.map((item) => item.lineId === lineId ? { ...item, qty: Math.max(1, qty) } : item) }),
  toggleWishlist: (product) => set({ wishlist: get().wishlist.some((x) => x.id === product.id) ? get().wishlist.filter((x) => x.id !== product.id) : [...get().wishlist, product] }),
  clearCart: () => set({ cart: [] }),
}), { name: "shimshim-store" }));
