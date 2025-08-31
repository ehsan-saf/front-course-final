import { FieldError } from "react-hook-form";

interface Props {
  error?: FieldError;
}

export function ErrorMessage({ error }: Props) {
  if (!error) return null;
  return <span className="text-sm text-red-500">{error.message}</span>;
}
