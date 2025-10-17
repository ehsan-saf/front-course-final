import { AccountTabs, IconBox } from "@/components";
import { useUser } from "@/store";
import Link from "next/link";

interface Props {}

export default function Page({}: Props) {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="flex flex-col items-center gap-2">
        <p>You're not logged in</p>
        <Link
          href="/account/log-in"
          className="rounded-md bg-green-600 px-3 py-2 text-white"
        >
          Log in
        </Link>
        <p>OR</p>
        <Link
          href="/account/sign-up"
          className="rounded-md bg-sky-600 px-3 py-2 text-white"
        >
          Sign up
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-24">
      <div className="flex flex-col justify-center gap-16 md:flex-row">
        <nav className="max-w-svw flex-1 text-body md:max-w-80">
          <AccountTabs />
        </nav>
        {/* Orders List */}
        <div className="mt-3 flex-1">
          <h2 className="mb-5 text-2xl">Your Orders</h2>
          <table>
            <thead>
              <tr className="bg-muted">
                <th scope="col" className="rounded-l-2xl px-4 py-2 text-start">
                  Order ID
                </th>
                <th scope="col" className="px-4 py-2 text-start">
                  Date
                </th>
                <th scope="col" className="px-4 py-2 text-start">
                  Status
                </th>
                <th scope="col" className="px-4 py-2 text-start">
                  Total
                </th>
                <th scope="col" className="rounded-r-2xl px-4 py-2 text-start">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="font-lato">
              <tr>
                <td className="px-4 pt-[30px]">#1357</td>
                <td className="px-4 pt-[30px]">March 15, 2021</td>
                <td className="px-4 pt-[30px]">Processing</td>
                <td className="px-4 pt-[30px]">Total</td>
                <td className="px-4 pt-[30px]">View</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
