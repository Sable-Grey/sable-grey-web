import type { Metadata } from "next";
import "./globals.css";
/*----------------------------------------- */

export const metadata: Metadata = {
  title: "Sable & Grey Real Estate",
  description: `
  At Sable and Grey, we believe excellence lives in the details. Every line, every finish, every space is shaped with purpose, 
  and every investment with us is a commitment to enduring value, trust, and rewarding returns. 
  We believe in building not just homes but immersive experiences where every nuance is thoughtfully considered.
  `,
  // Open Graph for Facebook, LinkedIn, etc.
  openGraph: {
    title: "Sable & Grey Real Estate",
    description:
      "We build what others promise, quality that shows, and investment that outperforms.",
    url: "https://sableandgreyrealestate.com",
    siteName: "Sable and Grey",
    images: [
      {
        url: "https://sableandgreyrealestate.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sable & Grey Real Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter card support
  twitter: {
    card: "summary_large_image",
    title: "Sable & Grey Real Estate",
    description:
      "We build what others promise, quality that shows, and investment that outperforms.",
    site: "@sableandgreyltd", // Optional Twitter handle
    images: ["https://sableandgreyrealestate.com/images/og-image.jpg"],
  },
  // Other optional tags
  metadataBase: new URL("https://sableandgreyrealestate.com"), // for resolving relative URLs
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
  alternates: {
    canonical: "https://sableandgreyrealestate.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
