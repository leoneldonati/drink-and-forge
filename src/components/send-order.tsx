"use client";
import { useCartStore } from "@stores/cart";
import { IconSend } from "@tabler/icons-react";
import { createMessage } from "@utils/messages";

export default function SendOrderButton() {
  const { list } = useCartStore();

  const encodedMessage = createMessage(list);
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_PHONE_NUMBER}&text=${encodedMessage}`}
      rel="noreferrer noopener"
      aria-label="Enviar el pedido a WhatsApp"
      title="Enviar el pedido a WhatsApp"
      className="flex items-center justify-center gap-1 px-4 py-2 rounded-md bg-green-500 "
    >
      <IconSend /> Enviar pedido
    </a>
  );
}
