import PageSubtitle from "@components/page-subtitle";
import ProductCard from "@components/product-card";
import mock from "@mock.json";
export default function Products() {
  const individuals = mock.filter((prod) => prod.category === "individual");
  return (
    <section className="flex flex-col items-center gap-5 ">
      <PageSubtitle>Individuales</PageSubtitle>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-3 py-3">
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
