import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "transition-all inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium tracking-wide duration-150",
    "focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-primary/75",
    "disabled:pointer-events-none disabled:opacity-40 text-textColor-light shrink-0 active:scale-95",
  ],
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary-500 active:bg-primary-600",
        outline: [
          "border border-primary/50 hover:border-primary-500 text-textColor hover:text-textColor-light active:bg-primary/25 hover:bg-primary/15",
        ],
        danger: "bg-danger text-white hover:bg-danger-700 active:bg-danger-600",
        success:
          "bg-success text-white hover:bg-success-700 active:bg-success-600",
        warning:
          "bg-warning text-white hover:bg-warning-700 active:bg-warning-600",
        ghost: [
          "text-textColor hover:bg-neutral/25 hover:text-textColor-light active:bg-transparent",
        ],
      },
      size: {
        sm: "h-9 px-3 gap-2 rounded-xl",
        md: "h-12 px-4 gap-2 rounded-2xl",
        lg: "h-16 px-6 gap-3 rounded-2xl",
      },
      icon: { true: "", false: "" },
      fullWidth: { true: "w-full", false: "" },
    },

    compoundVariants: [
      {
        size: "sm",
        icon: true,
        className: "h-6 w-6 p-0",
      },
      {
        size: "md",
        icon: true,
        className: "h-9 w-9 p-0",
      },
      { size: "lg", icon: true, className: "h-10 w-10 p-0 text-lg" },
    ],

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);
