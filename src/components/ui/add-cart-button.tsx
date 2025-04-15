"use client";

import { useCartStore } from "@stores/cart";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import toast from "react-hot-toast";

interface Props {
  product: Product;
}
export default function AddCartButton({ product }: Props) {
  const { addOne } = useCartStore();

  const handleAddToCart = () => {
    addOne(product);
    toast.success(`¡${product.name} añadido!`);
  };
  return (
    <button
      onClick={handleAddToCart}
      className="w-full flex items-center justify-center gap-1 px-4 py-2 rounded-md bg-brand-1/70"
    >
      <IconShoppingCartPlus /> Añadir al carro
    </button>
  );
}
