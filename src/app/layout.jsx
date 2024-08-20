import { Poppins } from "next/font/google";

import "./globals.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Calgary First Year",
  description: "Guidance for first year students at the University of Calgary",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PPTFBBFW31"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments);}
          gtag('js', new Date()); gtag('config', 'G-PPTFBBFW31');
          `}
        </Script>
      </head>
      <body className={`${poppins.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
