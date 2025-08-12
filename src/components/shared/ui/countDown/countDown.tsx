import { useCallback } from "react";
import { useRemainingTime } from "@/hooks";
import { twMerge } from "tailwind-merge";

interface Props {
  endDate: string;
  className?: string;
}

export function CountDown({ endDate, className }: Props) {
  const { days, hours, minutes, seconds } = useRemainingTime({ endDate });

  const formatTime = useCallback((time: number) => {
    return time.toString().padStart(2, "0");
  }, []);

  return (
    <div className={twMerge("flex justify-center gap-3", className)}>
      <div className="flex h-[60px] w-[60px] flex-col items-center justify-center rounded-md bg-white px-3 py-1">
        <div className="text-[28px] text-brand-1" aria-label="remaining days">
          {formatTime(days)}
        </div>
        <div className="-mt-3 font-lato text-sm text-body">Days</div>
      </div>
      {/* ------------------- */}
      <div className="flex h-[60px] w-[60px] flex-col items-center justify-center rounded-md bg-white px-3 py-1">
        <div className="text-[28px] text-brand-1" aria-label="remaining hours">
          {formatTime(hours)}
        </div>
        <div className="-mt-3 font-lato text-sm text-body">Hours</div>
      </div>
      {/* -------------------- */}
      <div className="flex h-[60px] w-[60px] flex-col items-center justify-center rounded-md bg-white px-3 py-1">
        <div
          className="text-[28px] text-brand-1"
          aria-label="remaining minutes"
        >
          {formatTime(minutes)}
        </div>
        <div className="-mt-3 font-lato text-sm text-body">Mins</div>
      </div>
      {/* -------------------- */}
      <div className="flex h-[60px] w-[60px] flex-col items-center justify-center rounded-md bg-white px-3 py-1">
        <div
          className="text-[28px] text-brand-1"
          aria-label="remaining seconds"
        >
          {formatTime(seconds)}
        </div>
        <div className="-mt-3 font-lato text-sm text-body">Sec</div>
      </div>
    </div>
  );
}
