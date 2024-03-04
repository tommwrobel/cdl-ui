import useTranslation from "next-translate/useTranslation";
import { Section } from "../Section/Section";
import { Text } from "@/ui";

export const RiskNoticeSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="py-12 md:py-12 border-b border-t border-borderColor-dark">
      <div className="max-w-screen-xl flex flex-col gap-4 mx-auto items-start">
        <div className="px-2 py-1 rounded-lg bg-gradient-to-tr from-primary-800 to-secondary-700">
          <Text size="sm" weight="bold">
            {t("RISK_NOTICE_SECTION.TITLE")}
          </Text>
        </div>
        <Text size="sm">{t("RISK_NOTICE_SECTION.TEXT_1")}</Text>
        <Text size="sm">{t("RISK_NOTICE_SECTION.TEXT_2")}</Text>
      </div>
    </Section>
  );
};
