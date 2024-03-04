"use client";

import { ReactNode, useRef } from "react";
import { useIntersectionCounter } from "../../hooks/useIntersectionCounter";
import { Text, cn } from "@/ui";

type CounterTextProps = {
  targetValue: number;
  step?: number;
  description?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

export const CounterText = ({
  targetValue,
  step = 1,
  description,
  startAdornment,
  endAdornment,
}: CounterTextProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const value = useIntersectionCounter({
    containerRef: ref,
    targetValue,
    step,
  });

  return (
    <div
      ref={ref}
      className="group flex flex-col gap-1 items-center hover:scale-110 duration-300 rounded-2xl p-2 sm:p-4"
    >
      <Text
        className={cn(
          "whitespace-nowrap bg-gradient-to-tr from-primary-500 via-secondary-600 to-secondary-800 text-transparent bg-clip-text font-medium text-3xl sm:text-4xl",
          value < targetValue && value > 0 && "animate-jump"
        )}
      >
        {startAdornment}
        {value}
        {endAdornment}
      </Text>
      <Text className="text-primary-300 text-lg sm:text-xl text-center">
        {description}
      </Text>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary w-12 h-12 blur-2xl opacity-0 group-hover:opacity-100 duration-500"></div>
    </div>
  );
};
