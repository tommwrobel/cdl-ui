import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React, { PropsWithChildren } from "react";
import { LuX } from "react-icons/lu";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Button, Text } from "@/ui";

type OurToolsDetailsModalProps = PropsWithChildren & {
  open: boolean;
  onClose: () => void;
  title: React.ReactNode;
  actionButton?: { label: string; href: string; icon: React.ReactNode };
  content: React.ReactNode;
};

export const OurToolsDetailsModal = ({
  content,
  title,
  open,
  onClose,
  actionButton,
}: OurToolsDetailsModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        className="fixed inset-0 bg-bgColor-dark/75 opcity-100 data-[closed]:opacity-0 duration-300"
        transition
      />
      <div className="fixed inset-0 flex items-center justify-center w-screen p-6">
        <DialogPanel
          transition
          className="flex flex-col gap-10 bg-bg-element bg-no-repeat relative md:max-w-screen-md md:max-h-[80%] max-h-[100%] w-[100%] rounded-lg border lg:p-12 p-8 border-primary bg-bgColor duration-500 ease-out opacity-100 data-[closed]:opacity-0 data-[closed]:translate-y-8 data-[closed]:scale-90"
        >
          <DialogTitle className="flex items-center gap-4">
            <Button
              onClick={onClose}
              variant="ghost"
              icon
              className="absolute z-50 top-4 right-4"
            >
              <LuX />
            </Button>
            <SectionTitle className="text-xl sm:text-2xl">{title}</SectionTitle>
          </DialogTitle>
          <Description className="flex flex-col flex-grow gap-6 overflow-auto scrollbar-thumb-secondary scrollbar-track-transparent scrollbar-thin">
            {content}
          </Description>
          {actionButton && (
            <div className="flex justify-center gap-4 shrink-0 flex-col sm:flex-row">
              <Button variant="default">
                {actionButton.icon}
                {actionButton.label}
              </Button>
              <Button variant="ghost" onClick={onClose}>
                <LuX />
                Close
              </Button>
            </div>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
