import "./globals.css";
import type { Metadata } from "next";
import { inter, montserrat } from "@/app/fonts/myfonts";
import { BottomSection } from "@/components/bottomsection";
import Footer from "@/components/footer";
import { MouseProvider } from "@/components/mousecontext";
import Navbar from "@/components/navbar/navbar";



export const metadata: Metadata = {
  title: {
    template: "%s | AnyTech",
    default: "AnyTech"
  },
  description: "A Fintech website using Next.js",
};

const RootLayout = ({ children }: {
  children: React.ReactNode;
}) => {

  return (
    <html lang="en" dir="ltr" className="light">
      <body className={`${inter} ${montserrat} antialiased`}>
        <MouseProvider>
          <Navbar />
          <div className="relative w-full min-h-screen flex flex-col items-center">
            {children}
          </div>
          <BottomSection />
          <Footer />
        </MouseProvider>
      </body>
    </html>
  );
}

export default RootLayout;
