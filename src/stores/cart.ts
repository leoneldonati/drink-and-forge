import { create } from "zustand";
import { persist } from "zustand/middleware";
interface CartStore {
  list: ProductInCart[];
  getLength: () => number;
  isInCart: (_id: string) => boolean;
  selectFlavor: (flavor: string, _id: string) => void;
  isSelectedFlavor: (flavor: string, _id: string) => boolean;
  addOne: (product: ProductInCart) => void;
  deleteOne: (_id: string) => void;
  quiteOne: (_id: string) => void;
  deleteAllCart: () => void;
  getFinalPrice: () => string;
}

export const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      list: [],

      getLength: () => {
        const { list } = get();

        return list.length;
      },
      isInCart: (_id) => {
        const { list } = get();

        return list.some((prod) => prod._id === _id);
      },
      isSelectedFlavor: (flavor, _id) => {
        const { list } = get();

        const prod = list.find((prod) => prod._id === _id);

        return prod?.selectedFlavors.find((f) => f === flavor) !== undefined;
      },
      selectFlavor: (flavor, _id) => {
        const { list } = get();

        const mappedList = list.map((prod) => {
          if (prod._id === _id) {
            const hasFlavor = prod.selectedFlavors.find((f) => f === flavor);

            if (hasFlavor)
              return {
                ...prod,
                selectedFlavors: prod.selectedFlavors.filter(
                  (f) => f !== flavor
                ),
              };

            return {
              ...prod,
              selectedFlavors: [...prod.selectedFlavors, flavor],
            };
          }

          return prod;
        });

        set({ list: mappedList });
      },
      addOne: (product) => {
        const { list, isInCart } = get();

        if (isInCart(product._id)) {
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
      quiteOne: (_id) => {
        const { list } = get();

        const mappedList = list.map((prod) => {
          if (prod._id === _id)
            return {
              ...prod,
              quantity: prod.quantity === 1 ? 1 : prod.quantity - 1,
            };

          return prod;
        });

        set({ list: mappedList });
      },
      deleteAllCart: () => set({ list: [] }),
      getFinalPrice: () => {
        const { list } = get();

        const finalNumber = list.reduce(
          (acc, value) => acc + value.price * value.quantity,
          0
        );

        return finalNumber.toLocaleString("es-ar", { currency: "ARS" });
      },
    }),
    { name: "cart-list-DAF" }
  )
);
