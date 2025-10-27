import type { Metadata } from "next";
import { Changa } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

const changa = Changa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Furu",
  description: "Design hommage to fermented bean curd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${changa.className} cursor-grab`}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
