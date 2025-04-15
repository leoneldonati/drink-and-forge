import { IconSend } from "@tabler/icons-react";

interface Props {
  product: Product;
}
export default function SendOrderButton({ product }: Props) {
  return (
    <a
      href=""
      className="flex items-center justify-center gap-1 px-4 py-2 rounded-md bg-green-500 w-full"
    >
      <IconSend /> Enviar pedido
    </a>
  );
}
