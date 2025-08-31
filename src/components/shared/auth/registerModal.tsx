import { Input, Modal } from "@/components";
import { useModal } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  username: z.string({ error: "Please enter your username" }),
  email: z.email({ error: "Enter a valid email" }),
  password: z
    .string("Please enter your password")
    .min(2, "Enter atleast 2 characters"),
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal title="register" onClose={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-7">
          <Input register={register("username")} label="Username" />
          <Input register={register("email")} label="Email" type="email" />
          <Input
            register={register("password")}
            label="Password"
            type="password"
          />
          <button className="cursor-pointer self-stretch rounded-md bg-green-600 px-4 py-1 text-gray-50 hover:bg-green-700 md:self-start">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
}
