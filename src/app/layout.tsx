import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AetherBox - Compute. Unbound.",
  description: "Deploy data centers anywhere in the world. Solar-powered, self-managed, and built for businesses that need reliable computing without the cloud. Redefining edge computing with sustainable, decentralized infrastructure.",
  keywords: ["cloud computing", "edge computing", "distributed systems", "AetherBox", "sustainable infrastructure", "renewable energy", "data centers", "colocation"],
  authors: [{ name: "AetherBox Team" }],
  creator: "AetherBox",
  publisher: "AetherBox",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "AetherBox - Compute. Unbound.",
    description: "Deploy data centers anywhere in the world. Solar-powered, self-managed, and built for businesses that need reliable computing without the cloud. Redefining edge computing with sustainable, decentralized infrastructure.",
    type: "website",
    locale: "en_US",
    url: "https://aetherbox.io",
    siteName: "AetherBox",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AetherBox - Compute. Unbound.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AetherBox - Compute. Unbound.",
    description: "Deploy data centers anywhere in the world. Solar-powered, self-managed, and built for businesses that need reliable computing without the cloud. Redefining edge computing with sustainable, decentralized infrastructure.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
