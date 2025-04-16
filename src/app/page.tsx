import Image from "next/image";
import Logo from "@assets/DAF-LOGO-2.svg";
import Link from "next/link";
export default function Home() {
  return (
    <section className="grid place-items-center gap-5 pt-20">
      <div className="flex flex-row items-center">
        <h1
          style={{ textShadow: "-1px 1.5px 18px var(--color-brand-1)" }}
          className="text-7xl font-brand-1 italic text-brand-1 contrast-150 animate-slide_in"
        >
          Drink & <br /> Forget
        </h1>

        <Image
          src={Logo}
          alt="Logotipo oficial Drink and Forget."
          style={{ filter: "drop-shadow(0 10px 10px var(--color-brand-1))" }}
          className="animate-neon-infinite max-w-[200px]"
        />
      </div>

      <h2 className="font-brand-2 text-2xl text-white/80">
        Cada trago es un nuevo comienzo
      </h2>

      <div className="flex items-center gap-4">
        <Link
          href="/combos"
          className="px-4 py-2 rounded-md font-brand-2  animate-neon-infinite  hover:animate-none"
        >
          VER COMBOS
        </Link>
        <Link
          href="/products"
          className="px-4 py-2 rounded-md font-brand-2  animate-neon-infinite  hover:animate-none"
        >
          VER PRODUCTOS
        </Link>
      </div>
    </section>
  );
}
