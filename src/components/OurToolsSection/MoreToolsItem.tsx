import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn, Text, Title } from "@/ui";

export const MoreToolsItem = () => {
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
      animate={controls}
      initial={"hidden"}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full h-full"
    >
      <div
        ref={ref}
        className={cn(
          "relative h-full group bg-bgColor/25 border border-neutral-600/50 border-solid backdrop-blur-xs rounded-2xl w-full p-8 flex flex-col gap-6 justify-center"
        )}
      >
        <Title className="text-3xl text-textColor-dark text-center">More tools coming soon...</Title>
      </div>
    </motion.div>
  );
};
