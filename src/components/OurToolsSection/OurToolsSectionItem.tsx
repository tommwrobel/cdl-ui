import React, { HTMLAttributes, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { OurToolsDetailsModal } from "./OurToolsDetailsModal";
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

type PrimaryLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

type OurToolsSectionItemProps = HTMLAttributes<HTMLDivElement> & {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  links?: Link[];
  primaryLink?: PrimaryLink;
  free?: boolean;
  extendedDescription?: React.ReactNode;
};

export const OurToolsSectionItem = ({
  icon,
  title,
  description,
  free,
  links,
  children,
  className,
  extendedDescription,
  primaryLink,
  ...props
}: OurToolsSectionItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref);

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <>
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
              <div className="absolute top-0 right-0 flex items-center justify-center w-16 h-16">
                <div className="top-0 right-0 px-12 py-1 opacity-50 rotate-45 bg-gradient-to-r from-primary to-secondary group-hover:opacity-100 duration-300">
                  <Text className="text-sm font-bold text-white">FREE</Text>
                </div>
              </div>
            )}
            <div className="flex items-center gap-3">
              {icon}
              <Title size="xl" className="pr-8 text-gradient">
                {title}
              </Title>
            </div>
          </div>
          <Text className="text-textColor-dark">{description}</Text>
          <div className="flex flex-wrap items-center mt-auto gap-x-2 gap-y-0">
            {extendedDescription && (
              <a
                className="flex items-center underline cursor-pointer text-textColor hover:text-textColor-light text-md gap-1"
                onClick={() => setIsModalOpen(true)}
              >
                Read more
              </a>
            )}
            {extendedDescription && links && links.length > 0 && (
              <div className="text-sm opacity-50 cursor-default text-textColor-dark">
                /
              </div>
            )}
            {links &&
              links.map((link, index) => (
                <>
                  <a
                    href={link.href}
                    key={link.label}
                    className="flex items-center underline cursor-pointer text-textColor hover:text-textColor-light text-md gap-1"
                    onClick={link.onClick}
                  >
                    {link?.startIcon} {link.label} {link?.endIcon}
                  </a>
                  {links.length > 1 && index < links.length - 1 && (
                    <div className="text-sm opacity-50 cursor-default text-textColor-dark">
                      /
                    </div>
                  )}
                </>
              ))}
          </div>
        </div>
      </motion.div>
      {extendedDescription && (
        <OurToolsDetailsModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={title}
          content={extendedDescription}
          actionButton={primaryLink && { label: primaryLink.label, href: primaryLink.href, icon: primaryLink.icon }}
        />
      )}
    </>
  );
};

OurToolsSectionItem.displayName = "OurToolsSectionItem";
