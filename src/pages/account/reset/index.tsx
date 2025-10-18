import { ImageView, Input } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    password: z
      .string("Please enter your password")
      .min(1, "Enter your passoword"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormDataType = z.infer<typeof schema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {};

  return (
    <div className="container mt-10 max-w-lg">
      <div>
        <ImageView
          src="/images/reset-password.png"
          width={85}
          height={95}
          wrapperClassName="hidden md:block"
        />
        <h1 className="mt-9 mb-3 text-xl md:text-3xl lg:text-5xl">
          Forgot your password?
        </h1>
        <p className="mb-6 font-lato text-sm text-body">
          Not to worry, we got you! Let’s get you a new password. Please enter
          your email address or your Username.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <Input
              register={register("password")}
              placeholder="Password"
              error={errors.password}
            />
            <Input
              register={register("confirmPassword")}
              placeholder="Confirm your password"
              error={errors.confirmPassword}
            />
            <button className="cursor-pointer self-stretch rounded-xl border-heading bg-heading px-7 py-2 text-white md:self-start md:py-3">
              Set new password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
