"use client";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LuExternalLink } from "react-icons/lu";
import { Section } from "../Section/Section";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { TelegramIcon } from "../icons/TelegramIcon";
import { DiscordIcon } from "../icons/DiscordIcon";
import { OurToolsSectionItem } from "./OurToolsSectionItem";
import { OurToolsDivider } from "./OurToolsDivider";
import { MoreToolsItem } from "./MoreToolsItem";
import { useTranslation } from "@/hooks/useTranslation";
import { Text } from "@/ui";

export const OurToolsSection = () => {
  const { t } = useTranslation("home");

  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Section
      id="about"
      className="flex flex-col items-center gap-16"
      animate={false}
    >
      <SectionTitle animate>Our Tools</SectionTitle>
      <div
        ref={ref}
        className="items-start mx-auto grid grid-cols-1 md:grid-cols-2 max-w-screen-xl gap-8 md:gap-12"
      >
        <OurToolsSectionItem
          title="CryptoRoiWhales"
          icon={
            <img
              src="/images/crypto-roi-whales-min.png"
              className="rounded-full w-10 h-10 grayscale-[.5] group-hover:grayscale-0"
            />
          }
          description="Each day, we dive into the Ethereum blockchain (Other Blockchains Coming Soon), examining millions of addresses and billions of transactions. We identify whales holding over $1 million in ETH and tokens, showcasing their transactions in real time."
          extendedDescription={
            <>
              <Text>
                What sets us apart is our commitment to delivering actionable
                insights. Our groundbreaking algorithm meticulously calculates
                the Return on Investment (ROI) of these whale addresses,
                providing you with a comprehensive overview of their
                transactional history and performance. Through our signals, you
                gain unparalleled visibility into the movements of these
                influential whales, empowering you to make informed decisions in
                the ever-evolving landscape of the crypto market.
              </Text>
              <Text>
                In a market flooded with noise and uncertainty, our platform
                stands as a beacon of clarity and opportunity. Join our telegram
                channel today and unlock a world of insights, all at your
                fingertips, all for free. Don&apos;t miss out on the chance to
                stay ahead of the curve and revolutionize your approach to
                crypto trading.
              </Text>
            </>
          }
          primaryLink={{
            label: "Check out Telegram!",
            href: "#",
            icon: <TelegramIcon />,
          }}
          links={[
            { label: "Telegram", href: "#", endIcon: <LuExternalLink /> },
          ]}
          free
        />

        <OurToolsSectionItem
          title="CryptoRoiSharks"
          icon={
            <img
              src="/images/crypto-roi-sharks-min.png"
              className="rounded-full w-10 h-10 grayscale-[.5] group-hover:grayscale-0"
            />
          }
          description='Like with "CryptoRoiWhales", we analyze billions of Ethereum transactions daily, identifying top-performing addresses. We showcase all transactions of addresses that have achieved over 1000% profit in their entire transaction history.'
          extendedDescription={
            <>
              <Text>
                Our system then tracks every transaction of these addresses so
                you can see what the top cryptocurrency traders are buying and
                selling! And the pest part is, we offer this service for free!
              </Text>
              <Text>
                If you appreciate what we do, find it useful, and it helps you
                in trading, you can support us by sharing, liking, or promoting
                our project within crypto groups on platforms such as X,
                Telegram, and Discord. We put a lot of effort into providing you
                with the most up-to-date and useful information, and we give it
                to you mostly for free. Your support helps us continue to
                develop and offer you even more.
              </Text>
            </>
          }
          primaryLink={{
            label: "Check out Telegram!",
            href: "#",
            icon: <TelegramIcon />,
          }}
          links={[
            { label: "Telegram", href: "#", endIcon: <LuExternalLink /> },
          ]}
          free
        />

        <OurToolsSectionItem
          title="BigFishGoNiche"
          icon={
            <img
              src="/images/big-fish-go-niche-min.png"
              className="rounded-full w-10 h-10 grayscale-[.5] group-hover:grayscale-0"
            />
          }
          description="In this project, we show how the 'Whales' and 'Sharks' from our two projects described above enter niche projects with low liquidity on specific DEX pools. Genius, right?"
          extendedDescription={
            <>
              <Text>
                The signals you receive here are top-notch. Cream of the crop.
                You simply get notified when an address with large holdings
                (equivalent to over 1M USDT) or an address with excellent
                performance (ROI over 1000%) invests in a niche token. I
                don&apos;t think I need to explain the value of this
                information. And, as always with us (no surprises here), you
                have free access to signals from the Ethereum blockchain on our
                Telegram!
              </Text>
              <Text>
                We wish you success! If you appreciate what we do, find it
                useful, and it helps you in trading, you can also support us by
                sharing, liking, or promoting our project within crypto groups
                on platforms such as X, Telegram, and Discord.
              </Text>
            </>
          }
          primaryLink={{
            label: "Check out Telegram!",
            href: "#",
            icon: <TelegramIcon />,
          }}
          links={[
            { label: "Telegram", href: "#", endIcon: <LuExternalLink /> },
          ]}
          free
        />

        <OurToolsSectionItem
          title="CryptoWakeUps"
          icon={
            <img
              src="/images/crypto-wake-ups-min.png"
              className="rounded-full w-10 h-10 grayscale-[.5] group-hover:grayscale-0"
            />
          }
          description="In this project, we monitor all tokens on Uniswap. If a token had low trading volume in the last 30 days and suddenly sees a large transaction, we'll notify you immediately. It might be just a wake-up call or a full resurrection."
          extendedDescription={
            <>
              <Text>
                In this project, we monitor all tokens on Uniswap and Sushiswap.
                If a token had low trading volume in the last 30 days and
                suddenly sees a large transaction, we&apos;ll notify you
                immediately. It might be just a wake-up call or a full
                resurrection. Either way, it&apos;s important info because such
                awakenings can lead to huge price rallies, giving great profits
                to those who see them first. And with us, you&apos;ll be one of
                the first to know.
              </Text>
              <Text>
                Of course, just like with the previous three projects, you have
                free access to signals from the Ethereum blockchain on our
                Telegram!
              </Text>
              <Text>
                We wish you success and, as always, we&apos;d appreciate it if
                you spread the word about us.
              </Text>
            </>
          }
          primaryLink={{
            label: "Check out Telegram!",
            href: "#",
            icon: <TelegramIcon />,
          }}
          links={[
            { label: "Telegram", href: "#", endIcon: <LuExternalLink /> },
          ]}
          free
        />
      </div>
      <OurToolsDivider />
      <div
        ref={ref}
        className="items-start mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 max-w-screen-xl gap-8 md:gap-12"
      >
        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title="Binance Price Jumps"
          description="Maximize your trading opportunities with our Price Jumps Categories, tracking rapid price spikes on Binance over 1, 5, 15-minute, and 1-hour intervals."
          extendedDescription={
            <>
              <Text>
                We provide precise percentage changes, along with insights into
                other time frames and volume. The number of rockets or arrows
                instantly indicates the strength of each movement, categorized
                into 3 levels.
              </Text>
              <Text>
                For Binance, Price Jump Categories are organized by pairs with
                BTC and USDT, while on Uniswap, pairs are displayed with wETH.
              </Text>
              <Text>
                Explore detailed descriptions, percentage thresholds, and more
                on our Discord under Categories-Descriptions.
              </Text>
            </>
          }
          links={[
            {
              label: "Discord",
              href: "https://discord.gg/vznWRWs6hz",
              endIcon: <LuExternalLink />,
            },
          ]}
          primaryLink={{
            label: "Check out Discord!",
            href: "https://discord.gg/vznWRWs6hz",
            icon: <DiscordIcon />,
          }}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title={"Uniswap Price Jumps"}
          description="Capitalize on market moves by tracking sharp price increases on Uniswap over 1, 5, 15-minute, and 1-hour intervals."
          extendedDescription={
            <>
              <Text>
                We provide precise percentage changes, along with insights into
                other time frames and volume. The number of rockets or arrows
                instantly indicates the strength of each movement, categorized
                into 3 levels.
              </Text>
              <Text>
                For Binance, Price Jump Categories are organized by pairs with
                BTC and USDT, while on Uniswap, pairs are displayed with wETH.
              </Text>
              <Text>
                Explore detailed descriptions, percentage thresholds, and more
                on our Discord under Categories-Descriptions.{" "}
              </Text>
            </>
          }
          links={[
            {
              label: "Discord",
              href: "https://discord.gg/vznWRWs6hz",
              endIcon: <LuExternalLink />,
            },
          ]}
          primaryLink={{
            label: "Check out Discord!",
            href: "https://discord.gg/vznWRWs6hz",
            icon: <DiscordIcon />,
          }}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title="Binance Price Amplitudes"
          description="Experience the excitement of trading with our Binance High Amplitudes Categories, highlighting significant price swings in 1, 5, 15-minute, and 1-hour intervals."
          extendedDescription={
            <>
              <Text>
                These highlight significant movements that might revert close to
                the starting point by the interval&apos;s end.
              </Text>
              <Text>
                On Binance, High Amplitude Categories are categorized by pairs
                with BTC and USDT, and on Uniswap, they&apos;re paired with
                wETH.
              </Text>
              <Text>
                Gain deeper insights into these price changes across various
                time intervals and observe the corresponding volume for both
                category types. Elevate your trading experience with
                comprehensive data.
              </Text>
            </>
          }
          links={[
            {
              label: "Discord",
              href: "https://discord.gg/vznWRWs6hz",
              endIcon: <LuExternalLink />,
            },
          ]}
          primaryLink={{
            label: "Check out Discord!",
            href: "https://discord.gg/vznWRWs6hz",
            icon: <DiscordIcon />,
          }}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title="Uniswap Price Amplitudes"
          description="Feel the pulse of the market with our High Amplitudes Categories, featuring major price swings on Uniswap in 1, 5, 15-minute, and 1-hour intervals"
          extendedDescription={
            <>
              <Text>
                These highlight significant movements that might revert close to
                the starting point by the interval&apos;s end.
              </Text>
              <Text>
                On Binance, High Amplitude Categories are categorized by pairs
                with BTC and USDT, and on Uniswap, they&apos;re paired with
                wETH.
              </Text>
              <Text>
                Gain deeper insights into these price changes across various
                time intervals and observe the corresponding volume for both
                category types. Elevate your trading experience with
                comprehensive data.
              </Text>
            </>
          }
          links={[
            {
              label: "Discord",
              href: "https://discord.gg/vznWRWs6hz",
              endIcon: <LuExternalLink />,
            },
          ]}
          primaryLink={{
            label: "Check out Discord!",
            href: "https://discord.gg/vznWRWs6hz",
            icon: <DiscordIcon />,
          }}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title="BinanceTop Gainers/Losers"
          description="Discover trading opportunities with our BinanceTop Gainers/Losers category, highlighting coins with the biggest price changes in 1, 5, 15-minute, and 1-hour intervals, based on Price Jumps."
          extendedDescription={
            <>
              <Text>
                For Binance, these categories are segmented into pairs with BTC
                and USDT, while on Uniswap, they&apos;re paired with wETH.
              </Text>
              <Text>
                Explore how these price changes performed across different time
                intervals, coupled with insights into the volume from the
                specified time interval. Elevate your trading strategy with a
                comprehensive view of market dynamics!
              </Text>
            </>
          }
          links={[
            {
              label: "Discord",
              href: "https://discord.gg/vznWRWs6hz",
              endIcon: <LuExternalLink />,
            },
          ]}
          primaryLink={{
            label: "Check out Discord!",
            href: "https://discord.gg/vznWRWs6hz",
            icon: <DiscordIcon />,
          }}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title="Uniswap Top Gainers/Losers"
          description="Spot trading opportunities with our Top Gainers/Losers category, showcasing coins with the largest price swings over 1, 5, 15-minute, and 1-hour intervals, driven by Price Jumps."
          extendedDescription={
            <>
              <Text>
                For Binance, these categories are segmented into pairs with BTC
                and USDT, while on Uniswap, they&apos;re paired with wETH.
              </Text>
              <Text>
                Explore how these price changes performed across different time
                intervals, coupled with insights into the volume from the
                specified time interval. Elevate your trading strategy with a
                comprehensive view of market dynamics!
              </Text>
            </>
          }
          links={[
            {
              label: "Discord",
              href: "https://discord.gg/vznWRWs6hz",
              endIcon: <LuExternalLink />,
            },
          ]}
          primaryLink={{
            label: "Check out Discord!",
            href: "https://discord.gg/vznWRWs6hz",
            icon: <DiscordIcon />,
          }}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title="Binance MACD"
          description="Dive into market analysis with our MACD (Moving Average Convergence Divergence) category, where we unveil the status of this significant indicator."
          extendedDescription={
            <>
              <Text>
                Discover whether the MACD line has crossed the signal line from
                below or above – a pivotal event in deciphering market trends.
                Our advanced calculation method not only identifies the
                crossover but also measures its strength. We&apos;ve set precise
                thresholds to minimize market noise and ensure relevance.
              </Text>
              <Text>
                On Binance, we categorize these occurrences in relation to BTC
                and USDT channels, while on Uniswap, categorization is done in
                relation to wETH. Stay informed about crucial market movements
                with our detailed MACD analysis!
              </Text>
            </>
          }
          links={[
            {
              label: "Discord",
              href: "https://discord.gg/vznWRWs6hz",
              endIcon: <LuExternalLink />,
            },
          ]}
          primaryLink={{
            label: "Check out Discord!",
            href: "https://discord.gg/vznWRWs6hz",
            icon: <DiscordIcon />,
          }}
          free
        />

        <OurToolsSectionItem
          icon={<img src="/images/cs-logo.png" className="w-10 h-10" />}
          title="Uniswap MACD"
          description=" Analyze market trends with our MACD (Moving Average Convergence Divergence) category, providing insights into the latest movements of this crucial indicator."
          extendedDescription={
            <>
              <Text>
                Discover whether the MACD line has crossed the signal line from
                below or above – a pivotal event in deciphering market trends.
                Our advanced calculation method not only identifies the
                crossover but also measures its strength. We&apos;ve set precise
                thresholds to minimize market noise and ensure relevance.
              </Text>
              <Text>
                On Binance, we categorize these occurrences in relation to BTC
                and USDT channels, while on Uniswap, categorization is done in
                relation to wETH. Stay informed about crucial market movements
                with our detailed MACD analysis!
              </Text>
            </>
          }
          links={[
            {
              label: "Discord",
              href: "https://discord.gg/vznWRWs6hz",
              endIcon: <LuExternalLink />,
            },
          ]}
          primaryLink={{
            label: "Check out Discord!",
            href: "https://discord.gg/vznWRWs6hz",
            icon: <DiscordIcon />,
          }}
          free
        />

        <MoreToolsItem />
      </div>
    </Section>
  );
};
