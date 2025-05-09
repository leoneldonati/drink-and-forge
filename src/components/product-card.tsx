import Image from "next/image";
import AddCartButton from "./ui/add-cart-button";

interface Props {
  product: Product;
}
export default function ProductCard({ product }: Props) {
  return (
    <article className="max-w-[220px] h-full w-full font-brand-2 p-3 rounded-md outline-2 outline-brand-1 shadow-xl shadow-brand-1/40 flex flex-col items-center justify-between gap-4 backdrop-blur-md bg-black/40">
      <Image
        src={`/products/${product.image}`}
        alt="Fondo blanco"
        width={500}
        height={400}
        className="max-w-50 w-full aspect-square object-contain"
      />
      <p className="h-full uppercase">{product.name}</p>

      <p className="text-xl font-bold">
        $
        {product.price.toLocaleString("ES-AR", {
          currency: "ARS",
          currencySign: "standard",
        })}
      </p>

      <div className="w-full flex flex-col gap-2">
        <AddCartButton product={product} />
      </div>
    </article>
  );
}
