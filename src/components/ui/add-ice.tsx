"use client";

import { useCartStore } from "@stores/cart";
import toast from "react-hot-toast";

const _id = crypto.randomUUID();
export default function AddIce() {
  const iceSchema: Product = {
    _id,
    category: "Hielo",
    in_stock: true,
    flavors: [],
    name: "Hielo 2kg",
    price: 2500,
    created_at: new Date(),
    image: "hielo.avif",
  };

  const { list, addOne, deleteOne } = useCartStore();

  const isInCart = list.some((prod) => prod.name === iceSchema.name);
  return (
    <button
      onClick={() => {
        if (isInCart) {
          deleteOne(iceSchema._id);
          toast.success("¡Hielo quitado!");
          return;
        }
        toast.success("¡Hielo añadido!");
        addOne({ ...iceSchema, quantity: 1, selectedFlavors: [] });
      }}
      className="bg-cyan-400 font-bold px-4 py-2 rounded-md"
    >
      {isInCart ? "QUITAR HIELO" : "AÑADIR HIELO"}
    </button>
  );
}
