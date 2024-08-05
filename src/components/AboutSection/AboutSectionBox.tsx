import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/ui";

type AboutSectionBoxProps = HTMLAttributes<HTMLDivElement>;

export const AboutSectionBox = forwardRef<HTMLDivElement, AboutSectionBoxProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative group bg-bgColor/20 border-2 border-neutral-600/50 border-solid backdrop-blur-xs rounded-2xl w-full p-8 flex flex-col gap-6 justify-start overflow-hidden",
          "hover:scale-105 hover:border-secondary duration-300 hover:bg-neutral-600/25",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AboutSectionBox.displayName = "AboutSectionBox";
