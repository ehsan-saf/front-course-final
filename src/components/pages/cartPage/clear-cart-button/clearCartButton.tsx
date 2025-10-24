import { IconBox } from "@/components/shared";

interface Props {
  onClick: () => void;
}

export function ClearCartButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex cursor-pointer items-center gap-2 text-text-muted"
    >
      <IconBox icon="trash-2" />
      <span>Clear Cart</span>
    </button>
  );
}
