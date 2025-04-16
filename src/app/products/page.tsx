import ProductCard from "@components/product-card";
import mock from "@mock.json";
export default function Products() {
  const individuals = mock.filter((prod) => prod.category === "individual");
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-2xl md:text-4xl font-brand-2 animate-slide_in">
        Individuales
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-center w-full">
        {individuals.map((product) => (
          <ProductCard
            key={product._id}
            product={{ ...product, created_at: new Date(product.created_at) }}
          />
        ))}
      </div>
    </section>
  );
}
