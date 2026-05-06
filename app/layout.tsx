import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swatiyadawar.dev"),
  title: {
    default: "Swati Yadawar | Frontend & AI Developer",
    template: "%s | Swati Yadawar",
  },
  description:
    "Premium portfolio for Swati Yadawar, a frontend and AI developer building intelligent full-stack applications.",
  applicationName: "Swati Yadawar Portfolio",
  authors: [{ name: "Swati Yadawar" }],
  keywords: [
    "Swati Yadawar",
    "Frontend Developer",
    "AI Developer",
    "Next.js portfolio",
    "Full-stack developer",
  ],
  creator: "Swati Yadawar",
  openGraph: {
    title: "Swati Yadawar | Frontend & AI Developer",
    description:
      "Modern portfolio showcasing AI products, frontend engineering, and full-stack work.",
    url: "https://swatiyadawar.dev",
    siteName: "Swati Yadawar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swati Yadawar | Frontend & AI Developer",
    description:
      "Modern portfolio showcasing AI products, frontend engineering, and full-stack work.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-background font-sans text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
