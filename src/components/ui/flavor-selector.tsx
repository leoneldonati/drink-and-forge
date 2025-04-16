"use client";

import { useCartStore } from "@stores/cart";

interface Props {
  flavors: string[];
  prodId: string;
}
export default function FlavorSelector({ flavors, prodId }: Props) {
  const { selectFlavor, isSelectedFlavor } = useCartStore();

  return (
    <div className="w-full h-full">
      <small className="text-white/70">Elige el sabor:</small>

      <div className="flex flex-col gap-2 p-2">
        {flavors.map((flavor, index) => (
          <button
            className="px-4 py-2 rounded-md outline-2 outline-brand-1 transition-colors "
            onClick={() => selectFlavor(flavor, prodId)}
            style={{
              backgroundColor: isSelectedFlavor(flavor, prodId)
                ? "var(--color-brand-1)"
                : "transparent",
            }}
            key={index}
          >
            {flavor}
          </button>
        ))}
      </div>
    </div>
  );
}
