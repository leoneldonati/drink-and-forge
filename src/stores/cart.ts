import { create } from "zustand";

interface CartStore {
  list: Product[];
  getLength: () => number;
  addOne: (product: Product) => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  list: [],
  getLength: () => {
    const { list } = get();

    return list.length;
  },
  addOne: (product) => {
    const { list } = get();

    const newList = [product, ...list];

    set({ list: newList });
  },
}));
