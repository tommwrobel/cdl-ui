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
  free?: boolean;
  title: React.ReactNode;
  actionButton?: { label: string; href: string; icon: React.ReactNode };
  content: React.ReactNode;
};

export const OurToolsDetailsModal = ({
  content,
  title,
  free,
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
      <div className="fixed inset-0 flex items-center justify-center w-screen p-8">
        <DialogPanel
          transition
          className="flex flex-col gap-10 bg-bg-element bg-no-repeat relative md:max-w-screen-md md:max-h-[60%] max-h-[100%] w-[100%] rounded-lg border p-12 border-primary bg-bgColor duration-500 ease-out opacity-100 data-[closed]:opacity-0 data-[closed]:translate-y-8 data-[closed]:scale-90"
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
            <SectionTitle className="flex items-center gap-4">
              {title}
              {free && (
                <div className="flex items-center h-6 px-3 py-2 text-sm rounded-full leading-0 text-textColor-light bg-gradient-to-tr from secondary to-primary">
                  FREE
                </div>
              )}
            </SectionTitle>
          </DialogTitle>
          <Description className="flex flex-col flex-grow gap-6 overflow-auto scrollbar-thumb-secondary scrollbar-track-transparent scrollbar-thin">
            {/* {content} */}
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              non vehicula enim, sit amet venenatis diam. Mauris eros nulla,
              pellentesque sit amet fermentum eu, blandit ut magna. Donec et
              lorem a dui cursus ullamcorper. Phasellus tristique nunc ac tortor
              facilisis posuere. Nulla consequat at dolor et egestas. Morbi
              consectetur sed neque eu ultricies. Morbi quis sem et leo volutpat
              tempus. Vestibulum a metus velit. Cras rhoncus magna maximus risus
              porta fringilla id vitae mauris. Duis eget elit cursus, facilisis
              odio a, pharetra elit. Vestibulum blandit, tellus ut sollicitudin
              condimentum, sapien mauris egestas est, vel dignissim felis tellus
              id lorem. Nullam fermentum cursus mi, posuere tincidunt metus
              gravida et. Curabitur tempus leo eget tellus porta, eu sagittis
              nisi interdum.
            </Text>
            <Text>
              Nam vitae aliquam urna. Morbi congue, dui nec commodo gravida,
              massa augue condimentum augue, et euismod nisi ligula eget lectus.
              Phasellus suscipit erat massa, eget facilisis nulla scelerisque
              non. Vestibulum ullamcorper magna eu elit fringilla, id pretium
              risus viverra. Vivamus porta, lacus id porttitor maximus, felis
              lectus vulputate ligula, et vulputate eros metus ut lacus. Quisque
              posuere justo nec dictum vehicula. Curabitur ullamcorper blandit
              quam rhoncus finibus. Quisque in ultrices justo. Nunc lacinia vel
              dolor quis porttitor. Curabitur eget lorem nec elit pharetra
              auctor quis eu sem. Vivamus pretium imperdiet semper. Curabitur
              pretium massa erat, eu posuere mauris luctus vel. Curabitur dictum
              rhoncus tellus, ac pulvinar sem gravida quis. Aenean luctus lectus
              mi, non molestie enim euismod eget.
            </Text>
          </Description>
          {actionButton && (
            <div className="flex justify-center gap-4 shrink-0">
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
