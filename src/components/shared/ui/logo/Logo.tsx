import Link from "next/link";
import { ImageView } from "@/components";

export function Logo() {
  return (
    <Link href="/" className="w-fit">
      <div className="flex items-center gap-1.5">
        <ImageView
          src="/icons/logo.png"
          alt="logo"
          width={84}
          height={60}
          wrapperClassName="h-7 w-10 lg:h-16 lg:w-20"
        />
        <div className="flex flex-col items-center">
          <h1 className="p-0 font-normal text-brand-1">LOGO</h1>
          <span className="text-[5px] lg:text-xs">MART & GROCERY</span>
        </div>
      </div>
    </Link>
  );
}
