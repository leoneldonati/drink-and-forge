import SendOrderButton from "@components/send-order";
import CartCounter from "@components/ui/cart-counter";
import CartFeed from "@components/ui/cart-feed";
import DeleteCartButton from "@components/ui/delete-cart-button";

export default function Page() {
  return (
    <section className="flex flex-col gap-5">
      <h3 className="text-4xl font-brand-2 text-center  animate-neon">
        Carrito
      </h3>

      <div className="flex justify-center gap-5 items-center flex-col md:flex-row">
        <CartCounter />

        <DeleteCartButton />

        <SendOrderButton />
      </div>

      <CartFeed />
    </section>
  );
}
