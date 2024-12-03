import { Section } from "../Section/Section";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Button } from "@/ui";

type Link = { href: string; label: string; icon?: React.ReactNode };
const links: Link[] = [
  {
    href: "https://www.facebook.com/profile.php?id=61561424674133",
    label: "CDL Facebook",
    icon: <img src="/images/cdl-logo.svg" className="w-6 h-6" />,
  },
  {
    href: "https://coinmarketcap.com/community/profile/CryptoDataLab/",
    label: "CDL CoinMarketCap",
    icon: <img src="/images/cdl-logo.svg" className="w-6 h-6" />,
  },
  {
    href: "https://x.com/CryptoDataLab",
    label: "CDL X (Twitter)",
    icon: <img src="/images/cdl-logo.svg" className="w-6 h-6" />,
  },
  {
    href: "https://t.me/+Sqs9NzTcWOM4MzZk",
    label: "CDL Telegram",
    icon: <img src="/images/cdl-logo.svg" className="w-6 h-6" />,
  },
  {
    href: "https://cryptosanctuary.io/",
    label: "Crypto Sanctuary",
    icon: <img src="/images/cs-logo.png" className="w-6 h-6" />,
  },
  {
    href: "https://discord.gg/vznWRWs6hz",
    label: "CS Discord",
    icon: <img src="/images/cs-logo.png" className="w-6 h-6" />,
  },
  {
    href: "https://x.com/CryptoSanctuar",
    label: "CS X (Twitter)",
    icon: <img src="/images/cs-logo.png" className="w-6 h-6" />,
  },
  {
    href: "https://www.bismuthtechgem.com/",
    label: "Bismuth Tech Gem",
    icon: <img src="/images/bismuth-logo.svg" className="w-6 h-6" />,
  },
];

export const LinksSection = () => {
  return (
    <Section className="py-12 border-t bg-neutral-950/50 md:py-12 border-neutral/25">
      <div className="flex flex-col items-center mx-auto gap-12">
        <SectionTitle className="text-center">
          Get started today and become part of our vibrant community!
        </SectionTitle>
        <div className="justify-between w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center">
          {links.map(({ href, label, icon }) => (
            <a
              href={href}
              target="_blank"
              title={href}
              key={href}
              className="w-full"
            >
              <Button
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                className="w-full"
              >
                {icon}
                {label}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};
