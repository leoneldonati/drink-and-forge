import Logo from "@components/logo";
import LogoDesktop from "@components/logo-desktop";
import Image from "next/image";
import Link from "next/link";
import waves from "@assets/waves.avif";
import bottle from "@assets/bottle.avif";
import bottleLeft from "@assets/bottle-left.avif";
import Carousel from "@components/ui/carousel";
import carousel_1 from "@assets/carousel/op1.png";
import carousel_2 from "@assets/carousel/op2.png";
import carousel_3 from "@assets/carousel/op3.png";
export default function Home() {
  const assets = [carousel_1, carousel_2, carousel_3];
  return (
    <section className="flex flex-col flex-grow justify-center items-center gap-5 overflow-hidden">
      <Carousel assets={assets} />
      <div className="md:max-w-[750px] w-full max-w-[300px]">
        <Logo />

        <LogoDesktop />
      </div>

      <div className="flex  items-center justify-center gap-4  relative">
        <Image
          src={bottle}
          alt=""
          className="absolute z-20 -top-20 -left-10 animate-bottle size-24"
        />
        <Link
          href="/combos"
          className=" rounded-md font-brand-2 font-bold relative overflow-hidden"
        >
          <Image
            src={waves}
            alt=""
            className=" animate-shake animate-duration-[3500ms] w-full absolute h-full"
          />

          <div className="px-4 py-2 bg-brand-1 animate-flip-up animate-duration-[3500ms] animate-ease flex text-yellow-300">
            VER COMBOS
          </div>
        </Link>

        <Image
          src={bottleLeft}
          alt=""
          className="absolute z-20 -top-20 -right-10 animate-bottle-right size-24"
        />
        <Link
          href="/products"
          className=" rounded-md font-brand-2 font-bold relative overflow-hidden"
        >
          <Image
            src={waves}
            alt=""
            className="animate-shake animate-duration-[3500ms] w-full absolute h-full"
          />
          <div className="px-4 py-2 bg-brand-1 animate-flip-up animate-duration-[3500ms] animate-ease flex text-yellow-300">
            VER PRODUCTOS
          </div>
        </Link>
      </div>
    </section>
  );
}
