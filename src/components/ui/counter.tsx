"use client";

import { useCartStore } from "@stores/cart";

export default function Counter() {
  const { getFinalPrice } = useCartStore();
  return (
    <p>
      TOTAL: <strong>${getFinalPrice()}</strong>
    </p>
  );
}
