import { IconBox } from "@/components";
import { useCart } from "@/hooks";
import Link from "next/link";

export default function Page() {
  const { cartItems } = useCart();

  const itemsCount = cartItems.length;

  if (itemsCount < 1) {
    return (
      <div className="mt-16 flex flex-col items-center gap-4">
        <IconBox icon="frown" size={{ mobile: 24, nonMobile: 30 }} />
        <h1 className="text-3xl">You cart is empty</h1>

        <Link href="/" className="flex items-center gap-2.5 text-brand-1">
          Start Shopping{" "}
          <IconBox icon="shopping-cart" size={{ mobile: 24, nonMobile: 30 }} />
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="flex">
        <div>
          <h1 className="text-3xl lg:text-[40px]">Your Cart</h1>
          <div aria-label="number of products in your cart">
            There are <span className="text-brand-1">{itemsCount}</span>{" "}
            products in your cart
          </div>
        </div>
      </div>
    </div>
  );
}
