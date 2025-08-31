import { HTMLInputTypeAttribute, useId } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { ErrorMessage } from "./errorMessage";

interface Props {
  type?: HTMLInputTypeAttribute;
  label?: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

export function Input({ type = "text", label, register, error }: Props) {
  const id = useId();

  return (
    <div>
      <div className="flex flex-col gap-2">
        {label && <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          type={type}
          placeholder="enter your email"
          className={
            error
              ? "rounded-md bg-white p-2 outline-red-600 focus:outline-1"
              : "rounded-md bg-white p-2 focus:outline-1 focus:outline-blue-600"
          }
          {...register}
        />
      </div>
      <ErrorMessage error={error} />
    </div>
  );
}
