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

  return <div>{}</div>;
}
