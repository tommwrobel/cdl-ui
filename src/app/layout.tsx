import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../ui";

const inter = Inter({ subsets: ["latin"] });

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
          inter.className,
          "bg-bgColor-dark h-screen overflow-hidden"
        )}
      >
        {children}
      </body>
    </html>
  );
}
