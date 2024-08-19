import { LuExternalLink } from "react-icons/lu";
import { Section } from "../Section/Section";
import { useTranslation } from "@/hooks/useTranslation";
import { Button, Title } from "@/ui";
import { SectionTitle } from "../SectionTitle/SectionTitle";

type Link = { href: string; label: string };
const links: Link[] = [
  { href: "https://bismuth.finance", label: "Bismuth Finance" },
  { href: "https://discord.gg/ADfwYbQJ7q", label: "Discord" },
  { href: "https://twitter.com/BismuthTechGem", label: "X (Twitter)" },
  {
    href: "https://www.facebook.com/profile.php?id=61550220960162",
    label: "Facebook",
  },
  {
    href: "https://coinmarketcap.com/pl/currencies/bismuth/",
    label: "CoinMarketCap",
  },
  { href: "https://www.coingecko.com/pl/waluty/bismuth", label: "CoinGecko" },
  { href: "https://github.com/bismuthfoundation", label: "GitHub" },
  { href: "https://bismuth.im/", label: "Explorer" },
  {
    href: "https://www.dextools.io/app/en/ether/pair-explorer/0xf4f82f8d84c529987201609cecee8ab136a50c8c?t=1712473531745",
    label: "Uniswap ERC-20 (Ether)",
  },
  {
    href: "https://www.dextools.io/app/en/bnb/pair-explorer/0x731b8244f818fd488d9dc516edd976a96459ae59?t=1712473620769",
    label: "PancakeSwap BSC",
  },
  {
    href: "https://xeggex.com/market/BIS_USDT ",
    label: "Xeggex BIS/USDT",
  },
  {
    href: "https://xeggex.com/market/BIS_LTC",
    label: "Xeggex BIS/LTC",
  },
];

export const LinksSection = () => {
  const { t } = useTranslation("home");

  return (
    <Section className="bg-neutral-950/50 py-12 md:py-12 border-t border-neutral/25">
      <div className="flex flex-col items-center mx-auto gap-12">
        <SectionTitle className="text-center">
          Get started today and become part of our vibrant community!
        </SectionTitle>
        <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-2 justify-between justify-items-center w-full">
          {links.map(({ href, label }) => (
            <a href={href} target="_blank" title={href} key={href}>
              <Button rel="noopener noreferrer" variant="outline" size="sm">
                {label}
                <LuExternalLink />
              </Button>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};
