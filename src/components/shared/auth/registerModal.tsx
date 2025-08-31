import { registerApiCall } from "@/api/auth";
import { Input, Modal } from "@/components";
import { useModal } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Schema, z } from "zod";

const schema = z.object({
  username: z.string().min(1, "Please enter your username"),
  email: z.email({ error: "Enter a valid email" }),
  password: z
    .string("Please enter your password")
    .min(8, "Password must be at least 8 characters"),
});

type FormDataType = z.infer<typeof schema>;

export function RegisterModal() {
  const { closeModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
  });

  const registerMutation = useMutation({ mutationFn: registerApiCall });

  const onSubmit = (data: FormDataType) => {
    console.log(data);

    registerMutation.mutate(data, {
      onSuccess: (response) => {
        console.log("Response :", response);
      },
    });
  };

  return (
    <Modal title="register" onClose={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-7">
          <Input
            register={register("username")}
            label="Username"
            placeholder="your username"
            error={errors.username}
          />
          <Input
            type="email"
            register={register("email")}
            label="Email"
            placeholder="you@mail.com"
            error={errors.email}
          />
          <Input
            type="password"
            register={register("password")}
            label="Password"
            placeholder="your password (must be atleast 8 characters)"
            error={errors.password}
          />
          <button className="cursor-pointer self-stretch rounded-md bg-green-600 px-4 py-1 text-gray-50 hover:bg-green-700 md:self-start">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
}
