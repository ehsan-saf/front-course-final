import { LoginApiCall } from "@/api/auth";
import { Input, Modal } from "@/components";
import { useModal, useUser } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const schema = z.object({
  identifier: z.string().min(1, "Please enter your username"),
  password: z.string().min(1, "Please enter your password"),
});

type FormDataType = z.infer<typeof schema>;

export function LoginModal() {
  const { openModal, closeModal } = useModal();

  const { login } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
  });

  const loginMutation = useMutation({ mutationFn: LoginApiCall });

  const onSubmit = (data: FormDataType) => {
    loginMutation.mutate(data, {
      onSuccess: (response) => {
        console.log("response", response);
        login(response.jwt, response.user);
        toast.success("You are loged in");
        closeModal();
      },
    });
  };

  return (
    <Modal title="Login" onClose={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-7">
          <Input
            register={register("identifier")}
            label="Username"
            placeholder="your username"
            error={errors.identifier}
          />
          <Input
            type="password"
            register={register("password")}
            label="Password"
            placeholder="your password (must be atleast 8 characters)"
            error={errors.password}
          />
          <button className="cursor-pointer self-stretch rounded-md bg-green-600 px-4 py-1 text-gray-50 hover:bg-green-700 md:self-start">
            Log in
          </button>
        </div>
      </form>
      <div className="mt-3 text-sm text-gray-600">
        <span>Don&apos;t have an account? </span>
        <button
          onClick={() => openModal("register")}
          className="cursor-pointer hover:text-blue-700"
        >
          Sign up
        </button>
      </div>
    </Modal>
  );
}
