import type { Metadata } from "next";
import localFont from "next/font/local";

import { metaData } from "@/data";

import "./globals.css";

const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/gilroy/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/gilroy/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
  icons: metaData.icons,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable}`}>
        {/* header */}
        <main>{children}</main>
        {/* footer */}
      </body>
    </html>
  );
}
