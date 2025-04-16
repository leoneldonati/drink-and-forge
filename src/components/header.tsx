import AsideMenu from "./ui/aside-menu";
import CartButton from "./ui/cart-button";

export default function Header() {
  return (
    <header className="flex justify-between  p-3">
      <AsideMenu />
      <CartButton />
    </header>
  );
}
