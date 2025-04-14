import Link from "next/link";
import CartButton from "./ui/cart-button";

export default function Header() {
  return (
    <header className="flex justify-between p-3">
      <ul className="flex items-center gap-2">
        <li>
          <Link
            href="/"
            className="text-lg font-bold font-brand-2 animate-neon hover:animate-neon-infinite"
            style={{ textShadow: "-1px 1.5px 5px var(--color-brand-1)" }}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="text-lg font-bold font-brand-2 animate-neon hover:animate-neon-infinite"
            style={{ textShadow: "-1px 1.5px 5px var(--color-brand-1)" }}
          >
            Productos
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-lg font-bold font-brand-2 animate-neon hover:animate-neon-infinite"
            style={{ textShadow: "-1px 1.5px 5px var(--color-brand-1)" }}
          >
            Conócenos
          </Link>
        </li>
      </ul>

      <CartButton />
    </header>
  );
}
