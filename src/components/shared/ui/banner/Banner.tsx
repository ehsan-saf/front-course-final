import { IconBox, Section } from "@/components";
import { ImageView } from "@/components";
import { FormEvent } from "react";

interface Props {
  title: string;
  subtitle: string;
  bgImage: string;
  image: string;
}

export function Banner({ title, subtitle, bgImage, image }: Props) {
  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="relative flex items-center justify-between overflow-hidden rounded-lg pt-5 pb-4 pl-2 md:pb-16 md:pl-24">
        <div className="relative z-1 flex flex-col">
          <h2 className="md:text-3xl xl:text-4xl 2xl:text-7xl">{title}</h2>
          <p className="mt-8 hidden font-lato text-xl text-body md:block xl:text-2xl">
            {subtitle}
          </p>
          {/* <!-- ----- Desktop subscribe form ----- --> */}
          <form action="" className="mt-14 hidden lg:block">
            <div className="flex rounded-4xl bg-white pl-3">
              <IconBox
                icon="send"
                size={{ mobile: 16, nonMobile: 16 }}
                className="mr-2 self-center pt-0.5 text-body"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Your email address"
                className="flex-3 rounded-4xl border-none p-2.5 font-lato"
              />
              <button
                onClick={handleSubscribe}
                className="ml-auto flex-1 rounded-4xl bg-brand-1 px-2 text-sm text-white"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div
          className={`bg-no-repeat" absolute inset-0 h-full bg-cover bg-center opacity-10`}
          style={{
            backgroundImage: `url(/images/${bgImage})`,
          }}
        />
        <div className="absolute inset-0 h-full bg-[#FDC04033] opacity-80"></div>
        <ImageView
          src={`/images/${image}`}
          alt=""
          width={878}
          height={538}
          wrapperClassName="right-0 ml-auto max-w-1/2"
        />
      </div>
      {/* Mobile subscribe form  */}
      <form className="mt-4 lg:hidden">
        <div className="flex rounded-4xl bg-muted pl-3">
          <IconBox
            icon="send"
            size={{ mobile: 16, nonMobile: 16 }}
            className="mr-2 self-center pt-0.5"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Your email address"
            className="w-[50%] rounded-4xl border-none p-1.5 font-lato placeholder:text-xs md:w-full md:p-2.5 md:placeholder:text-base"
          />
          <button
            onClick={handleSubscribe}
            className="ml-auto w-[25%] rounded-4xl bg-brand-1 px-1 text-xs text-white md:px-2 md:text-sm"
          >
            Subscribe
          </button>
        </div>
      </form>
    </>
  );
}
