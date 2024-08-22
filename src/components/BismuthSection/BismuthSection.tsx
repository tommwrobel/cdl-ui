"use client";
import { LuExternalLink } from "react-icons/lu";
import { Section } from "../Section/Section";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Text } from "@/ui";

export const BismuthSection = () => {
  return (
    <Section className="bg-neutral-950/50 relative backdrop-blur-xs bg-[url('../../public/images/bismuth-outline.svg')] bg-no-repeat bg-center">
      <div className="flex flex-col items-center mx-auto md:flex-row max-w-screen-xl gap-16">
        <div className="relative flex-col items-center order-0 md:order-1 md:flex lg:basis-1/2 md:basis-1/3 gap-6">
          <div className="flex items-center justify-center">
            <img
              src="/images/bismuth-logo.svg"
              alt="Bismuth logo"
              className="w-40 h-40 md:w-48 md:h-48"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center order-1 md:order-0 lg:basis-1/2 md:basis-2/3 gap-12 md:items-start">
          <div className="flex flex-col items-center gap-6 md:items-start">
            <SectionTitle className="text-center md:text-left">
              About Bismuth
            </SectionTitle>
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
              Check out more:{" "}
              <a
                href="https://www.bismuthtechgem.com"
                className="inline-flex items-center underline text-textColor hover:text-textColor-light gap-1"
              >
                www.bismuthtechgem.com <LuExternalLink />
              </a>
            </Text>
          </div>
        </div>
      </div>
    </Section>
  );
};
