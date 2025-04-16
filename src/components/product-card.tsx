import Image from "next/image";
import AddCartButton from "./ui/add-cart-button";

interface Props {
  product: Product;
}
export default function ProductCard({ product }: Props) {
  return (
    <article className="max-w-[380px] h-full w-full font-brand-2 p-3 rounded-md outline-2 outline-brand-1 shadow-xl shadow-brand-1/40 flex flex-col items-center justify-between backdrop-blur-md">
      <Image
        src={`/products/${product.image}`}
        alt=""
        width={500}
        height={400}
        className="max-w-40 aspect-square object-contain"
      />
      <p className="h-full">{product.name}</p>

      <p className="text-xl">${product.price}</p>

      <div className="w-full flex flex-col gap-2">
        <AddCartButton product={product} />
      </div>
    </article>
  );
}
