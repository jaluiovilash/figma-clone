import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { Room } from "./Room";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: '--font-work-sans',
  weight: ['400', '600', '700']
});

export const metadata: Metadata = {
  title: "Figma Clone",
  description: "A minimalist of figma clone using fabric.js and liveblocks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </Head>
      <body className={`${workSans.className} bg-gray-900`}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
