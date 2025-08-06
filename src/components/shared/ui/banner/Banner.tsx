import { IconBox, Section } from "@/components";
import { ImageView } from "@/components";

interface Props {
  title: string;
  subtitle: string;
  bgImage: string;
  image: string;
}

export function Banner({ title, subtitle, bgImage, image }: Props) {
  return (
    <>
      <div className="relative flex justify-between items-center pt-5 pl-2 pb-4 md:pl-24 md:pb-16 rounded-lg overflow-hidden">
        <div className="relative z-1 flex flex-col">
          <h2 className="md:text-3xl xl:text-4xl 2xl:text-7xl">{title}</h2>
          <p className="hidden md:block mt-8 font-lato text-xl xl:text-2xl text-body">
            {subtitle}
          </p>
          {/* <!-- ----- Desktop subscribe form ----- --> */}
          <form action="" className="hidden md:block mt-14">
            <div className="flex pl-3 bg-white rounded-4xl">
              <IconBox
                icon="send"
                size={{ mobile: 16, nonMobile: 16 }}
                className="mr-2 pt-0.5 self-center"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Your email address"
                className="flex-3 p-2.5 rounded-4xl border-none font-lato"
              />
              <button className="flex-1 ml-auto px-2 rounded-4xl bg-brand-1 text-white text-sm">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div
          className={`absolute inset-0 h-full opacity-10 bg-cover bg-center bg-no-repeat"`}
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
          className="max-w-1/2 ml-auto right-0"
        />
      </div>
      {/* Mobile subscribe form  */}
      <form className="lg:hidden mt-4">
        <div className="flex pl-3 bg-muted rounded-4xl">
          <IconBox
            icon="send"
            size={{ mobile: 16, nonMobile: 16 }}
            className="mr-2 pt-0.5 self-center"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Your email address"
            className="flex-3 p-2.5 rounded-4xl border-none font-lato"
          />
          <button className="flex-1 ml-auto px-2 rounded-4xl bg-brand-1 text-white text-sm">
            Subscribe
          </button>
        </div>
      </form>
    </>
  );
}
