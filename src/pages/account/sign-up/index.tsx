import { registerApiCall } from "@/api/auth";

import { useMutation } from "@tanstack/react-query";
import { useUser } from "@/store";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  CheckBox,
  ErrorMessage,
  IconBox,
  ImageView,
  Input,
  Modal,
} from "@/components";
import { useState } from "react";
import Link from "next/link";
const schema = z
  .object({
    username: z.string().min(1, "Please enter your username"),
    email: z.email({ error: "Enter a valid email" }),
    password: z
      .string("Please enter your password")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Please confirm your password"),
    agree: z
      .boolean()
      .refine((val) => val === true, "You must agree to continue"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormDataType = z.infer<typeof schema>;

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { login } = useUser();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
    defaultValues: { agree: false },
  });

  const registerMutation = useMutation({ mutationFn: registerApiCall });

  const onSubmit = (data: FormDataType) => {
    registerMutation.mutate(data, {
      onSuccess: (response) => {
        console.log("Response :", response);
        login(response.jwt, response.user);
        toast.success("Signed up and Loged in");
      },
    });
  };
  return (
    <div className="container mt-10">
      <div className="flex justify-center gap-24">
        <div className="max-w-lg">
          <div className="mb-4 md:mb-10">
            <h1 className="mb-1 text-xl md:text-3xl lg:text-5xl">
              Create an Account
            </h1>

            <p className="font-lato text-xs text-text-muted">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-7">
              <Input
                register={register("username")}
                placeholder="your username"
                error={errors.username}
              />
              <Input
                type="email"
                register={register("email")}
                placeholder="you@mail.com"
                error={errors.email}
              />
              <Input
                type="password"
                register={register("password")}
                placeholder="your password (must be atleast 8 characters)"
                error={errors.password}
              />
              <Input
                type="password"
                register={register("confirmPassword")}
                placeholder="confirm your password"
                error={errors.confirmPassword}
              />
              <div>
                <div className="flex justify-between">
                  <Controller
                    name="agree"
                    control={control}
                    render={({ field }) => (
                      <CheckBox
                        name="I agree to terms & Policy"
                        isChecked={field.value}
                        changeChecked={() => field.onChange(!field.value)}
                      />
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="cursor-pointer font-lato text-text-muted"
                  >
                    Learn more
                  </button>
                  {isModalOpen && (
                    <Modal onClose={() => setIsModalOpen(false)}>
                      <div className="font-lato">
                        <h2 className="font-bold">Terms & Conditions</h2>
                        <p>
                          Welcome to our shop. By using this website you agree
                          to these terms.
                        </p>
                        <ul className="list-disc pl-8">
                          <li>
                            We sell products online and may update listings or
                            prices without notice.
                          </li>
                          <li>
                            Orders are confirmed after full payment; we may
                            cancel orders for any reason.
                          </li>
                          <li>
                            Shipping times are estimates; we are not responsible
                            for carrier delays or wrong addresses.
                          </li>
                          <li>
                            Returns accepted within <code>7</code> days for
                            unused items in original packaging.
                          </li>
                          <li>
                            Website content and assets belong to we and may not
                            be copied without permission.
                          </li>
                          <li>
                            We are not liable for indirect or incidental damages
                            arising from use of the site or products.
                          </li>
                          <li>
                            These Terms are governed by the laws of United
                            States Of America.
                          </li>
                        </ul>
                        <h2 className="font-bold">Privacy Policy</h2>

                        <ul className="list-disc pl-8">
                          <li>
                            We collect basic info (name, email, address, payment
                            details) to process orders.
                          </li>
                          <li>
                            Payment data is handled by our partners; we do not
                            store full card numbers.
                          </li>
                          <li>
                            Cookies may be used to improve browsing and shopping
                            experience.
                          </li>
                          <li>
                            We never sell personal data and only share it with
                            partners necessary for fulfillment.
                          </li>
                        </ul>
                      </div>
                    </Modal>
                  )}
                </div>
                <ErrorMessage error={errors.agree} />
              </div>
              <div>
                <p className="mb-3 text-sm">
                  Already have an account ?{" "}
                  <Link
                    className="rounded-xl text-brand-1"
                    href="/account/log-in"
                  >
                    Log in
                  </Link>
                </p>
                <button className="cursor-pointer self-stretch rounded-xl border-heading bg-heading px-7 py-2 text-white md:self-start md:py-3">
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden flex-col gap-5 self-start rounded-[15px] border border-border p-12 lg:flex">
          <button className="flex cursor-pointer items-center gap-3.5 rounded-[15px] bg-[#1877F2] px-6 py-4 text-white">
            <IconBox icon="facebook" size={{ mobile: 24, nonMobile: 24 }} />
            <span>Continue with Facebook</span>
          </button>
          <button className="flex cursor-pointer items-center gap-3.5 rounded-[15px] px-6 py-4 text-body shadow">
            <ImageView src="/icons/google-icon.svg" width={24} height={24} />
            <span>Continue with Google</span>
          </button>
          <button className="flex cursor-pointer items-center gap-3.5 rounded-[15px] bg-black px-6 py-4 text-white shadow">
            <ImageView src="/icons/apple-icon.svg" width={24} height={24} />
            <span>Continue with apple</span>
          </button>
        </div>
      </div>
    </div>
  );
}
