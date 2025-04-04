import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { CartProvider } from "./(pages)/resources/UseCart";
import Cart from "./cart";

export const metadata: Metadata = {
  title: "Triumvirs Academia",
  description: "Welcome to the Triumvirate",
};

const SFPro = localFont({
  src: "./fonts/SF-Pro.ttf",
  variable: "--font-sf-pro",
  weight: "100 900",
});

const NewYork = localFont({
  src: "./fonts/NewYork.ttf",
  variable: "--font-new-york",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${SFPro.variable} ${NewYork.variable} font-sans antialiased bg-white`}
      >
        <CartProvider>
        {children}
        <Cart />
        </CartProvider>
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
