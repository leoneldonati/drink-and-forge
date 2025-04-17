import Image from "next/image";
import Logo from "@assets/mobile-logo.png";
import Logo2 from "@assets/desktop-logo.svg";
import Link from "next/link";
export default function Home() {
  return (
    <section className="flex flex-col flex-grow justify-center items-center gap-5">
      <div className="flex flex-col md:flex-row items-center animate-from-center  rounded-md backdrop-blur-[20px]  p-2">
        <Image
          src={Logo}
          alt="Logotipo oficial Drink and Forget."
          style={{ filter: "drop-shadow(0 10px 20px #fff)" }}
          className="animate-neon-infinite max-w-[260px] md:hidden"
        />

        <Image
          src={Logo2}
          alt="Logotipo oficial Drink and Forget."
          style={{ filter: "drop-shadow(0 10px 20px #fff)" }}
          className="animate-neon-infinite w-[900px]  md:block hidden text-brand-1"
        />
      </div>

      <div className="flex items-center gap-4 animate-slide_in">
        <Link
          href="/combos"
          className="px-4 py-2 rounded-md font-brand-2  animate-neon bg-pink-700 text-white font-bold"
        >
          VER COMBOS
        </Link>
        <Link
          href="/products"
          className="px-4 py-2 rounded-md font-brand-2  animate-neon bg-pink-700 text-white font-bold"
        >
          VER PRODUCTOS
        </Link>
      </div>
    </section>
  );
}
