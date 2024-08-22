"use client";
import { LuArrowDown } from "react-icons/lu";
import { Section } from "../Section/Section";
import { PrimaryActionButton } from "../PrimaryActionButton/PrimaryActionButton";
import { Title, Text, Button } from "@/ui";

export const HeroSection = () => {
  return (
    <Section className="flex max-w-screen-xl h-[680px] mx-auto flex-row gap-16 snap-top">
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto gap-16">
        <img src="images/cdl-logo.svg" width={64} height={64} alt="" />
        <Title className="text-2xl font-semibold text-center text-transparent sm:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text">
          CryptoDataLab
        </Title>
        <Text className="text-lg text-center sm:text-xl text-textColor">
          The Art of Crypto Analysis! Unveil Market Trends, Optimize Strategies,
          and Make Informed Decisions with Our Cutting-Edge Tools and Insights!
        </Text>
        <div className="flex flex-col items-center justify-center w-full sm:flex-row gap-4">
          <PrimaryActionButton />
          <a href="#about" title="Read how it works!">
            <Button variant="ghost">
              Our Tools <LuArrowDown />
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
};
