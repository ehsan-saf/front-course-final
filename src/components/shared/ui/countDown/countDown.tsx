import { twMerge } from "tailwind-merge";

interface Props {
  date?: string;
  className?: string;
}

export function CountDown({ date, className }: Props) {
  return (
    <div className={twMerge("flex justify-center gap-3", className)}>
      <div className="flex h-[60px] w-[60px] flex-col items-center justify-center rounded-md bg-white px-3 py-1">
        <div className="text-[28px] text-brand-1" aria-label="remaining days">
          05
        </div>
        <div className="-mt-3 font-lato text-sm text-body">Days</div>
      </div>
    </div>
  );
}
