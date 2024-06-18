import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bahir Dar City Website",
  description: "Bahir Dar City Website",
};

export default function RootLayout({ children }) {
  const sections = [
    // { title: "Culture", url: "/comingsoon" },
    { title: "The City", url: "/City" },
    { title: "Pictures", url: "/pictures" },
    { title: "Give back", url: "/comingsoon" },
    // { title: "Invest", url: "/comingsoon" },
    { title: "Opinion", url: "/comingsoon" },
    // { title: "Business", url: "/comingsoon" },
    { title: "Jobs", url: "/comingsoon" },
  ];

  return (
    <html>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C4GE4XE01B"
        ></Script>
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-C4GE4XE01B');
            `}
        </Script>
        <Analytics />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body>
        <CssBaseline />
        <Container maxWidth="100%" className="layout">
          <Header title="Bahir Dar City" sections={sections} maxWidth="xl"/>
          <main>{children}</main>
        </Container>
        <Footer
          title="Bahir-Dar City."
          description="We welcome you in peace, we amaze you with nature."
        />
      </body>
    </html>
  );
}
