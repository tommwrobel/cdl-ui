import { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const textVariants = cva(["text-textColor font-normal"], {
  variants: {
    size: {
      xl: "text-xl",
      lg: "text-lg",
      md: "text-md",
      sm: "text-sm",
      xs: "text-xs",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      bold: "font-bold",
    },
    brightness: {
      light: "text-textColor-light",
      normal: "text-textColor",
      dark: "text-textColor-dark",
    },
    defaultVariants: {
      size: "md",
      weight: "light",
      brightness: "normal",
    },
  },
});

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span";
}

export const Text = ({
  size = "md",
  weight = "light",
  brightness = "normal",
  as = "p",
  children,
  className,
  ...props
}: TextProps) => {
  const Component = as;

  return (
    <Component
      className={cn(textVariants({ size, weight, brightness, className }))}
      {...props}
    >
      {children}
    </Component>
  );
};
