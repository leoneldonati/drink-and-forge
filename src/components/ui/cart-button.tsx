"use client";

import { useCartStore } from "@stores/cart";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function CartButton() {
  const { getLength } = useCartStore();
  return (
    <Link
      href="/cart"
      className="text-lg font-bold font-brand-2 flex items-center gap-1 bg-brand-1 text-white px-2 py-1 rounded "
      style={{ filter: "drop-shadow(-1px 1.5px 5px var(--color-brand-1))" }}
    >
      <IconShoppingCart />

      <span>{getLength()}</span>
    </Link>
  );
}
