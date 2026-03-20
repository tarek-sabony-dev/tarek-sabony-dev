import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/lenis-provider";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"]
})

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Tarek Sabony - dev",
  description: "Full Stack Web Developer specializing in modern web technologies. Browse my portfolio to see my latest projects and web development expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.variable} ${lora.variable} antialiased bg-[#e8e8e3]`} >
        <LenisProvider >
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
