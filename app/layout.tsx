import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { cn } from "@/lib/utils";

import { Footer } from "./footer";
import { Header } from "./header";

import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nim-fawn.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Joaquin",
    template: "%s | Nim",
  },
  description:
    "Nim is a free and open-source personal website template built with Next.js 15, React 19 and Motion-Primitives.",
};

const inter = Inter({
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white antialiased dark:bg-zinc-950">
        <ThemeProvider enableSystem attribute="class" storageKey="theme" defaultTheme="system">
          <div className="flex min-h-screen w-full flex-col">
            <div className="relative mx-auto w-full max-w-(--breakpoint-sm) flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
