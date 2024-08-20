"use client";

import { cn, Title, TitleProps } from "@/ui";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type SectionTitleProps = TitleProps & {
  animate?: boolean;
};

export const SectionTitle = ({
  children,
  className,
  animate,
  ...props
}: SectionTitleProps) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && animate) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <motion.div
      animate={controls}
      initial={animate ? "hidden" : "visible"}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Title
        componentRef={ref}
        className={cn(
          "text-2xl text-textColor-light text-gradient max-w-screen-sm",
          className
        )}
        {...props}
      >
        {children}
      </Title>
    </motion.div>
  );
};
