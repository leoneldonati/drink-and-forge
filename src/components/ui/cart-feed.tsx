"use client";

import { useCartStore } from "@stores/cart";
import Image from "next/image";
import AddCartButton from "./add-cart-button";
import { IconShoppingCartMinus, IconTrash } from "@tabler/icons-react";
import FlavorSelector from "./flavor-selector";

export default function CartFeed() {
  const { list, deleteOne, quiteOne } = useCartStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-center w-full py-3">
      {list.map((product) => (
        <article
          key={product._id}
          className="max-w-[220px] m-h-100 h-full w-full font-brand-1 uppercase gap-2 p-3 rounded-md outline-2 outline-brand-1 shadow-xl shadow-brand-1/40 flex flex-col items-center justify-between backdrop-blur-md bg-black/40 relative"
        >
          <button
            title={`Borrar ${product.name}`}
            onClick={() => deleteOne(product._id)}
            className="absolute top-2 right-2 z-10 transition-colors hover:text-brand-1"
          >
            <IconTrash />
          </button>
          <p className="absolute left-2 top-2 z-10 p-1  text-white  text-xl font-bold">
            {product.quantity}
          </p>

          <Image
            src={`/products/${product.image}`}
            alt={product.name}
            width={500}
            height={400}
            className="max-w-40 aspect-square object-contain"
          />
          <p>{product.name}</p>

          <p className="text-xl font-bold">${product.price}</p>

          <FlavorSelector flavors={product.flavors} prodId={product._id} />
          <AddCartButton product={product} />

          <button
            onClick={() => quiteOne(product._id)}
            title="Quitar uno de la cantidad"
            aria-label="Quitar uno de la cantidad"
            className="px-4 py-2 rounded-md flex items-center justify-center gap-1 bg-brand-1/70 w-full mt-2"
          >
            <IconShoppingCartMinus /> Quitar uno
          </button>
        </article>
      ))}
    </div>
  );
}
