import {
  LuAward,
  LuCandlestickChart,
  LuCpu,
  LuGem,
  LuLineChart,
  LuSearch,
  LuShield,
  LuSmartphone,
  LuWorkflow,
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
      key: "CATEGORY_1",
      icon: <LuCpu />,
      title: t("CATEGORIES_SECTION.CATEGORY_1.TITLE"),
      content: (
        <>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.CATEGORY_1.DESCRIPTION.TEXT_1")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.CATEGORY_1.DESCRIPTION.TEXT_2")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.CATEGORY_1.DESCRIPTION.TEXT_3")}
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
      key: "CATEGORY_2",
      icon: <LuSmartphone />,
      title: t("CATEGORIES_SECTION.CATEGORY_2.TITLE"),
      content: (
        <>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.CATEGORY_2.DESCRIPTION.TEXT_1")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.CATEGORY_2.DESCRIPTION.TEXT_2")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.CATEGORY_2.DESCRIPTION.TEXT_3")}
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
      key: "CATEGORY_3",
      icon: <LuShield />,
      title: t("CATEGORIES_SECTION.CATEGORY_3.TITLE"),
      content: (
        <>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.CATEGORY_3.DESCRIPTION.TEXT_1")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.CATEGORY_3.DESCRIPTION.TEXT_2")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.CATEGORY_3.DESCRIPTION.TEXT_3")}
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
      key: "CATEGORY_4",
      icon: <LuWorkflow />,
      title: t("CATEGORIES_SECTION.CATEGORY_4.TITLE"),
      content: (
        <>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.CATEGORY_4.DESCRIPTION.TEXT_1")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.CATEGORY_4.DESCRIPTION.TEXT_2")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.CATEGORY_4.DESCRIPTION.TEXT_3")}
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
      key: "CATEGORY_5",
      icon: <LuGem />,
      title: t("CATEGORIES_SECTION.CATEGORY_5.TITLE"),
      content: (
        <>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.CATEGORY_5.DESCRIPTION.TEXT_1")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.CATEGORY_5.DESCRIPTION.TEXT_2")}
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.CATEGORY_5.DESCRIPTION.TEXT_3")}
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
