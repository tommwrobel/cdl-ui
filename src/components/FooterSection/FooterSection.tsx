import useTranslation from "next-translate/useTranslation";
import { Section } from "../Section/Section";
import { FacebookIcon } from "../icons/FacebookIcon";
import { XIcon } from "../icons/XIcon";
import { Button, Text } from "@/ui";

export const FooterSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="py-6 md:py-6">
      <div className="max-w-screen-xl flex flex-col gap-4 md:flex-row items-center justify-between mx-auto">
        <div>
          <Text className="text-center">
            {t("FOOTER_SECTION.COPYRIGHT", { year: new Date().getFullYear() })}
          </Text>
        </div>
        <div className="flex gap-1 items-center">
          <Text>{t("FOOTER_SECTION.SOCIAL_MEDIA")}</Text>
          <a href="https://www.facebook.com/TheCryptoSanctuary" target="_blank">
            <Button variant="ghost" className="text-xl" icon>
              <FacebookIcon />
            </Button>
          </a>
          <a href="https://twitter.com/CryptoSanctuar" target="_blank">
            <Button variant="ghost" className="text-xl" icon>
              <XIcon />
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
};
