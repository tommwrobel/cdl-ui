"use client";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import { DiscordIcon } from "../icons/DiscordIcon";
import { Section } from "../Section/Section";
import { PrimaryActionButton } from "../PrimaryActionButton/PrimaryActionButton";
import { CounterText } from "./CounterText";
import { Button, Text, Title } from "@/ui";

export const NumbersSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="bg-neutral-400/25 relative backdrop-blur-xs">
      <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto gap-16">
        <div className="relative order-0 md:order-1 md:flex flex-col basis-1/2 gap-6 items-center">
          <div className="grid grid-cols-2 gap-y-8 md:gap-y-8 gap-x-8 md:gap-x-12 self-center h-full">
            <CounterText
              targetValue={6}
              description={t("NUMBERS_SECTION.EXCHANGES")}
            />
            <CounterText
              targetValue={1000}
              step={50}
              startAdornment="+"
              endAdornment="x"
              description={t("NUMBERS_SECTION.PRICE_JUMPS")}
            />
            <CounterText
              targetValue={10}
              step={1}
              startAdornment="+"
              endAdornment="M"
              description={t("NUMBERS_SECTION.PROGRAMMERS")}
            />
            <CounterText
              targetValue={3}
              startAdornment="+"
              description={t("NUMBERS_SECTION.WORKING_DAPPS")}
            />
          </div>
        </div>
        <div className="order-1 md:order-0 flex flex-col md:basis-1/2 gap-12 justify-center items-center md:items-start">
          <div className="flex flex-col gap-6">
            <Title className="text-xl sm:text-2xl text-center md:text-left">
              {t("NUMBERS_SECTION.TITLE")}
            </Title>
            <Text className="text-center text-md md:text-left text-textColor-dark">
              <Trans
                i18nKey="home:NUMBERS_SECTION.DESCRIPTION_1"
                components={{ strong: <strong className="text-textColor" /> }}
              />
            </Text>
            <Text className="text-center text-md md:text-left text-textColor-dark">
              <Trans
                i18nKey="home:NUMBERS_SECTION.DESCRIPTION_2"
                components={{ strong: <strong className="text-textColor" /> }}
              />
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
