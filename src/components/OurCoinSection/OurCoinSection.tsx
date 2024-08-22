import { Section } from "../Section/Section";
import { XIcon } from "../icons/XIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { useTranslation } from "@/hooks/useTranslation";
import { Button, Text, Title } from "@/ui";

export const OurCoinSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="py-12 md:py-12 bg-neutral-300">
      <div className="flex flex-col items-center mx-auto max-w-screen-md md:flex-row gap-24">
        <img src="./images/bismuth-logo.svg" width={92} height={92} alt="" />
        <div className="flex flex-col items-center gap-6 md:items-start">
          <Title size="2xl" className="text-center text-primary md:text-left">
            {t("OUR_COIN_SECTION.TITLE")}
          </Title>
          <Text className="text-center md:text-left">
            {t("OUR_COIN_SECTION.DESCRIPTION")}
          </Text>
          <div className="flex justify-start gap-2">
            <a href="https://twitter.com/BismuthTechGem" target="_blank">
              <Button variant="ghost">
                <XIcon />
                X/Twitter
              </Button>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61550220960162"
              target="_blank"
            >
              <Button variant="ghost">
                <FacebookIcon />
                Facebook
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
