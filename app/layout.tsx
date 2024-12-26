import "@/styles/tailwind.css";
import Container from "@/components/layout/container";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import seoConfig from "@/config/components/seo";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
import { Inter as FontSans } from "next/font/google";

// Font Configuration
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio",
    default: seoConfig.title,
  },
  generator: seoConfig.author.name,
  applicationName: seoConfig.title,
  description: seoConfig.description,
  referrer: "origin-when-cross-origin",
  keywords: seoConfig.keywords,
  authors: [
    {
      name: seoConfig.author.name,
      url: seoConfig.author.twitterUrl,
    },
  ],
  // Add other metadata properties as needed
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={`antialiased ${fontSans.variable}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Main>
              <Header />
              <Container>{children}</Container>
              <Footer />
              <VercelAnalytics />
            </Main>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
