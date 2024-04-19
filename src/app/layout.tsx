import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { cn } from "../ui";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bismuth: the Hidden Gem of Cryptocurrency",
  description:
    "Discover Bismuth, the overlooked cryptocurrency with immense potential. With robust technical capabilities, low cost, and a thriving community, Bismuth offers stability, security, and accessibility. Explore its unique features and join the journey to uncover its true value in the evolving world of digital assets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          sora.className,
          "bg-bgColor-dark h-screen overflow-hidden"
        )}
      >
        {children}
      </body>
    </html>
  );
}
