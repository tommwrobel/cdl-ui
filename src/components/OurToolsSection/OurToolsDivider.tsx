import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Title, Text } from "@/ui";

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
      className="flex flex-col items-center w-full gap-8 max-w-screen-xl"
    >
      <div ref={ref} className="flex items-center w-full gap-8 max-w-screen-xl">
        <div className="grow h-[1px] bg-neutral-600/50"></div>
        <div className="flex items-center gap-5">
          <img src="/images/cs-logo.png" className="w-12 h-12 md:w-16 md:h-16 animate-wiggle" />
          <Title className="text-lg text-textColor shrink-0 md:text-xl">
            Crypto Sanctuary
          </Title>
        </div>
        <div className="grow h-[1px] bg-primary-400/25"></div>
      </div>
      <Text className="text-center max-w-screen-md">The Crypto Sanctuary is an advanced Discord server that serves as a key hub for cryptocurrency traders. At the heart of this project lies an innovative system that collects data on every trade on two major platforms: Binance (finally something for CEX users!) and Uniswap.</Text>
    </motion.div>
  );
};
