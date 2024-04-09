import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Section } from "../Section/Section";
import { Text } from "@/ui";

export const InformationSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="py-12 md:py-12">
      <div className="max-w-screen-xl flex flex-col gap-4 mx-auto items-start">
        <div className="px-2 py-1 rounded-lg bg-secondary">
          <Text size="sm" weight="bold" className="text-white">
            {t("GENERAL_INFORMATION_SECTION.TITLE")}
          </Text>
        </div>
        <Text size="sm">{t("GENERAL_INFORMATION_SECTION.TEXT_1")}</Text>
        <Text size="sm">{t("GENERAL_INFORMATION_SECTION.TEXT_2")}</Text>
        <Text size="sm">{t("GENERAL_INFORMATION_SECTION.TEXT_3")}</Text>
        <div className="flex gap-3 items-center">
          <Image
            src="/images/bismuth-logo.svg"
            width={96}
            height={96}
            alt=""
            className="w-10 h-10 rounded-full border-2 border-primary p-1"
          />
          <Text size="sm">
            {t("GENERAL_INFORMATION_SECTION.FOOTER_1")}
            <br />
            <strong>{t("GENERAL_INFORMATION_SECTION.FOOTER_2")}</strong>
          </Text>
        </div>
      </div>
    </Section>
  );
};
