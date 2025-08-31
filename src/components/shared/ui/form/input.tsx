import { HTMLInputTypeAttribute, useId } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  type?: HTMLInputTypeAttribute;
  label?: string;
  register: UseFormRegisterReturn<string>;
}

export function Input({ type = "text", label, register }: Props) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        placeholder="enter your email"
        className="rounded-md bg-white p-2 focus:outline-1 focus:outline-blue-600"
        {...register}
      />
    </div>
  );
}
