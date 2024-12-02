import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Falcon Eye | EMS",
  description:
    "Falcon Eye is an Employee Managemnet System built by 'Nipun Shrivats' & 'Deepak Kahar' for Sensationz Media & Arts Pvt. Ltd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#EAEEFE] ${dmSans.className}`}>
        {children}
      </body>
    </html>
  );
}
