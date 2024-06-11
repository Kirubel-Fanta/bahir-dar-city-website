import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bahir Dar City Website",
  description: "Bahir Dar City Website",
};

export default function RootLayout({ children }) {
  const sections = [
    // { title: "Culture", url: "/comingsoon" },
    // { title: "Visitor", url: "/comingsoon" },
    { title: "Pictures", url: "/pictures" },
    { title: "Give back", url: "/comingsoon" },
    // { title: "Invest", url: "/comingsoon" },
    { title: "Opinion", url: "/comingsoon" },
    // { title: "Business", url: "/comingsoon" },
    { title: "Jobs", url: "/comingsoon" },
  ];
  
  return (
    <html>
      <body>
        <CssBaseline />
          <Container maxWidth="xl" className="layout">
            <Header title="Bahir Dar City" sections={sections} />
            <main>{children}</main>
          </Container>
          <Footer
            title="Bahir-Dar City"
            description="We welcome you in peace, we amaze you with nature."
          />
      </body>
    </html>
  );
}
