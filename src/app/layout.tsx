import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cmucbs.com"),
  title: "CMUCBs | Centre for Management of Urban Co-operative Banks",
  description: "Expert training and management consultancy for stronger, future-ready Urban Co-operative Banks.",
  openGraph: {
    title: "CMUCBs | Stronger banks. Smarter leadership.",
    description: "Training and consultancy for Urban Co-operative Banks.",
    images: [{ url: "/og-v2.png", width: 1731, height: 909, alt: "CMUCBs — Stronger banks. Smarter leadership." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CMUCBs | Stronger banks. Smarter leadership.",
    description: "Training and consultancy for Urban Co-operative Banks.",
    images: ["/og-v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
