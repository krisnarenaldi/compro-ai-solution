import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIWorrk - Fluid Intelligence",
  description:
    "We design and implement AI automation, agents, and intelligent workflows that help businesses reduce manual work, improve efficiency, and make better decisions.",
  openGraph: {
    title: "AIWorrk - Fluid Intelligence",
    description: "We design and implement AI automation, agents, and intelligent workflows that help businesses reduce manual work, improve efficiency, and make better decisions.",
    url: "https://aiworrk.com",
    siteName: "AIWorrk",
    images: [
      {
        url: "/logo-aiworrk-full.png",
        width: 800,
        height: 600,
        alt: "AIWorrk - Fluid Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIWorrk - Fluid Intelligence",
    description: "We design and implement AI automation, agents, and intelligent workflows that help businesses reduce manual work, improve efficiency, and make better decisions.",
    images: ["/logo-aiworrk-full.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hankenGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E5CCDDGBFX');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="antialiased font-body-md text-body-md min-h-screen flex flex-col">
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}