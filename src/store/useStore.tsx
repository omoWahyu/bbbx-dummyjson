// src/store/useStore.ts
import { create } from 'zustand';
import { iProduct } from '../utils/types';

type Store = {
    wishlist: iProduct[];
    addToWishlist: (product: iProduct) => void;
    removeFromWishlist: (productId: number) => void;
    isProductInWishlist: (productId: number) => boolean;
    wishlistCount: () => number;
};

const useStore = create<Store>((set, get) => ({
    wishlist: [],
    addToWishlist: (product: iProduct) => set((state) => ({
        wishlist: [...state.wishlist, product],
    })),
    removeFromWishlist: (productId: number) => set((state) => ({
        wishlist: state.wishlist.filter(item => item.id !== productId),
    })),
    isProductInWishlist: (productId: number) => get().wishlist.some(item => item.id === productId),
    wishlistCount: () => get().wishlist.length,
}));

export default useStore;

