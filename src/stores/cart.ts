import { create } from "zustand";
import { persist } from "zustand/middleware";
interface CartStore {
  list: ProductInCart[];
  getLength: () => number;
  addOne: (product: ProductInCart) => void;
  deleteOne: (_id: string) => void;
  deleteAllCart: () => void;
}

export const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      list: [],
      getLength: () => {
        const { list } = get();

        return list.length;
      },
      addOne: (product) => {
        const { list } = get();

        const isInCart =
          list.find((prod) => prod._id === product._id) !== undefined;

        if (isInCart) {
          const mappedList = list.map((prod) => {
            if (prod._id === product._id)
              return { ...prod, quantity: prod.quantity + 1 };

            return prod;
          });

          set({ list: mappedList });

          return;
        }
        const newList = [product, ...list];

        set({ list: newList });
      },
      deleteOne: (_id) => {
        const { list } = get();

        const filteredList = list.filter((prod) => prod._id !== _id);

        set({ list: filteredList });
      },
      deleteAllCart: () => set({ list: [] }),
    }),
    { name: "cart-list-DAF" }
  )
);
