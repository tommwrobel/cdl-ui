"use client";
import { LuExternalLink } from "react-icons/lu";
import { Section } from "../Section/Section";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { PrimaryActionButton } from "../PrimaryActionButton/PrimaryActionButton";
import { Text } from "@/ui";

export const AboutUsSection = () => {
  return (
    <Section className="bg-neutral-950/50 relative backdrop-blur-xs bg-[url('../../public/images/cdl-logo-outline.svg')] bg-no-repeat bg-center">
      <div className="flex flex-col items-center mx-auto md:flex-row max-w-screen-xl gap-16">
        <div className="flex flex-col items-center justify-center order-1 md:order-0 gap-12">
          <SectionTitle className="text-center">
            About CryptoDataLab
          </SectionTitle>
          <div className="flex flex-col md:flex-row items-center gap-12 md:items-start">
            <Text className="text-center text-md md:text-left text-textColor-dark">
              At Crypto Data Lab, we delve into the heart of the crypto
              universe, analyzing tens of billions of transactions, hundreds of
              millions of addresses, and traversing multiple blockchains, Dexes,
              and Cexes. Amidst the ever-evolving landscape of the crypto
              market, we serve as your guiding light, offering a plethora of
              tools designed to empower your trading journey.
            </Text>
            <Text className="text-center text-md md:text-left text-textColor-dark">
              Whether you&apos;re a seasoned daily trader, an avid seeker of
              crypto treasures, or someone navigating the complex world of Dexes
              and Cexes, our suite of tools is tailored to enhance your
              experience and streamline your activities. Unlike platforms that
              promise overnight riches, we provide something far more valuable –
              actionable data that empowers you to make informed decisions in
              real-time, unlocking opportunities across the entirety of the
              crypto market.
            </Text>
            <Text className="text-center text-md md:text-left text-textColor-dark">
              The best part? Most of our tools are completely free! Only a small
              fraction of the most specialized categories will be paid.
              Don&apos;t worry - there will be options to use them for free as
              well. For those who hold a certain amount of Bismuth (BIS) coins,
              access to our premium tools is granted for free. Discover more
              about Bismuth at the bottom of our page, where you can delve
              deeper into the world of BIS and uncover its extraordinary
              potential.
            </Text>
          </div>
          <PrimaryActionButton />
        </div>
      </div>
    </Section>
  );
};
