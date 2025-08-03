import Link from "next/link";
import { ImageView } from "@/components";

export function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-1.5">
        <ImageView
          src="/icons/logo.png"
          alt="logo"
          width={84}
          height={60}
          className="w-10 h-7 lg:w-20 lg:h-16"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-brand-1 font-normal p-0">LOGO</h1>
          <span className="text-[5px] lg:text-xs">MART & GROCERY</span>
        </div>
      </div>
    </Link>
  );
}
