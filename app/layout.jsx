import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NuxeCorps",
  description: "NuxeCorps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="px-[30px] grid grid-rows-[1fr_auto] min-h-dvh">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
