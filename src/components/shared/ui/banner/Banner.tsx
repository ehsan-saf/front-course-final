import { ErrorMessage, IconBox } from "@/components";
import { ImageView } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

interface Props {
  title: string;
  subtitle: string;
  bgImage: string;
  image: string;
}

const scheme = z.object({
  email: z.email("Enter a valid email !"),
});

type FormDataType = z.infer<typeof scheme>;

export function Banner({ title, subtitle, bgImage, image }: Props) {
  const desktopForm = useForm<FormDataType>({
    mode: "onChange",
    resolver: zodResolver(scheme),
  });

  const mobileForm = useForm<FormDataType>({
    mode: "onChange",
    resolver: zodResolver(scheme),
  });

  const handleSubscribe = (data: FormDataType) => {
    desktopForm.reset();
    mobileForm.reset();
    toast.success("Subscribed !");
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
          <form
            action=""
            onSubmit={desktopForm.handleSubmit(handleSubscribe)}
            className="mt-14 hidden lg:block"
          >
            <div className="flex rounded-4xl bg-white pl-3">
              <IconBox
                icon="send"
                size={{ mobile: 16, nonMobile: 16 }}
                className="mr-2 self-center pt-0.5 text-body"
              />
              <input
                type="text"
                {...desktopForm.register("email")}
                placeholder="Your email address"
                className="flex-3 rounded-4xl border-none p-2.5 font-lato"
              />
              <button className="ml-auto flex-1 rounded-4xl bg-brand-1 px-2 text-sm text-white">
                Subscribe
              </button>
            </div>
            <div className="h-4">
              {
                <ErrorMessage
                  error={
                    desktopForm.formState.errors.email &&
                    desktopForm.watch("email")
                      ? desktopForm.formState.errors.email
                      : undefined
                  }
                />
              }
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
      <form
        onSubmit={mobileForm.handleSubmit(handleSubscribe)}
        className="mt-4 lg:hidden"
      >
        <div className="flex rounded-4xl bg-muted pl-3">
          <IconBox
            icon="send"
            size={{ mobile: 16, nonMobile: 16 }}
            className="mr-2 self-center pt-0.5"
          />
          <input
            type="text"
            {...mobileForm.register("email")}
            placeholder="Your email address"
            className="w-[50%] rounded-4xl border-none p-1.5 font-lato placeholder:text-xs md:w-full md:p-2.5 md:placeholder:text-base"
          />
          <button className="ml-auto w-[25%] rounded-4xl bg-brand-1 px-1 text-xs text-white md:px-2 md:text-sm">
            Subscribe
          </button>
        </div>
        <div className="h-4">
          <ErrorMessage
            error={
              mobileForm.formState.errors.email && mobileForm.watch("email")
                ? mobileForm.formState.errors.email
                : undefined
            }
          />
        </div>
      </form>
    </>
  );
}
