import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import TailwindIndicator from "@/components/ui/tailwind-indicator";
import PAGES from "@/config/seo";
import { cn, getBaseUrl, getBaseUrlWithSlug } from "@/lib/utils";
import "@/styles/tailwind.css";
import Celebration from "@/components/body/celebration";
import TanStackQueryProvider from "@/components/providers/tanstack-query-provider";
import { PageType } from "@/types";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { Metadata, Viewport } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Inter as FontSans } from "next/font/google";
import { Toaster } from "react-hot-toast";

const PAGE = "home";

// SEO Configuration
const seo = PAGES.find((page) => page.name === PAGE) as PageType;

if (!seo) {
  throw new Error(`SEO configuration for '${PAGE}' page not found`);
}

// Font Configuration
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Viewport Configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

// Metadata Configuration
export const metadata: Metadata = {
  title: seo.title,
  generator: seo.author.name,
  applicationName: seo.title,
  description: seo.description,
  referrer: "origin-when-cross-origin",
  keywords: (seo.keywords ?? []).join(", "),
  authors: [
    {
      name: seo.author.name,
      url: seo.author.twitterUrl,
    },
  ],
  creator: seo.author.name,
  publisher: seo.author.name,
  metadataBase: new URL(getBaseUrl()),
  alternates: {
    canonical: getBaseUrl(),
    types: {
      "application/rss+xml": `${getBaseUrlWithSlug("rss.xml")}`,
    },
  },
  appleWebApp: {
    title: seo.title,
    statusBarStyle: "default",
    capable: true,
  },
  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: "favicons/favicon.ico",
        type: "image/x-icon",
      },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        url: "/favicons/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "favicons/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      { url: "/favicons/apple-icon.png" },
      {
        url: "/favicons/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicons/apple-icon-precomposed.png",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en",
    url: getBaseUrl(),
    title: seo.title,
    description: seo.description,
    siteName: seo.title,
    images: [
      {
        url: seo.openGraphImageUrl,
        width: 1200,
        height: 630,
        alt: seo.title,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    site: seo.author.twitterAddress,
    images: [
      {
        url: seo.twitterImageUrl,
        width: 1200,
        height: 675,
        alt: seo.title,
        type: "image/png",
      },
    ],
    creator: seo.author.twitterAddress,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className="h-full scroll-smooth"
        suppressHydrationWarning={true}
      >
        <body
          className={cn("antialiased", fontSans.variable)}
          suppressHydrationWarning={true}
        >
          <TanStackQueryProvider>
            {children}
            <Analytics />
            <Toaster position="top-center" />

            <TailwindIndicator />
          </TanStackQueryProvider>
        </body>
        <GoogleAnalytics gaId="G-E141GNRBCW" />
      </html>
    </ViewTransitions>
  );
}
