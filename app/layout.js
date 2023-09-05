import { Inter } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/global.css";
import BackToTopButton from "../components/backToTopButton";
import StyledComponentsRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vendorside Landing Page",
  description: "Vendorside Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTopButton />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
