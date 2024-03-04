import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Section } from "../Section/Section";
import { XIcon } from "../icons/XIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { Button, Text, Title } from "@/ui";

export const OurCoinSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="py-12 md:py-12 bg-gradient-to-r from-primary-950 to-secondary-950/80">
      <div className="max-w-screen-md flex flex-col md:flex-row items-center gap-12 mx-auto">
        <Image src="/images/head.png" width={240} height={240} alt="" />
        <div className="flex flex-col gap-6 items-center md:items-start">
          <Title
            size="2xl"
            className="bg-gradient-to-r from-primary-400 to-secondary-500 text-transparent bg-clip-text text-center md:text-left"
          >
            {t("OUR_COIN_SECTION.TITLE")}
          </Title>
          <Text className="text-center md:text-left">
            {t("OUR_COIN_SECTION.DESCRIPTION")}
          </Text>
          <div className="flex gap-2 justify-start">
            <a
              href="https://www.facebook.com/TheCryptoSanctuary"
              target="_blank"
            >
              <Button variant="ghost">
                <FacebookIcon />
                Facebook
              </Button>
            </a>
            <a href="https://twitter.com/CryptoSanctuar" target="_blank">
              <Button variant="ghost">
                <XIcon />
                Twitter
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
