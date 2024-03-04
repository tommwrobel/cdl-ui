import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/ui";

type AboutSectionBoxProps = HTMLAttributes<HTMLDivElement>;

export const AboutSectionBox = forwardRef<HTMLDivElement, AboutSectionBoxProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative group bg-bgColor/20 border-2 border-transparent backdrop-blur-xs rounded-3xl w-full p-8 flex flex-col gap-6 justify-center overflow-hidden",
          "hover:scale-105 hover:border-secondary duration-300",
          className
        )}
        {...props}
      >
        {children}
        <div className="absolute w-72 h-72 -bottom-48 -right-48 group-hover:-right-36 group-hover:-bottom-36 bg-primary rounded-full blur-xl opacity-10 group-hover:opacity-20 duration-500" />
        <div className="absolute w-72 h-72 -top-48 -left-48 group-hover:-left-36 group-hover:-top-36 bg-secondary rounded-full blur-xl opacity-10 group-hover:opacity-20 duration-500" />
      </div>
    );
  }
);

AboutSectionBox.displayName = "AboutSectionBox";
