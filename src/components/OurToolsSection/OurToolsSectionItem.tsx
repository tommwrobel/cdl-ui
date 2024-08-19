import React, { HTMLAttributes, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn, Text, Title } from "@/ui";

type Link = {
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
} & (
  | {
      href: string;
      onClick?: never;
    }
  | { onClick: () => void; href?: never }
);

type OurToolsSectionItemProps = HTMLAttributes<HTMLDivElement> & {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  links?: Link[];
  free?: boolean;
};

export const OurToolsSectionItem = ({
  icon,
  title,
  description,
  free,
  links,
  children,
  className,
  ...props
}: OurToolsSectionItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      animate={controls}
      initial={"hidden"}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full h-full"
    >
      <div
        ref={ref}
        className={cn(
          "relative h-full group bg-bgColor/25 border border-neutral-600/50 border-solid backdrop-blur-xs rounded-2xl w-full p-8 flex flex-col gap-6 justify-start",
          "hover:scale-105 hover:border-secondary duration-300 hover:bg-bgColor/50 overflow-hidden",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          {free && (
            <div className="absolute flex items-center justify-center w-16 h-16 top-0 right-0">
              <div className="right-0 top-0 rotate-45 bg-gradient-to-r from-primary to-secondary px-12 py-1 opacity-50 group-hover:opacity-100 duration-300">
                <Text className="text-sm text-white font-bold">FREE</Text>
              </div>
            </div>
          )}
          <div className="flex gap-3 items-center">
            {icon}
            <Title size="xl" className="text-gradient pr-8">
              {title}
            </Title>
          </div>
        </div>
        <Text className="text-textColor-dark">{description}</Text>
        <div className="flex items-center gap-x-2 gap-y-0 flex-wrap mt-auto">
          {links &&
            links.map((link, index) => (
              <>
                <a
                  href={link.href}
                  key={link.label}
                  className="text-textColor hover:text-textColor-light underline text-md flex items-center gap-1 cursor-pointer"
                  onClick={link.onClick}
                >
                  {link?.startIcon} {link.label} {link?.endIcon}
                </a>
                {links.length > 1 && index < links.length - 1 && (
                  <div className="opacity-50 text-textColor-dark text-sm cursor-default">
                    /
                  </div>
                )}
              </>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

OurToolsSectionItem.displayName = "OurToolsSectionItem";
