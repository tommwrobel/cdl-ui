"use client";
import { HTMLAttributes, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/ui";

type SectionProps = HTMLAttributes<HTMLDivElement> & {
  animate?: boolean;
};

export const Section = ({
  animate = true,
  children,
  className,
  ...props
}: SectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      animate={animate ? controls : false}
      initial={animate ? "hidden" : "visible"}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ duration: 0.8 }}
    >
      <section
        className={cn("w-full px-8 md:px-16 py-16 md:py-24", className)}
        {...props}
      >
        {children}
      </section>
    </motion.div>
  );
};

Section.displayName = "Section";
