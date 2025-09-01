import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Figtree } from "next/font/google";
import "./globals.css";
import posthog from "posthog-js";
import Script from "next/script";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

// Initialize PostHog
if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
    loaded: () => {
      if (process.env.NODE_ENV === "development") posthog.debug();
    },
  });
}

export const metadata: Metadata = {
  metadataBase: new URL("https://rhoda.moe"),
  title: "Rhoda - The OS that learns you",
  description:
    "Experience the world's first AI-native operating system. Rhoda adapts to you, not the other way around.",
  keywords: [
    "AI OS",
    "adaptive computing",
    "intelligent operating system",
    "AI-native OS",
    "Rhoda OS",
  ],
  authors: [{ name: "Rhoda Team" }],
  openGraph: {
    title: "Rhoda - The OS that learns you",
    description:
      "Experience the world's first AI-native operating system. Rhoda adapts to you, not the other way around.",
    url: "https://rhoda.moe",
    siteName: "Rhoda",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rhoda - The OS that learns you",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhoda - The OS that learns you",
    description:
      "Experience the world's first AI-native operating system. Rhoda adapts to you, not the other way around.",
    images: ["/og-image.png"],
    creator: "@rhodaos",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={figtree.variable}>
      <head>
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Rhoda",
              "applicationCategory": "OperatingSystem",
              "operatingSystem": "Cross-platform",
              "description": "The world's first AI-native operating system that learns and adapts to you.",
              "offers": {
                "@type": "Offer",
                "availability": "PreOrder"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Rhoda",
                "url": "https://rhoda.moe"
              }
            }
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-background font-figtree antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
