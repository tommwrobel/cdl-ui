import { RefObject, useState } from "react";
import { useInView } from "framer-motion";
import { useIsomorphicEffect } from "./useIsomorphicEffect";

type UseIntersectionCounterParams<TElement = HTMLElement> = {
  containerRef: RefObject<TElement>;
  startValue?: number;
  targetValue?: number;
  step?: number;
  durationInMilliseconds?: number;
};

export const useIntersectionCounter = ({
  containerRef,
  startValue = 0,
  targetValue = 1000,
  step = 1,
  durationInMilliseconds = 1000,
}: UseIntersectionCounterParams) => {
  const [value, setValue] = useState(startValue);

  const isInView = useInView(containerRef);

  const intervalTime = durationInMilliseconds / (targetValue / step);

  useIsomorphicEffect(() => {
    if (isInView) {
      const intervalId = setInterval(() => {
        setValue((prevValue) => {
          if (prevValue < targetValue) {
            return prevValue + step;
          } else {
            clearInterval(intervalId);
            return prevValue;
          }
        });
      }, intervalTime);
    }
  }, [targetValue, containerRef, step, intervalTime, isInView]);

  return value;
};
