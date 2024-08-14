import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./lib/StoreProvider";
import Header from "@/components/Header";
import ContextProvider from "./lib/context/ContextProvider";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StoreVilla",
  description: "StoreVilla",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ContextProvider>
            <div className="bg-white relative text-black">
              <Header />
              {children}
              <Footer />
            </div>
          </ContextProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
