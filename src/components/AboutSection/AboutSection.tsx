"use client";
import { LuBox, LuCode, LuShield } from "react-icons/lu";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Section } from "../Section/Section";
import { PrimaryActionButton } from "../PrimaryActionButton/PrimaryActionButton";
import { AboutSectionBox } from "./AboutSectionBox";
import { useTranslation } from "@/hooks/useTranslation";
import { Text } from "@/ui";

export const AboutSection = () => {
  const { t } = useTranslation("home");

  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <Section
      id="about"
      className="flex gap-16 flex-col items-center"
      animate={false}
    >
      <div
        ref={ref}
        className="flex max-w-screen-xl mx-auto gap-8 md:gap-16 flex-col md:flex-row items-start"
      >
        <motion.div
          animate={controls}
          initial={"hidden"}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AboutSectionBox>
            <LuCode className="text-secondary text-2xl" />
            <Text className="group-hover:text-textColor-light">
              {t("ABOUT_SECTION.TEXT_1")}
            </Text>
          </AboutSectionBox>
        </motion.div>
        <motion.div
          animate={controls}
          initial={"hidden"}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AboutSectionBox>
            <LuBox className="text-secondary text-2xl" />
            <Text className="group-hover:text-textColor-light">
              {t("ABOUT_SECTION.TEXT_2_1")}
            </Text>
            <Text className="group-hover:text-textColor-light">
              {t("ABOUT_SECTION.TEXT_2_2")}
            </Text>
          </AboutSectionBox>
        </motion.div>
        <motion.div
          animate={controls}
          initial={"hidden"}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <AboutSectionBox>
            <LuShield className="text-secondary text-2xl" />
            <Text className="group-hover:text-textColor-light">
              {t("ABOUT_SECTION.TEXT_3_1")}
            </Text>
            <Text className="group-hover:text-textColor-light">
              {t("ABOUT_SECTION.TEXT_3_2")}
            </Text>
          </AboutSectionBox>
        </motion.div>
      </div>
      <PrimaryActionButton />
    </Section>
  );
};
