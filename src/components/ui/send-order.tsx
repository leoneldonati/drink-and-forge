"use client";
import { useCartStore } from "@stores/cart";
import { IconBan, IconSend } from "@tabler/icons-react";
import { createMessage } from "@utils/messages";

export default function SendOrderButton() {
  const { list, getFinalPrice, getLength } = useCartStore();

  const encodedMessage = createMessage(list, getFinalPrice());

  const isEmptyCart = getLength() === 0;
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=5493417502479&text=${encodedMessage}`}
      rel="noreferrer noopener"
      aria-label="Enviar el pedido a WhatsApp"
      title="Enviar el pedido a WhatsApp"
      className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white text-brand-1 [&:hover>svg]:rotate-45"
      style={{
        pointerEvents: isEmptyCart ? "none" : "auto",
      }}
    >
      {isEmptyCart ? (
        <IconBan />
      ) : (
        <IconSend className="transition-transform" />
      )}

      {isEmptyCart ? "Carro vacío" : "Enviar pedido"}
    </a>
  );
}
