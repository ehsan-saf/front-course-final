import { Accordion, ImageView, Logo } from "@/components/shared";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="container mt-16">
      <div className="flex flex-col lg:flex-row justify-between pb-8">
        <div className="max-w-80 flex flex-col gap-3 pb-8 border-b-[1px] border-border lg:border-0">
          <div className="flex items-center gap-1.5">
            <Logo />
            <div className="flex flex-col items-start">
              <h2 className="text-brand-1 font-normal p-0">LOGO</h2>
              <span className="text-[8px]">MART & GROCERY</span>
            </div>
          </div>
          <p className="mb-2">Pellentesque posuere orci lobortis</p>
          <address className="flex flex-col gap-2.5 font-lato not-italic">
            <div className="flex gap-2">
              <span className="fi-rs-marker h-4 mt-0.5 text-brand-1"></span>
              <div>
                <span className="font-bold">Address:</span>
                <span className="" aria-label="address">
                  5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </span>
              </div>
            </div>
            {/* <!-- ----------------- --> */}
            <a className="flex gap-2" href="tel:+91540025124553">
              <span className="fi-rs-headset h-4 mt-0.5 text-brand-1"></span>
              <div>
                <span className="font-bold">Call Us</span>
                <span>(+91) - 540-025-1245553</span>
              </div>
            </a>
            {/* <!-- ------------ --> */}
            <a className="flex gap-2" href="mailto:contact@nestmart.com">
              <span className="fi-rs-paper-plane h-4 mt-0.5 text-brand-1"></span>
              <div>
                <span className="font-bold">Email:</span>
                <span>contact@nestmart.com</span>
              </div>
            </a>
            {/* <!-- ------------ --> */}
            <div className="flex gap-2">
              <span className="fi-rs-time-fast h-4 mt-0.5 text-brand-1"></span>
              <div>
                <span className="font-bold">Hours:</span>
                <span className="" aria-label="address">
                  10:00 - 18:00, Mon - Sat
                </span>
              </div>
            </div>
            {/* <!-- ----------- --> */}
          </address>
        </div>
        {/* <!-- ----------- --> */}
        <Accordion title="Company" className="mt-4">
          <div className="flex flex-col gap-2.5 font-lato text-base">
            <Link href="#">About Us</Link>
            <Link href="#">Delivery Information</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Support Center</Link>
            <Link href="#">Careers</Link>
          </div>
        </Accordion>
        {/* <!-- ----------- --> */}
        <Accordion title="Information" className="mt-4">
          <div className="flex flex-col gap-2.5 font-lato text-base">
            <Link href="#">Search Terms</Link>
            <Link href="#">Advanced Search</Link>
            <Link href="#">Help & FAQ&apos;s</Link>
            <Link href="#">Store Location</Link>
            <Link href="#">Orders & Returns</Link>
            <Link href="#">Feedback for us</Link>
          </div>
        </Accordion>
        {/* <!-- ------------- --> */}
        <div className="flex flex-col gap-4 pt-4">
          <h4>App & Payment</h4>
          <p className="font-lato text-sm text-body">
            Install NetMart App from App Store or Google Play
          </p>
          <div className="flex justify-center lg:justify-between gap-4">
            <Link
              href="#"
              aria-label="Download NetMart app from app store on iphone"
            >
              <ImageView src="/images/app-store.png" width={120} height={38} />
            </Link>
            <Link
              href="#"
              aria-label="Download NetMart app from play store on android"
            >
              <ImageView src="/images/play-store.png" width={120} height={38} />
            </Link>
          </div>
          <p className="font-lato text-sm text-body">
            Secured Payment Gateways
          </p>
          <ImageView
            src="/images/payment-methods.png"
            alt="payment methods"
            width={220}
            height={32}
          />
        </div>
        {/* <!-- ------------ --> */}
      </div>
      <div className="pt-8 border-t-[1px] border-border text-center">
        All rights reserved
      </div>
    </footer>
  );
}
