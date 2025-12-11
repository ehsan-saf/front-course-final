import { ImageView } from "@/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mt-6">
      <div className="flex flex-col items-center justify-center gap-5">
        <ImageView
          src="/images/404.png"
          width={684}
          height={260}
          wrapperClassName="max-w-[150px] lg:max-w-[500px]"
        />
        <h1 className="text-3xl lg:text-7xl">Page Not Found</h1>
        <div>
          <p className="text-center text-body">
            The link you clicked may be broken or the page may have been removed
          </p>
          <p className="text-center text-body">
            visit the{" "}
            <Link href="/" className="text-brand-1">
              Homepage
            </Link>{" "}
            or{" "}
            <Link href="/contact-us" className="text-brand-1">
              Contact us
            </Link>{" "}
            about the problem
          </p>
        </div>
      </div>
    </div>
  );
}
