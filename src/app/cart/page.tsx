import SendOrderButton from "@components/send-order";
import CartCounter from "@components/ui/cart-counter";
import CartFeed from "@components/ui/cart-feed";
import DeleteCartButton from "@components/ui/delete-cart-button";

export default function Page() {
  return (
    <section className="flex flex-col gap-5 w-full">
      <div className="flex  w-full justify-center gap-5 items-center flex-col md:flex-row bg-brand-1 p-4 rounded-md">
        <CartCounter />

        <DeleteCartButton />

        <SendOrderButton />
      </div>

      <CartFeed />
    </section>
  );
}
