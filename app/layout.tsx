import "@/styles/tailwind.css";
import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import seo from "@/config/seo";
import { SeoType } from "@/types";
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
    default: seo.title,
  },
  generator: seo.author.name,
  applicationName: seo.title,
  description: seo.description,
  referrer: "origin-when-cross-origin",
  keywords: seo.keywords,
  authors: [
    {
      name: seo.author.name,
      url: seo.author.twitterUrl,
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
