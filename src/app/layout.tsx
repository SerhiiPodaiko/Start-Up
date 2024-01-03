import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import {cn} from "@/shared/ui/uitils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
