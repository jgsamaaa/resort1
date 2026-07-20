import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.fullName} — El Nido, Palawan`,
    template: `%s · ${site.name}`,
  },
  description:
    "A small luxury beachfront resort in El Nido, Palawan. White sand, turquoise water, a signature pool villa, and Filipino hospitality at its warmest. Book your island escape.",
  keywords: [
    "El Nido resort",
    "Palawan beach resort",
    "Philippines luxury villa",
    "Dalisay Cove",
    "beachfront suite El Nido",
  ],
  openGraph: {
    title: `${site.fullName} — El Nido, Palawan`,
    description:
      "White sand, turquoise water, and Filipino hospitality at its warmest.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
