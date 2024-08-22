import { Section } from "../Section/Section";
import { useTranslation } from "@/hooks/useTranslation";
import { Text } from "@/ui";

export const RiskNoticeSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="py-12 border-t border-b bg-neutral-950/50 md:py-12 border-neutral/25">
      <div className="flex flex-col items-start mx-auto max-w-screen-xl gap-4">
        <div className="px-2 py-1 rounded-lg bg-primary">
          <Text size="sm" weight="bold" className="text-white">
            RISK NOTICE
          </Text>
        </div>
        <Text size="sm">
          This website provides information about cryptocurrencies and entities
          involved in trading these digital assets. Cryptocurrencies are complex
          instruments and carry a high risk of monetary loss. It is important to
          carefully consider whether you comprehend how cryptocurrencies operate
          and if you can afford the high risk of losing your money. Crypto Data
          Lab advises you to undertake your own research before making any
          investment decisions and to avoid investing in cryptocurrencies
          without a complete understanding of their mechanisms and the risks
          involved.
        </Text>
      </div>
    </Section>
  );
};
