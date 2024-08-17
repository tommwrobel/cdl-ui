import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { cn } from "../ui";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto Data Lab - The Art of Crypto Analysis!",
  description:
    "The Art of Crypto Analysis! Unveil Market Trends, Optimize Strategies, and Make Informed Decisions with Our Cutting-Edge Tools and Insights!",
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
