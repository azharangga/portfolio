import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} - ${DATA.description}`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.summary,
  openGraph: {
    title: `${DATA.name} - Portfolio`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}'s Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: DATA.avatarUrl,
        width: 1200,
        height: 630,
        alt: `${DATA.name}'s Portfolio`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    description: DATA.description,
    images: [DATA.avatarUrl],
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background font-sans antialiased", 
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}