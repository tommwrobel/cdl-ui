import { Section } from "../Section/Section";
import { useTranslation } from "@/hooks/useTranslation";
import { Text } from "@/ui";

export const InformationSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="py-12 md:py-12">
      <div className="flex flex-col items-start mx-auto max-w-screen-xl gap-4">
        <div className="px-2 py-1 rounded-lg bg-secondary">
          <Text size="sm" weight="bold" className="text-white">
            {t("GENERAL_INFORMATION_SECTION.TITLE")}
          </Text>
        </div>
        <Text size="sm">{t("GENERAL_INFORMATION_SECTION.TEXT_1")}</Text>
        <Text size="sm">{t("GENERAL_INFORMATION_SECTION.TEXT_2")}</Text>
        <Text size="sm">{t("GENERAL_INFORMATION_SECTION.TEXT_3")}</Text>
        <div className="flex items-center gap-3">
          <img
            src="./images/bismuth-logo.svg"
            width={96}
            height={96}
            alt=""
            className="w-10 h-10 p-1 border-2 rounded-full border-primary"
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
