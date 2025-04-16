import Image from "next/image";
import Logo from "@assets/main.png";
import Logo2 from "@assets/main-2.png";
import Link from "next/link";
export default function Home() {
  return (
    <section className="grid place-items-center gap-5 pt-20">
      <div className="flex flex-col md:flex-row items-center">
        <Image
          src={Logo}
          alt="Logotipo oficial Drink and Forget."
          style={{ filter: "drop-shadow(0 10px 10px var(--color-brand-1))" }}
          className="animate-neon-infinite max-w-[260px] md:hidden"
        />

        <Image
          src={Logo2}
          alt="Logotipo oficial Drink and Forget."
          style={{ filter: "drop-shadow(0 10px 10px var(--color-brand-1))" }}
          className="animate-neon-infinite max-w-[660px] md:block hidden"
        />
      </div>

      <h2 className="font-brand-2 md:text-2xl text-white/80">
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
