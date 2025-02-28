import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/Menu";
import { ReactNode } from "react";
import {
  manropetFont,
  geologicaFont,
  montserratFont,
  outfitFont,
  urbanistFont,
} from "@/app/fonts";

export const metadata: Metadata = {
  title: "Ballwol",
  description: "Ballwol is a modern e-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex max-h-[100vh] ${manropetFont.variable} ${geologicaFont.variable} ${montserratFont.variable} ${outfitFont.variable} ${urbanistFont.variable}`}
      >
        <Menu
          pages={[
            { icon: "search", path: "/search" },
            { icon: "compass", path: "/compass", badge: 6 },
            { icon: "conversation", path: "/conversation", badge: 44 },
            { icon: "cart", path: "/cart", badge: 245 },
            { icon: "user", path: "/user", active: true },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
