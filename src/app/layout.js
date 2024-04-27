import { Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "UCalgary First Year",
  description: "Guidance for first year students at the University of Calgary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
