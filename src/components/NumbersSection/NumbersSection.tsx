"use client";
import { Section } from "../Section/Section";
import { PrimaryActionButton } from "../PrimaryActionButton/PrimaryActionButton";
import { CounterText } from "./CounterText";
import { useTranslation, Trans } from "@/hooks/useTranslation";
import { Text, Title } from "@/ui";

export const NumbersSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="bg-neutral-950/50 relative backdrop-blur-xs">
      <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto gap-16">
        <div className="relative order-0 md:order-1 md:flex flex-col basis-1/2 gap-6 items-center">
          <div className="grid grid-cols-2 gap-y-8 md:gap-y-8 gap-x-8 md:gap-x-12 self-center h-full"></div>
        </div>
        <div className="order-1 md:order-0 flex flex-col md:basis-1/2 gap-12 justify-center items-center md:items-start">
          <div className="flex flex-col gap-6">
            <Title className="text-xl sm:text-2xl text-center md:text-left">
              About Bismuth
            </Title>
            <Text className="text-center text-md md:text-left text-textColor-dark">
              Bismuth is an open-source protocol and a platform, created in the
              world’s most popular and fastest growing programming language -
              Python (approx. 10M programmers - potential base of Bismuth
              blockchain apps creators).
            </Text>
            <Text className="text-center text-md md:text-left text-textColor-dark">
              It allows for the integration of different Python-based projects
              like applications and games with the blockchain.
            </Text>
            <Text>
            Check more: https://www.bismuthtechgem.com/
            </Text>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start w-full">
            <PrimaryActionButton />
          </div>
        </div>
      </div>
    </Section>
  );
};
