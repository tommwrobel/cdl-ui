import { RefObject, useState } from "react";
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

  const intervalTime = durationInMilliseconds / (targetValue / step);

  useIsomorphicEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const node = containerRef?.current;

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [targetValue, containerRef, step, intervalTime]);

  return value;
};
