import { LuCandlestickChart, LuHeartHandshake, LuUserPlus } from "react-icons/lu";
import useTranslation from "next-translate/useTranslation";
import { DiscordIcon } from "../icons/DiscordIcon";
import { Section } from "../Section/Section";
import { AboutSectionBox } from "./AboutSectionBox";
import { Text, Button } from "@/ui";

export const AboutSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section id="about" className="flex gap-16 flex-col items-center">
      <div className="flex max-w-screen-xl mx-auto gap-8 md:gap-16 flex-col md:flex-row">
        <AboutSectionBox>
          <LuUserPlus className="text-secondary text-2xl" />
          <Text className="group-hover:text-textColor-light">
            {t("ABOUT_SECTION.TEXT_1")}
          </Text>
        </AboutSectionBox>
        <AboutSectionBox>
          <LuCandlestickChart className="text-secondary text-2xl" />
          <Text className="group-hover:text-textColor-light">
            {t("ABOUT_SECTION.TEXT_2")}
          </Text>
        </AboutSectionBox>
        <AboutSectionBox>
          <LuHeartHandshake className="text-secondary text-2xl" />
          <Text className="group-hover:text-textColor-light">
            {t("ABOUT_SECTION.TEXT_3")}
          </Text>
        </AboutSectionBox>
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
    </Section>
  );
};
