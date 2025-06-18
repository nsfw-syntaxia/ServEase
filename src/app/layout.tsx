import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "../styles/globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ServEase",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}