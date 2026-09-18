import type { Metadata } from "next";
import { Inter, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "寓易室內設計 U.E Design",
  description:
    "寓易室內設計 U.E Design｜住宅空間設計、老屋翻修、新成屋設計與軟裝規劃。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${inter.variable} ${notoSansTC.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}