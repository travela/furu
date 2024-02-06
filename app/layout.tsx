import type { Metadata } from "next";
import { Changa } from "next/font/google";
import "./globals.css";

const changa = Changa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "This is Florian Mies",
  description: "curriculum vitae of florian mies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${changa.className} cursor-grab`}>{children}</body>
    </html>
  );
}
