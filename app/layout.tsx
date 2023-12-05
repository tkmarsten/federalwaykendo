import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Federal Way Kendo",
    default: "Federal Way Kendo",
  },
  description: "Official website of Federal Way Kendo Club.",
  metadataBase: new URL("https://www.federalwaykendo.org/"),
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <Nav />
          <div className="max-w-screen-lg mx-auto px-6">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
