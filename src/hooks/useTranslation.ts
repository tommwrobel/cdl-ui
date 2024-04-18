import parse from "html-react-parser";
import home from "../locales/en/home.json";
import common from "../locales/en/home.json";

const locales = { home, common } as const;

// this hook is temporary fix for the nextjs static export
export const useTranslation = (namespace: keyof typeof locales) => {
  const t = (key: string, obj?: { [key: string]: string | number }) => {
    const keys = key.split(".");
    let value: any = locales[namespace];
    keys.forEach((k) => {
      value = value[k];
    });

    if (typeof value === "string" && obj) {
      Object.keys(obj).forEach((k) => {
        value = value.replace(`{{${k}}}`, obj[k]);
      });
    }

    return value;
  };

  return { t };
};

export const Trans = ({
  i18nKey,
  components,
}: {
  i18nKey: string;
  components: { [key: string]: React.ReactNode };
}) => {
  const { t } = useTranslation(i18nKey.split(":")[0] as "home" | "common");
  let value = t(i18nKey.split(":")[1] as string);

  return parse(value);
};
