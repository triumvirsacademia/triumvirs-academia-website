import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${SFPro.variable} ${NewYork.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
