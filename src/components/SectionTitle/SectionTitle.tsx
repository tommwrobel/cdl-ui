import { PropsWithChildren } from "react";
import { cn, Title, TitleProps } from "@/ui";

type SectionTitleProps = TitleProps;

export const SectionTitle = ({
  children,
  className,
  ...props
}: SectionTitleProps) => {
  return (
    <Title
      className={cn(
        "text-2xl text-textColor-light text-gradient max-w-screen-sm",
        className
      )}
      {...props}
    >
      {children}
    </Title>
  );
};
