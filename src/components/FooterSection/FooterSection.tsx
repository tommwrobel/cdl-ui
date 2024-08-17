import { Section } from "../Section/Section";
import { FacebookIcon } from "../icons/FacebookIcon";
import { XIcon } from "../icons/XIcon";
import { Button, Text } from "@/ui";

export const FooterSection = () => {
  return (
    <Section className="py-6 md:py-6" animate={false}>
      <div className="max-w-screen-xl flex flex-col gap-4 md:flex-row items-center justify-between mx-auto">
        <div>
          <Text className="text-center">
            Copyright © {new Date().getFullYear()} CryptoDataLab. All rights
            reserved.
          </Text>
        </div>
        <div className="flex gap-1 items-center">
          <Text>Check our social media:</Text>
          <a
            href="https://www.facebook.com/profile.php?id=61550220960162"
            target="_blank"
          >
            <Button variant="ghost" className="text-xl" icon>
              <FacebookIcon />
            </Button>
          </a>
          <a href="https://twitter.com/BismuthTechGem" target="_blank">
            <Button variant="ghost" className="text-xl" icon>
              <XIcon />
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
};
