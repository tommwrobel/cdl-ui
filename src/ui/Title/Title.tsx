import { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const titleVariants = cva(["text-textColor-light font-normal"], {
  variants: {
    size: {
      "4xl": "text-4xl",
      "3xl": "text-3xl",
      "2xl": "text-2xl",
      xl: "text-xl",
      lg: "text-lg",
      md: "text-md",
      sm: "text-sm",
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
      size: "lg",
      weight: "normal",
      brightness: "light",
    },
  },
});

export interface TitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  as?: "h1" | "h2" | "h3" | "h4";
}

export const Title = ({
  size = "md",
  weight = "normal",
  brightness = "light",
  as = "h1",
  children,
  className,
  ...props
}: TitleProps) => {
  const Component = as;

  return (
    <Component
      className={cn(titleVariants({ size, weight, brightness, className }))}
      {...props}
    >
      {children}
    </Component>
  );
};
