"use client";
import { Section } from "../Section/Section";
import { PrimaryActionButton } from "../PrimaryActionButton/PrimaryActionButton";
import { useTranslation } from "@/hooks/useTranslation";
import { Text, Title } from "@/ui";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const BismuthSection = () => {
  return (
    <Section className="bg-neutral-950/50 relative backdrop-blur-xs">
      <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto gap-16">
        <div className="relative order-0 md:order-1 md:flex flex-col lg:basis-1/2 md:basis-1/3 gap-6 items-center">
          <div className="flex items-center justify-center">
            <img
              src="/images/bismuth-logo.svg"
              alt="Bismuth logo"
              className="w-40 h-40 md:w-48 md:h-48"
            />
          </div>
        </div>
        <div className="order-1 md:order-0 flex flex-col lg:basis-1/2 md:basis-2/3 gap-12 justify-center items-center md:items-start">
          <div className="flex flex-col gap-6 items-center md:items-start">
            <SectionTitle className="md:text-left text-center">About Bismuth</SectionTitle>
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
            <Text className="text-center text-md md:text-left">
              Check more:{" "}
              <a
                href="https://www.bismuthtechgem.com"
                className="text-textColor hover:text-textColor-light underline"
              >
                www.bismuthtechgem.com
              </a>
            </Text>
          </div>
        </div>
      </div>
    </Section>
  );
};
