"use client";

import { useCartStore } from "@stores/cart";

export default function CartCounter() {
  const { getLength } = useCartStore();

  return (
    <p className="font-brand-2 text-xl animate-neon">{getLength()} productos</p>
  );
}
