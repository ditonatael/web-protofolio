import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "~/components/cores/navbar";
import Footer from "~/components/cores/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Handito Natael",
  description: "Personal Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
