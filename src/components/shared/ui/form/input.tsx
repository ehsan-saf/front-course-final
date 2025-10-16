import { InputHTMLAttributes, useId } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { ErrorMessage } from "./errorMessage";
import clsx from "clsx";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  label?: string;
  placeholder?: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

export function Input({
  type = "text",
  placeholder,
  label,
  register,
  error,
  ...props
}: Props) {
  const id = useId();

  return (
    <div>
      <div className="flex flex-col gap-2">
        {label && <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={clsx(
            "rounded-md border-1 border-border bg-white px-4 py-2 placeholder:font-lato placeholder:text-text-muted md:px-6 md:py-3",
            error
              ? "outline-red-600 focus:outline-1"
              : "focus:outline-1 focus:outline-blue-600",
          )}
          {...props}
          {...register}
        />
      </div>
      <ErrorMessage error={error} />
    </div>
  );
}
