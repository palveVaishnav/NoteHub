import type { Metadata } from "next";
import "./globals.css";
import "./index.css";
import { Inter as FontMono } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = FontMono({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "NoteHub",
  description: "A Notes Sharing Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
