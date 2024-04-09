import { Button, ButtonProps, cn } from "../../ui";

type CardButtonProps = ButtonProps & {
  isActive?: boolean;
};

export const CardButton = ({
  isActive,
  children,
  className,
  ...props
}: CardButtonProps) => {
  return (
    <Button
      size="sm"
      variant="outline"
      className={cn(
        isActive &&
          "bg-secondary border-secondary disabled:opacity-100 text-white",
        className
      )}
      disabled={isActive}
      {...props}
    >
      {children}
    </Button>
  );
};
