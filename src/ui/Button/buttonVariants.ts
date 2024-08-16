import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "transition-all inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium tracking-wide duration-150",
    "focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-primary/75",
    "disabled:pointer-events-none disabled:opacity-40 text-neutral-50 shrink-0 active:scale-95",
  ],
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary-500 active:bg-primary-600 hover:shadow-2xl shadow-primary-400",
        outline: [
          "border border-neutral/25 border-dashed hover:border-primary-500 text-textColor-light hover:text-textColor-dark active:bg-primary/25 hover:bg-primary/15",
        ],
        danger: "bg-danger text-white hover:bg-danger-700 active:bg-danger-600",
        success:
          "bg-success text-white hover:bg-success-700 active:bg-success-600",
        warning:
          "bg-warning text-white hover:bg-warning-700 active:bg-warning-600",
        ghost: [
          "text-textColor hover:bg-neutral-400/25 hover:text-textColor-dark active:bg-neutral-300/25",
        ],
      },
      size: {
        sm: "h-9 px-3 gap-2 rounded-lg",
        md: "h-12 px-4 gap-2 rounded-lg",
        lg: "h-16 px-6 gap-3 rounded-lg",
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
