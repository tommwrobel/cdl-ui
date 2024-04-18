import { LuBox, LuCode, LuShield } from "react-icons/lu";
import { useTranslation } from "@/hooks/useTranslation";
import { Section } from "../Section/Section";
import { PrimaryActionButton } from "../PrimaryActionButton/PrimaryActionButton";
import { AboutSectionBox } from "./AboutSectionBox";
import { Text } from "@/ui";

export const AboutSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section id="about" className="flex gap-16 flex-col items-center">
      <div className="flex max-w-screen-xl mx-auto gap-8 md:gap-16 flex-col md:flex-row items-start">
        <AboutSectionBox>
          <LuCode className="text-secondary text-2xl" />
          <Text className="group-hover:text-textColor-light">
            {t("ABOUT_SECTION.TEXT_1")}
          </Text>
        </AboutSectionBox>
        <AboutSectionBox>
          <LuBox className="text-secondary text-2xl" />
          <Text className="group-hover:text-textColor-light">
            {t("ABOUT_SECTION.TEXT_2_1")}
          </Text>
          <Text className="group-hover:text-textColor-light">
            {t("ABOUT_SECTION.TEXT_2_2")}
          </Text>
        </AboutSectionBox>
        <AboutSectionBox>
          <LuShield className="text-secondary text-2xl" />
          <Text className="group-hover:text-textColor-light">
            {t("ABOUT_SECTION.TEXT_3_1")}
          </Text>
          <Text className="group-hover:text-textColor-light">
            {t("ABOUT_SECTION.TEXT_3_2")}
          </Text>
        </AboutSectionBox>
      </div>
      <PrimaryActionButton />
    </Section>
  );
};
