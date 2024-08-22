"use client";
import { useState } from "react";
import { Section } from "../Section/Section";
import { PrimaryActionButton } from "../PrimaryActionButton/PrimaryActionButton";
import { CardButton } from "./CardButton";
import { useCategories } from "./useCategories";
import { CategoryItem } from "./CategoryItem";
import { useTranslation, Trans } from "@/hooks/useTranslation";
import { Text, Title } from "@/ui";

export const CategoriesSection = () => {
  const { t } = useTranslation("home");

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const categories = useCategories();

  const handleChangeActiveCard = (index: number) => {
    setActiveCardIndex(index);
  };

  return (
    <Section className="overflow-hidden">
      <div className="flex flex-col items-center mx-auto gap-16 max-w-screen-xl">
        <div className="flex flex-col items-center mx-auto gap-12 max-w-screen-sm">
          <Title className="text-xl text-center sm:text-2xl md:text-left">
            {t("CATEGORIES_SECTION.TITLE")}
          </Title>
          <Text className="text-center text-md text-textColor-dark">
            <Trans
              i18nKey="home:CATEGORIES_SECTION.DESCRIPTION"
              components={{ strong: <strong className="text-textColor" /> }}
            />
          </Text>
        </div>
        <div className="flex flex-col items-center w-full gap-8">
          <div className="flex flex-wrap justify-center gap-4">
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
              header={categories[activeCardIndex].title}
              img={categories[activeCardIndex].img}
            >
              {categories[activeCardIndex].content}
            </CategoryItem>
          </div>
        </div>
        <PrimaryActionButton />
      </div>
    </Section>
  );
};
