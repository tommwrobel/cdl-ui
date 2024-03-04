"use client";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import { useEffect, useRef, useState } from "react";
import { DiscordIcon } from "../icons/DiscordIcon";
import { Section } from "../Section/Section";
import { CardButton } from "./CardButton";
import { useCategories } from "./useCategories";
import { CategoryItem } from "./CategoryItem";
import { Button, Text, Title } from "@/ui";

export const CategoriesSection = () => {
  const { t } = useTranslation("home");

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const categories = useCategories();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % 5);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleChangeActiveCard = (index: number) => {
    setActiveCardIndex(index);
    intervalRef.current && clearInterval(intervalRef.current);
  };

  const handleOnMouseEnter = () => {
    intervalRef.current && clearInterval(intervalRef.current);
  };

  const handleOnMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % 5);
    }, 5000);
  };

  return (
    <Section className="overflow-hidden">
      <div className="flex gap-16 flex-col max-w-screen-xl items-center mx-auto">
        <div className="flex flex-col items-center mx-auto gap-12 max-w-screen-sm">
          <Title className="text-xl sm:text-2xl text-center md:text-left">
            {t("CATEGORIES_SECTION.TITLE")}
          </Title>
          <Text className="text-center text-md text-textColor-dark">
            <Trans
              i18nKey="home:CATEGORIES_SECTION.DESCRIPTION"
              components={{ strong: <strong className="text-textColor" /> }}
            />
          </Text>
        </div>
        <div className="flex flex-col gap-8 w-full items-center">
          <div className="flex gap-4 flex-wrap justify-center">
            {categories.map((card, index) => (
              <CardButton
                key={card.key}
                isActive={activeCardIndex === index}
                onClick={() => handleChangeActiveCard(index)}
              >
                {card.icon}
                {t(`CATEGORIES_SECTION.${card.key}.NAME`)}
              </CardButton>
            ))}
          </div>

          <div className="w-full">
            <CategoryItem
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
              header={categories[activeCardIndex].title}
              img={categories[activeCardIndex].img}
            >
              {categories[activeCardIndex].content}
            </CategoryItem>
          </div>
        </div>
        <a
          href="https://discord.gg/rYmBNuF6XY"
          target="_blank"
          title={t("JOIN_OUR_DISCORD")}
        >
          <Button>
            <DiscordIcon className="animate-wiggle" width={20} height={20} />
            {t("JOIN_OUR_DISCORD")}
          </Button>
        </a>
      </div>
    </Section>
  );
};
