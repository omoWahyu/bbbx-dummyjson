// src/store/useStore.ts
import { create } from 'zustand';
import { iProduct } from '../utils/types';

interface StoreState {
    wishlist: iProduct[];
    addToWishlist: (product: iProduct) => void;
    removeFromWishlist: (id: number) => void;
}

const useStore = create<StoreState>((set) => ({
    wishlist: [],
    addToWishlist: (product) => set((state) => ({
        wishlist: [...state.wishlist, product],
    })),
    removeFromWishlist: (id) => set((state) => ({
        wishlist: state.wishlist.filter(product => product.id !== id),
    })),
}));

export default useStore;
