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
  description:
    "The official website of the Federal Way Kendo Club. Live in the area and are looking to start kendo? Join here!",
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
    <html
      lang="en"
      className="text-foreground bg-background scroll-smooth scroll-pt-[64px]"
    >
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
