import React, { forwardRef, HTMLAttributes, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn, Text, Title } from "@/ui";
import { link } from "fs";

type Link = {
  label: string;
  href: string;
};

type OurToolsSectionItemProps = HTMLAttributes<HTMLDivElement> & {
  icon: React.ReactNode;
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
      className="w-full"
    >
      <div
        ref={ref}
        className={cn(
          "relative group bg-bgColor/40 border-2 border-neutral-600/50 border-solid backdrop-blur-xs rounded-2xl w-full p-8 flex flex-col gap-6 justify-start",
          "hover:scale-105 hover:border-secondary duration-300 hover:bg-bgColor/25 overflow-hidden",
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
          <Title size="xl" className="text-secondary">
            {title}
          </Title>
        </div>
        <Text className="text-textColor-dark">{description}</Text>
        <div className="flex items-center gap-3">
          {links &&
            links.map((link, index) => (
              <>
                <a
                  href={link.href}
                  key={link.label}
                  className="text-textColor hover:text-textColor-light underline"
                >
                  {link.label}
                </a>
                {links.length > 1 && index < links.length - 1 && (
                  <div className="rounded-full w-1 h-1 bg-textColor-dark"></div>
                )}
              </>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

OurToolsSectionItem.displayName = "AboutSectionBox";
