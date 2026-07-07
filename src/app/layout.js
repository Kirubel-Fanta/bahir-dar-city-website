import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata = {
  title: {
    default: "Bahir Dar City — Everything Bahir Dar, in one place",
    template: "%s | Bahir Dar City",
  },
  description:
    "The digital home of Bahir Dar: businesses, attractions, events, jobs, real estate, and community — for residents, tourists, students, and the diaspora.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-C4GE4XE01B" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C4GE4XE01B');
          `}
        </Script>
        <Analytics />
      </head>
      <body className="font-sans">
        <Providers>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
