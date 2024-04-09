import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { cn } from "../ui";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto Sanctuary",
  description: "Real time crypto insights: track, trade, triumph!",
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
