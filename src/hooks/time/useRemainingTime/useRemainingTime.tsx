"use client";

import { timerHelper } from "@/utils/timer";
import { useEffect, useState } from "react";

interface Props {
  endDate: string;
}

export function useRemainingTime({ endDate }: Props) {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calcRemainingTime = () => {
      const newRemaining = timerHelper(endDate);
      setRemainingTime(newRemaining);
    };

    const intervalId = setInterval(calcRemainingTime, 1000);

    return () => clearInterval(intervalId);
  }, [endDate]);

  return { ...remainingTime };
}
