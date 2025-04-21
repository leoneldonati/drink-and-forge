import PageSubtitle from "@components/page-subtitle";
import ProductCard from "@components/product-card";
import mock from "@mock.json";
export default function CombosPage() {
  const combos = mock.filter((prod) => prod.category === "combo");
  return (
    <section className="flex flex-col items-center gap-5">
      <PageSubtitle>Combos para vos</PageSubtitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-3 py-3">
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
