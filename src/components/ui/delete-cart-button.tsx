"use client";

import { useCartStore } from "@stores/cart";
import { IconTrashFilled } from "@tabler/icons-react";
import toast from "react-hot-toast";

export default function DeleteCartButton() {
  const { deleteAllCart } = useCartStore();

  const handleDelete = () => {
    deleteAllCart();
    toast.success("¡Carrito limpio!");
  };
  return (
    <button
      type="button"
      onClick={handleDelete}
      className="transition hover:scale-110 hover:bg-white hover:text-brand-1 p-2 rounded-md flex items-center gap-1 font-brand-2"
      aria-label="Borrar todo el carrito"
      title="Borrar todo el carrito "
    >
      Borrar todo <IconTrashFilled size={20} />
    </button>
  );
}
