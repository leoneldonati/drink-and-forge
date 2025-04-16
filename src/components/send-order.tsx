import { IconSend } from "@tabler/icons-react";
import { createMessage } from "@utils/messages";

interface Props {
  product: Product;
}
export default function SendOrderButton({ product }: Props) {
  const encodedMessage = createMessage(product);
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${process.env.PHONE_NUMBER}&text=${encodedMessage}`}
      rel="noreferrer noopener"
      aria-label="Enviar el pedido a WhatsApp"
      title="Enviar el pedido a WhatsApp"
      className="flex items-center justify-center gap-1 px-4 py-2 rounded-md bg-green-500 w-full"
    >
      <IconSend /> Enviar pedido
    </a>
  );
}
