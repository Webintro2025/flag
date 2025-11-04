// No "use client" here

// SEO metadata for About page
export const metadata = {
  alternates: {
    canonical: "https://majidstore.co.in/about",
  },
  title: "About Tiranga Army Store | National Flags, Military & Ceremonial Supplies",
  description:
    "Tiranga Army Store (Majid Store) manufactures and supplies national flags, military flags, ceremonial pagris, caps, badges, flag stands and custom flag solutions across India. We accept bulk and custom orders for government, institutions, and retailers. GST: 03BHOPT0049J1Z5.",
  keywords: [
    "Tiranga Army Store",
    "Majid Store",
    "National Flags",
    "T Flags",
    "Military Flags",
    "Flag Manufacturers",
    "Ceremonial Pagri",
    "Military Caps",
    "Flag Stands",
    "Custom Flags",
    "India",
    "Flags Supplier",
  ],
  openGraph: {
    title: "About Tiranga Army Store | National Flags & Military Supplies",
    description:
      "Tiranga Army Store (Majid Store) provides high-quality national and military flags, ceremonial products and accessories with nationwide delivery and custom manufacturing options.",
    url: "https://majidstore.co.in/about",
    siteName: "Tiranga Army Store",
    images: [
      {
        url: "/logo.jpg",
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
    title: "About Tiranga Army Store — Flags, Caps & Ceremonial Supplies",
    description:
      "Manufacturer and supplier of national flags, military flags, caps, badges, and ceremonial products. Bulk and custom orders welcome. GST: 03BHOPT0049J1Z5.",
    site: "@majidstoreco",
    images: [
      {
        url: "/logo.jpg",
        alt: "Tiranga Army Store Logo",
      },
    ],
  },
};

import AboutPageClient from "./pageClient";

export default function AboutPage() {
  return <AboutPageClient />;
}
