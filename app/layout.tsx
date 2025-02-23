import "@/styles/tailwind.css";
import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Container from "@/components/main/container";
import Main from "@/components/main/main";
import TailwindIndicator from "@/components/tailwind-indicator/tailwind-indicator";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import seoConfig from "@/config/seo";
import { cn, getUrl } from "@/utils/helpers";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
import { Inter as FontSans } from "next/font/google";
import { Toaster } from "react-hot-toast";

// Font Configuration
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: seoConfig.title,
  generator: seoConfig.author.name,
  applicationName: seoConfig.title,
  description: seoConfig.description,
  referrer: "origin-when-cross-origin",
  keywords: seoConfig.keywords.join(", "),
  authors: [
    {
      name: seoConfig.author.name,
      url: seoConfig.author.twitterUrl,
    },
  ],
  creator: seoConfig.author.name,
  publisher: seoConfig.author.name,
  metadataBase: new URL(getUrl()),
  alternates: {
    canonical: getUrl(),
    types: {
      "application/rss+xml": `${getUrl()}/rss.xml`,
    },
  },
  appleWebApp: {
    title: seoConfig.title,
    statusBarStyle: "default",
    capable: true,
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    url: getUrl(),
    title: seoConfig.title,
    description: seoConfig.description,
    siteName: seoConfig.title,
    images: [
      {
        url: seoConfig.ogImage,
        width: 1200,
        height: 630,
        alt: seoConfig.title,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    site: seoConfig.author.twitterAddress,
    images: [
      {
        url: seoConfig.twitterImage,
        width: 1200,
        height: 675,
        alt: seoConfig.title,
        type: "image/png",
      },
    ],
    creator: seoConfig.author.twitterAddress,
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
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Main>
              <Header />
              <Container>
                {children}
                <Analytics />
                <Toaster position="top-center" />
              </Container>
              <Footer />
              <ScrollToTopButton />
            </Main>
          </ThemeProvider>
          <TailwindIndicator />
        </body>
        <GoogleAnalytics gaId="G-E141GNRBCW" />
      </html>
    </ViewTransitions>
  );
}
