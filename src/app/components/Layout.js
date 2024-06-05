import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import "../styles/home.css";

const sections = [
  { title: "Culture", url: "/comingsoon" },
  { title: "Visitor", url: "/comingsoon" },
  { title: "Pictures", url: "/pictures" },
  { title: "Give back", url: "/comingsoon" },
  { title: "Invest", url: "/comingsoon" },
  { title: "Opinion", url: "/comingsoon" },
  { title: "Business", url: "/comingsoon" },
  { title: "Jobs", url: "/comingsoon" },
];
const defaultTheme = createTheme();

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="xl" className="layout">
        <Header title="Bahir Dar City" sections={sections} />
        <main>{children}</main>
      </Container>
      <Footer
        title="Bahir-Dar City"
        description="We welcome you in peace, we amaze you with nature."
      />
    </ThemeProvider>
  );
};

export default Layout;
