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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
