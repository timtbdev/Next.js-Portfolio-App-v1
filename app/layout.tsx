import { seoConfig } from "@/config";
import "@/styles/tailwind.css";
import { Container, Grid } from "@/components/body";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import TailwindIndicator from "@/components/tailwind-indicator";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter as FontSans } from "next/font/google";
import { Toaster } from "react-hot-toast";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontSans.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-gray-50 font-sans dark:bg-gray-900">
            <Header />
            <Grid>
              <Container>{children}</Container>
            </Grid>
            <Footer />
            <VercelAnalytics />
            <Toaster position="top-center" />
            <TailwindIndicator />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
