import {
  Accordion,
  IconBox,
  ImageView,
  LoginModal,
  Logo,
  RegisterModal,
} from "@/components";
import Link from "next/link";
import { useState } from "react";

export function Footer() {
  const [showModal, setShowModal] = useState<"login" | "register" | null>(null);

  const onCloseHandler = () => {
    setShowModal(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="container mt-16 grid">
      {showModal === "login" && (
        <LoginModal setShowModal={setShowModal} onClose={onCloseHandler} />
      )}
      {showModal === "register" && <RegisterModal onClose={onCloseHandler} />}
      <div className="container mt-8 mb-16 lg:mt-[75px]">
        <div
          className="relative overflow-hidden rounded-xl"
          onClick={() => setShowModal("login")}
        >
          {/* <!-- Background --> */}
          <div className="absolute inset-0 -z-1 h-full bg-[url(/images/hero-bg.png)] bg-cover bg-center bg-no-repeat opacity-10"></div>
          <div className="absolute inset-0 -z-2 h-full bg-[#d8f4e4] opacity-80"></div>
          {/* <!-- -------- --> */}
          <div className="flex">
            <div className="flex max-w-2/3 flex-col gap-10 p-3 text-heading md:p-16 lg:max-w-1/2">
              <h3 className="text-xl lg:text-5xl">
                Stay home & get your daily needs from our shop
              </h3>
              <p className="hidden md:inline lg:text-2xl">
                Start Your Daily Shopping with Nest Mart
              </p>
            </div>

            <div className="relative ml-auto flex">
              <ImageView
                wrapperClassName="w-fit h-fit mt-auto"
                src="/images/delivery-guy.png"
                alt="delivery guy"
                width={415}
                height={359}
              />
              <ImageView
                wrapperClassName="hidden lg:block absolute top-8"
                src="/images/hero-cucumber.png"
                alt=""
                width={172}
                height={172}
              />
              <ImageView
                wrapperClassName="hidden lg:block absolute top-36 w-[172px] -translate-x-20"
                src="/images/hero-onion.png"
                alt=""
                width={172}
                height={172}
              />
              <ImageView
                wrapperClassName="hidden lg:block absolute bottom-0 -translate-x-44 w-[172px]"
                src="/images/hero-pepper.png"
                alt=""
                width={172}
                height={172}
              />
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 xl:justify-items-center">
        <div className="flex max-w-80 flex-col gap-3 pb-8 lg:border-0">
          <Logo />
          <p className="mb-2" onClick={() => setShowModal("register")}>
            Pellentesque posuere orci lobortis
          </p>
          <address className="flex flex-col gap-2.5 font-lato not-italic">
            <div className="flex gap-2">
              <span className="fi-rs-marker mt-0.5 h-4 text-brand-1"></span>
              <div>
                <span className="font-bold">Address:</span>
                <span className="" aria-label="address">
                  5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </span>
              </div>
            </div>
            {/* <!-- ----------------- --> */}
            <a className="flex gap-2" href="tel:+91540025124553">
              <span className="fi-rs-headset mt-0.5 h-4 text-brand-1"></span>
              <div>
                <span className="font-bold">Call Us</span>
                <span>(+91) - 540-025-1245553</span>
              </div>
            </a>
            {/* <!-- ------------ --> */}
            <a className="flex gap-2" href="mailto:contact@nestmart.com">
              <span className="fi-rs-paper-plane mt-0.5 h-4 text-brand-1"></span>
              <div>
                <span className="font-bold">Email:</span>
                <span>contact@nestmart.com</span>
              </div>
            </a>
            {/* <!-- ------------ --> */}
            <div className="flex gap-2">
              <span className="fi-rs-time-fast mt-0.5 h-4 text-brand-1"></span>
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
        <Accordion title="Company" className="mt-4" expandOnLargeDisplay>
          <div className="flex flex-col gap-2.5 pb-2 font-lato text-base">
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
        <Accordion title="Information" className="mt-4" expandOnLargeDisplay>
          <div className="flex flex-col gap-2.5 pb-2 font-lato text-base">
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
          <div className="flex w-fit justify-center gap-4">
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
      <button
        onClick={scrollToTop}
        className="ml-auto rounded-full border-2 border-heading p-1"
      >
        <IconBox
          icon="arrow-up"
          className="text-heading"
          size={{ mobile: 20, nonMobile: 20 }}
        />
      </button>
      <div className="mt-1 border-t-[1px] border-border pt-8 text-center font-lato">
        All rights reserved
      </div>
    </footer>
  );
}
