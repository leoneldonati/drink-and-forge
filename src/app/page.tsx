import ProductCard from "@components/product-card";
import mock from "@mock.json";
import { IconArrowDownDashed } from "@tabler/icons-react";
export default function Home() {
  return (
    <section className="grid place-items-center">
      <h1
        style={{ textShadow: "-1px 1.5px 8px var(--color-brand-1)" }}
        className="text-6xl font-brand-1 italic bg-gradient-to-r from-brand-1 to-brand-1/70 text-transparent bg-clip-text contrast-150"
      >
        Drink & <br /> Forget
      </h1>

      <h2 className="font-brand-2 text-xl">Cada trago es un nuevo comienzo</h2>

      <div className="w-full">
        <p className="text-2xl mb-5 font-brand-2 animate-neon-infinite flex items-center gap-1 justify-center">
          Para vos <IconArrowDownDashed />
        </p>

        <div className="grid grid-cols-3 gap-3">
          {mock.map((product) => (
            <ProductCard
              key={product._id}
              product={{ ...product, created_at: new Date(product.created_at) }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
