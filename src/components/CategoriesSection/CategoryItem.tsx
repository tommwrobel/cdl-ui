import { HTMLAttributes, ReactNode } from "react";
import { Title, cn } from "@/ui";

type CategoryItemProps = HTMLAttributes<HTMLDivElement> & {
  img: ReactNode;
  header: ReactNode;
};

export const CategoryItem = ({
  img,
  header,
  children,
  ...props
}: CategoryItemProps) => {
  return (
    <div className="w-full">
      <div
        {...props}
        className={cn(
          "bg-bgColor/20 h-full relative border-2 border-transparent hover:border-secondary duration-300 w-full overflow-hidden p-12 flex flex-col md:flex-row gap-10 rounded-[48px] backdrop-blur-xs items-center md:items-start",
          props.className
        )}
      >
        <div className="w-72 lg:w-96 h-full flex justify-center shrink-0">
          {img}
        </div>
        <div className="flex flex-col gap-6">
          <Title size="xl" className="text-center md:text-left">
            {header}
          </Title>
          {children}
        </div>
        <div className="absolute w-72 h-72 -right-36 -bottom-36 bg-primary rounded-full blur-xl opacity-10 group-hover:opacity-20 duration-500" />
        <div className="absolute w-72 h-72 -left-36 -top-36 bg-secondary rounded-full blur-xl opacity-10 group-hover:opacity-20 duration-500" />
      </div>
    </div>
  );
};
