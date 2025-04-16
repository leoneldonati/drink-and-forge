import ProductCard from "@components/product-card";
import mock from "@mock.json";
export default function CombosPage() {
  const combos = mock.filter((prod) => prod.category === "combo");
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-2xl md:text-4xl font-brand-2 animate-slide_in">
        Combos para vos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 place-items-center gap-3">
        {combos.map((combo) => (
          <ProductCard
            product={{ ...combo, created_at: new Date(combo.created_at) }}
            key={combo._id}
          />
        ))}
      </div>
    </section>
  );
}
