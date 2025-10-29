import { loginApiCall } from "@/api/auth";
import { ImageView, Input } from "@/components";
import { useCart } from "@/hooks";
import { useUser } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/router";

const schema = z.object({
  identifier: z.string().min(1, "Please enter your username"),
  password: z.string().min(1, "Please enter your password"),
});

type FormDataType = z.infer<typeof schema>;

export default function Page() {
  const router = useRouter();
  const { uuid2User } = useCart();
  const { login } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
  });

  const loginMutation = useMutation({ mutationFn: loginApiCall });

  const onSubmit = (data: FormDataType) => {
    loginMutation.mutate(data, {
      onSuccess: (response) => {
        login(response.jwt, response.user);
        uuid2User();
        router.replace("/account");
      },
    });
  };

  return (
    <div className="container mt-10">
      <div className="flex justify-center gap-14">
        <ImageView
          src="/images/log-in-image.jpg"
          wrapperClassName="hidden overflow-hidden rounded-2xl lg:block max-w-[500px] max-h-[590px]"
          width={867}
          height={1300}
        />
        <div className="max-w-lg flex-1 self-center">
          <div className="mb-4 md:mb-10">
            <h1 className="mb-1 text-xl md:text-3xl lg:text-5xl">Login</h1>
            <p className="font-lato text-sm text-text-muted">
              {"Don't have an account?"}
              <Link href="/account/sign-up" className="text-brand-1">
                Create here
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <Input
                register={register("identifier")}
                placeholder="Username or Email *"
                error={errors.identifier}
              />
              <Input
                type="password"
                register={register("password")}
                placeholder="Your password *"
                error={errors.password}
              />

              <Link
                href="/account/forget"
                className="w-fit font-lato text-sm text-text-muted"
              >
                Forgot Password?
              </Link>
              <button className="cursor-pointer self-stretch rounded-xl border-heading bg-heading px-7 py-2 text-white md:self-start md:py-3">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
