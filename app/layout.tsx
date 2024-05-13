import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProvider, useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  pageProps,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-lvh flex justify-between flex-col">
        <header>
          <Header />
        </header>
        <SessionProvider session={pageProps?.session}>
          {children}
        </SessionProvider>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
