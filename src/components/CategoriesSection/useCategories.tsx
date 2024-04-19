import {
  LuCpu,
  LuGem,
  LuShield,
  LuSmartphone,
  LuWorkflow,
} from "react-icons/lu";
import { ReactNode } from "react";
import { useTranslation, Trans } from "@/hooks/useTranslation";
import { Text } from "@/ui";

export type Category = {
  key: string;
  icon: ReactNode;
  title?: ReactNode;
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
            <Trans
              i18nKey="home:CATEGORIES_SECTION.CATEGORY_1.DESCRIPTION.TEXT_1"
              components={{
                strong: <strong className="text-textColor font-semibold" />,
              }}
            />
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            <Trans
              i18nKey="home:CATEGORIES_SECTION.CATEGORY_1.DESCRIPTION.TEXT_2"
              components={{
                strong: <strong className="text-textColor font-semibold" />,
              }}
            />
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            <Trans
              i18nKey="home:CATEGORIES_SECTION.CATEGORY_1.DESCRIPTION.TEXT_3"
              components={{
                strong: <strong className="text-textColor font-semibold" />,
              }}
            />
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            <Trans
              i18nKey="home:CATEGORIES_SECTION.CATEGORY_1.DESCRIPTION.TEXT_4"
              components={{
                strong: <strong className="text-textColor font-semibold" />,
              }}
            />
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            <Trans
              i18nKey="home:CATEGORIES_SECTION.CATEGORY_1.DESCRIPTION.TEXT_5"
              components={{
                strong: <strong className="text-textColor font-semibold" />,
              }}
            />
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            <Trans
              i18nKey="home:CATEGORIES_SECTION.CATEGORY_1.DESCRIPTION.TEXT_6"
              components={{
                strong: <strong className="text-textColor font-semibold" />,
              }}
            />{" "}
            <a
              href="https://www.youtube.com/watch?v=y3r3WcT3P2Q"
              className="text-primary underline"
            >
              https://www.youtube.com/watch?v=y3r3WcT3P2Q
            </a>
          </Text>
        </>
      ),
      img: (
        <img
          src="./images/category-1-img.png"
          width={240}
          height={240}
          alt=""
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
            <Trans
              i18nKey="home:CATEGORIES_SECTION.CATEGORY_2.DESCRIPTION.TEXT_2"
              components={{
                strong: <strong className="text-textColor font-semibold" />,
              }}
            />{" "}
            <a
              href="https://www.youtube.com/watch?v=y3r3WcT3P2Q"
              className="text-primary underline"
            >
              https://www.youtube.com/watch?v=y3r3WcT3P2Q
            </a>
          </Text>
        </>
      ),
      img: (
        <img
          src="./images/category-2-img.png"
          width={240}
          height={240}
          alt=""
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
            <Trans
              i18nKey="home:CATEGORIES_SECTION.CATEGORY_3.DESCRIPTION.TEXT_1"
              components={{
                strong: <strong className="text-textColor font-semibold" />,
              }}
            />
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            <Trans
              i18nKey="home:CATEGORIES_SECTION.CATEGORY_3.DESCRIPTION.TEXT_2"
              components={{
                strong: <strong className="text-textColor font-semibold" />,
              }}
            />{" "}
            <a
              href="https://www.youtube.com/watch?v=AsHfUhrBch4&t=28s"
              className="text-primary underline"
            >
              https://www.youtube.com/watch?v=AsHfUhrBch4&t=28s
            </a>
          </Text>
        </>
      ),
      img: (
        <img
          src="./images/category-3-img.png"
          width={240}
          height={240}
          alt=""
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
          <Text>
            <Trans
              i18nKey="home:CATEGORIES_SECTION.CATEGORY_4.DESCRIPTION.TEXT_2"
              components={{
                strong: <strong className="text-textColor font-semibold" />,
              }}
            />
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.CATEGORY_4.DESCRIPTION.TEXT_3")}
          </Text>
        </>
      ),
      img: (
        <img
          src="./images/category-4-img.png"
          width={240}
          height={240}
          alt=""
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
          <Text>
            <ul className="list-disc list-inside">
              <Trans
                i18nKey="home:CATEGORIES_SECTION.CATEGORY_5.DESCRIPTION.TEXT_3"
                components={{
                  li: <li />,
                }}
              />
            </ul>
          </Text>
          <Text brightness="dark" className="text-center md:text-left">
            {t("CATEGORIES_SECTION.CATEGORY_5.DESCRIPTION.TEXT_4")}
          </Text>
        </>
      ),
      img: (
        <img
          src="./images/category-5-img.png"
          width={240}
          height={240}
          alt=""
        />
      ),
    },
  ];
};
