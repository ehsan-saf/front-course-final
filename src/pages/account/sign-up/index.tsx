import { registerApiCall } from "@/api/auth";

import { useMutation } from "@tanstack/react-query";
import { useUser } from "@/store";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { CheckBox, ErrorMessage, Input } from "@/components";

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
              <ErrorMessage error={errors.agree} />
            </div>
            <button className="cursor-pointer self-stretch rounded-xl border-heading bg-heading px-7 py-2 text-white md:self-start md:py-3">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
