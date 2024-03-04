import {
  LuAward,
  LuCandlestickChart,
  LuGem,
  LuLineChart,
  LuSearch,
} from "react-icons/lu";
import Image from "next/image";
import { ReactNode } from "react";
import useTranslation from "next-translate/useTranslation";
import { Text } from "@/ui";

export type Category = {
  key: string;
  icon: ReactNode;
  title: ReactNode;
  content: ReactNode;
  img: ReactNode;
};

export const useCategories = (): Category[] => {
  const { t } = useTranslation("home");
  return [
    {
      key: "PRICE_JUMPS",
      icon: <LuGem />,
      title: t("CATEGORIES_SECTION.PRICE_JUMPS.TITLE"),
      content: (
        <>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.PRICE_JUMPS.DESCRIPTION.TEXT_1")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.PRICE_JUMPS.DESCRIPTION.TEXT_2")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.PRICE_JUMPS.DESCRIPTION.TEXT_3")}
          </Text>
        </>
      ),
      img: (
        <Image
          src="/images/price-jumps.png"
          width={280}
          height={360}
          alt="Price Jumps"
        />
      ),
    },
    {
      key: "HIGH_AMPLITUDES",
      icon: <LuLineChart />,
      title: t("CATEGORIES_SECTION.HIGH_AMPLITUDES.TITLE"),
      content: (
        <>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.HIGH_AMPLITUDES.DESCRIPTION.TEXT_1")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.HIGH_AMPLITUDES.DESCRIPTION.TEXT_2")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.HIGH_AMPLITUDES.DESCRIPTION.TEXT_3")}
          </Text>
        </>
      ),
      img: (
        <Image
          src="/images/price-jumps.png"
          width={280}
          height={360}
          alt="Price Jumps"
        />
      ),
    },
    {
      key: "TOP_GAINERS_LOSERS",
      icon: <LuAward />,
      title: t("CATEGORIES_SECTION.TOP_GAINERS_LOSERS.TITLE"),
      content: (
        <>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.TOP_GAINERS_LOSERS.DESCRIPTION.TEXT_1")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.TOP_GAINERS_LOSERS.DESCRIPTION.TEXT_2")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.TOP_GAINERS_LOSERS.DESCRIPTION.TEXT_3")}
          </Text>
        </>
      ),
      img: (
        <Image
          src="/images/price-jumps.png"
          width={280}
          height={360}
          alt="Price Jumps"
        />
      ),
    },
    {
      key: "SUDDEN_VOLUME_SURGES",
      icon: <LuCandlestickChart />,
      title: t("CATEGORIES_SECTION.SUDDEN_VOLUME_SURGES.TITLE"),
      content: (
        <>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.SUDDEN_VOLUME_SURGES.DESCRIPTION.TEXT_1")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.SUDDEN_VOLUME_SURGES.DESCRIPTION.TEXT_2")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.SUDDEN_VOLUME_SURGES.DESCRIPTION.TEXT_3")}
          </Text>
        </>
      ),
      img: (
        <Image
          src="/images/price-jumps.png"
          width={280}
          height={360}
          alt="Price Jumps"
        />
      ),
    },
    {
      key: "MACD",
      icon: <LuSearch />,
      title: t("CATEGORIES_SECTION.MACD.TITLE"),
      content: (
        <>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.MACD.DESCRIPTION.TEXT_1")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.MACD.DESCRIPTION.TEXT_2")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.MACD.DESCRIPTION.TEXT_3")}
          </Text>
        </>
      ),
      img: (
        <Image
          src="/images/price-jumps.png"
          width={280}
          height={360}
          alt="Price Jumps"
        />
      ),
    },
  ];
};
