import Logo from "@components/logo";
import LogoDesktop from "@components/logo-desktop";
import Link from "next/link";
export default function Home() {
  return (
    <section className="flex flex-col flex-grow justify-center items-center gap-5">
      <div className="md:max-w-[750px] w-full max-w-[300px]">
        <Logo />

        <LogoDesktop />
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
