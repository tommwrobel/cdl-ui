import useTranslation from "next-translate/useTranslation";
import { Button } from "../../ui";
import { XIcon } from "../icons/XIcon";

export const PrimaryActionButton = () => {
  const { t } = useTranslation("home");
  return (
    <a
      href="https://twitter.com/BismuthTechGem"
      target="_blank"
      title={t("FOLLOW_TWITTER")}
    >
      <Button>
        <XIcon className="animate-pulse" width={20} height={20} />
        {t("FOLLOW_TWITTER")}
      </Button>
    </a>
  );
};
