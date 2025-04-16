import ProductCard from "@components/product-card";
import mock from "@mock.json";
import Image from "next/image";
import Logo from "@assets/DAF-LOGO-2.svg";
export default function Home() {
  return (
    <section className="grid place-items-center gap-5">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-center w-full">
        {mock.map((product) => (
          <ProductCard
            key={product._id}
            product={{ ...product, created_at: new Date(product.created_at) }}
          />
        ))}
      </div>
    </section>
  );
}
