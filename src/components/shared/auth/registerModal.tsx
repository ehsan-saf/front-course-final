import { Modal } from "@/components";
import { useModal } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Span } from "next/dist/trace";
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

  const onSubmit = (data) => {};

  return (
    <Modal title="register" onClose={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <label htmlFor="username">Username* </label>
            <input
              id="username"
              type="text"
              placeholder="enter your username"
              className="rounded-md bg-white p-2 focus:outline-1 focus:outline-blue-600"
            />
            {errors.username && (
              <span className="text-[14px] text-red-600">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              type="email"
              placeholder="enter your email"
              className="rounded-md bg-white p-2 focus:outline-1 focus:outline-blue-600"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password*</label>
            <input
              id="password"
              type="password"
              placeholder="enter your password"
              className="rounded-md bg-white p-2 focus:outline-1 focus:outline-blue-600"
            />
          </div>
          <button className="cursor-pointer self-stretch rounded-md bg-green-600 px-4 py-1 text-gray-50 hover:bg-green-700 md:self-start">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
}
