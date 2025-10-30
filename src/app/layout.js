import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tiranga Army Store — Flags, Military & Ceremonial Supplies",
  description:
    "Tiranga Army Store (Majid Store) is a leading manufacturer and supplier of national flags, T-flags, military caps, ceremonial pagris, flag stands, badges, and related accessories across India. We handle bulk and custom orders for government, institutions, events, and retailers. GST: 03BHOPT0049J1Z5.",
  keywords: [
    "Tiranga Army Store",
    "Majid Store",
    "National Flag Manufacturers",
    "T Flag Manufacturers",
    "Polyester Flags",
    "Cotton Flags",
    "Army Caps",
    "Military Badges",
    "Flag Stands",
    "Shamiyana Tent",
    "Ceremonial Pagri",
    "Flag Embroidery",
    "Custom Flags",
   
  ],
  verification: {
    google: "E7sWYEST3R958ww7LIehnZX53e2coNylWurWBAH1dEI", // ← keep existing verification key
  },
  authors: [{ name: "Tiranga Army Store", url: "https://majidstore.co.in" }],
  openGraph: {
    title: "Tiranga Army Store — Flags, Military & Ceremonial Supplies",
    description:
      "Manufacturer and supplier of national flags, military caps, badges, flag stands and ceremonial products across India. Bulk and custom orders welcome.",
    url: "https://majidstore.co.in/",
    siteName: "Tiranga Army Store",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 400,
        alt: "Tiranga Army Store Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiranga Army Store — Flags & Military Supplies",
    description:
      "Tiranga Army Store: national flags, T-flags, military caps, badges, flag stands and ceremonial supplies. GST: 03BHOPT0049J1Z5.",
    site: "@majidstoreco",
    images: [
      {
        url: "/logo.png",
        alt: "Tiranga Army Store Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-papm6p6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FloatingIcons />
        <Footer />
      </body>
    </html>
  );
}
