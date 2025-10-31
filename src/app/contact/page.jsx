// No "use client" here

// SEO metadata for Contact page
export const metadata = {
  alternates: {
    canonical: "https://majidstore.co.in/contact",
  },
  title: "Contact Tiranga Army Store | Majid Store — Flags, Caps & Ceremonial Supplies",
  description: "Contact Tiranga Army Store (Majid Store) for orders, custom flag requests, bulk enquiries, and delivery information. Call/WhatsApp +91-7888309215 or email Majidmilitarystore@gmail.com. GST: 03BHOPT0049J1Z5.",
  keywords: [
    "Tiranga Army Store",
    "Majid Store",
    "Contact",
    "Flags",
    "Military Caps",
    "Flag Orders",
    "Custom Flags",
    "Bulk Orders",
    "GST",
    "India"
  ],
  openGraph: {
    title: "Contact Tiranga Army Store | Majid Store",
    description: "Get in touch for national flags, military flags, ceremonial items, and custom orders. Fast quotes and nationwide delivery.",
    url: "https://majidstore.co.in/contact",
    siteName: "Tiranga Army Store",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 400,
        alt: "Tiranga Army Store Logo"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tiranga Army Store — Flags & Ceremonial Supplies",
    description: "Contact Tiranga Army Store for custom flags, bulk orders, caps, badges and ceremonial supplies. Call/WhatsApp +91-7888309215.",
    site: "@majidstoreco",
    images: [
      {
        url: "/logo.png",
        alt: "Tiranga Army Store Logo"
      }
    ]
  }
};

    import ContactPageClient from "./pageClient";

    export default function ContactPage() {
      return <ContactPageClient />;
    }
