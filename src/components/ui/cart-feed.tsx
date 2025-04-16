"use client";

import { useCartStore } from "@stores/cart";
import Image from "next/image";
import AddCartButton from "./add-cart-button";
import { IconTrash } from "@tabler/icons-react";

export default function CartFeed() {
  const { list, deleteOne } = useCartStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-center w-full">
      {list.map((product) => (
        <article
          key={product._id}
          className="max-w-[380px] w-full font-brand-2 p-3 rounded-md outline-2 outline-brand-1 shadow-xl shadow-brand-1/40 flex flex-col items-center backdrop-blur-md relative"
        >
          <button
            title={`Borrar ${product.name}`}
            onClick={() => deleteOne(product._id)}
            className="absolute top-2 right-2 z-10 transition-colors hover:text-brand-1"
          >
            <IconTrash />
          </button>
          <p className="absolute left-2 top-2 z-10 p-1  text-brand-1 text-xl font-bold">
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

          <p className="text-xl">${product.price}</p>

          <div className="w-full flex flex-col gap-2">
            <AddCartButton product={product} />
          </div>
        </article>
      ))}
    </div>
  );
}
