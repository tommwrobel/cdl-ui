import { Section } from "../Section/Section";
import { useTranslation } from "@/hooks/useTranslation";
import { Text } from "@/ui";

export const RiskNoticeSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="py-12 md:py-12 border-b border-t border-neutral-300">
      <div className="max-w-screen-xl flex flex-col gap-4 mx-auto items-start">
        <div className="px-2 py-1 rounded-lg bg-secondary">
          <Text size="sm" weight="bold" className="text-white">
            {t("RISK_NOTICE_SECTION.TITLE")}
          </Text>
        </div>
        <Text size="sm">{t("RISK_NOTICE_SECTION.TEXT_1")}</Text>
        <Text size="sm">{t("RISK_NOTICE_SECTION.TEXT_2")}</Text>
      </div>
    </Section>
  );
};
