import { IconBox } from "@/components";
import { useUser } from "@/store";
import Link from "next/link";

export default function Page() {
  const { user } = useUser();

  return (
    <div className="container mt-10">
      <div className="flex">
        <div className="flex-1">
          <div>
            <h1 className="text-2xl md:text-[40px]">Checkout</h1>
            <p>
              There are <span className="mt-5 text-brand-1">3</span> products in
              your cart
            </p>
          </div>
          {/* Log in and Apply coupon */}
          <div className="mt-11 flex flex-1 gap-7">
            <div className="flex-1 rounded-[10px] border border-border p-3 shadow">
              {user ? (
                <div>
                  Hello <span className="text-brand-1">{user.username}</span>!
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center font-lato lg:flex-row lg:gap-2">
                  <IconBox icon="user" />
                  <p className="text-body">Already have an account?</p>
                  <Link href="/log-in" className="text-brand-1">
                    Click here to login
                  </Link>
                </div>
              )}
            </div>
            <div className="flex h-12">
              <input
                placeholder="Coupon Code"
                className="rounded-l-[10px] border border-r-0 border-border px-6 py-3 placeholder:font-lato placeholder:text-text-muted"
              />
              <button className="rounded-r-[10px] bg-heading px-6 py-3.5 text-white">
                Apply Coupon
              </button>
            </div>
          </div>
        </div>
        {/* Order Items */}
      </div>
    </div>
  );
}
