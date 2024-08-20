"use client";
import { LuArrowDown } from "react-icons/lu";
import { Section } from "../Section/Section";
import { PrimaryActionButton } from "../PrimaryActionButton/PrimaryActionButton";
import { Title, Text, Button } from "@/ui";

export const HeroSection = () => {
  return (
    <Section className="flex max-w-screen-xl h-[680px] mx-auto flex-row gap-16 snap-top">
      <div className="flex flex-col max-w-3xl gap-16 justify-center items-center mx-auto">
        <img src="images/cdl-logo.svg" width={64} height={64} alt="" />
        <Title className="text-center text-2xl sm:text-4xl font-semibold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          CryptoDataLab
        </Title>
        <Text className="text-center text-lg sm:text-xl text-textColor">
          The Art of Crypto Analysis! Unveil Market Trends, Optimize Strategies,
          and Make Informed Decisions with Our Cutting-Edge Tools and Insights!
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
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
