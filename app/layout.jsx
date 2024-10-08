import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NuxeCorps",
  description: "NuxeCorps",
  manifest: "/manifest.json",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-text bg-background overflow-x-hidden`}
      >
        <Navbar />
        <div className="sm:grid grid-rows-[1fr_auto] min-h-dvh">
          {children}
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
