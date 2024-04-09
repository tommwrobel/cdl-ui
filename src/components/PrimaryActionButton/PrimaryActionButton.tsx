import useTranslation from "next-translate/useTranslation";
import { Button } from "../../ui";
import { XIcon } from "../icons/XIcon";

export const PrimaryActionButton = () => {
  const { t } = useTranslation("home");
  return (
    <a
      href="https://discord.gg/rYmBNuF6XY"
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
