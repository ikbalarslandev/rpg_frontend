import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const customFont = localFont({
  src: [
    {
      path: "../public/fonts/8bit16.ttf",
      weight: "500",
    },
  ],
  variable: "--font-custom",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={customFont.variable}>{children}</body>
    </html>
  );
}
