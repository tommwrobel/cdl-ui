"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/ui";
import { buttonVariants } from "@/ui/Button/buttonVariants";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, icon, fullWidth, type = "button", ...props },
    ref,
  ) => {
    return (
      <button
        onAuxClick={props.onClick}
        className={cn(
          buttonVariants({ variant, size, icon, fullWidth, className }),
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
