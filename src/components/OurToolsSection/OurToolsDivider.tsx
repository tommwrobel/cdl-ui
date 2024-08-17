import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Title } from "@/ui";

export const OurToolsDivider = () => {
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
      className="w-full"
    >
      <div ref={ref} className="flex gap-8 items-center w-full max-w-screen-xl">
        <div className="grow h-[1px] bg-neutral-600/50"></div>
        <div className="flex items-center gap-5">
          <img src="/images/cs-logo.png" className="w-16 h-16 animate-wiggle" />
          <Title className="text-textColor shrink-0" size="xl">
            Crypto Sanctuary
          </Title>
        </div>
        <div className="grow h-[1px] bg-primary-400/25"></div>
      </div>
    </motion.div>
  );
};
