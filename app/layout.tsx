import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

//styles
import "./styles/globals.css";
import "./styles/buttons.css";
import "./styles/roots.css";

//imports
import MobileNav from "@/components/mobilenav";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LeftContent from "@/components/leftcontent";
import RightContent from "@/components/rightcontent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Newtro",
  description: "Nbet sports betting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MobileNav />
        <Navbar />
        <div className="min-h-screen max-w-[1920px] mx-auto ">
          <main className="grid grid-cols-1 lg:grid-cols-5 mx-auto ">
            <div className="hidden lg:block bg-neutral-900">
              <div className="col-span-1">
                <LeftContent />
              </div>
            </div>
            <div className="flex flex-col col-span-3 gap-10">
              <div className="col-span-5 md:col-span-4 p-2">{children}</div>{" "}
              <div className="mt-auto">
                <Footer />
              </div>
            </div>
            <div className="hidden lg:block bg-zinc-900">
              <div className="col-span-1">
                <RightContent />
              </div>
            </div>
          </main>{" "}
        </div>
      </body>
    </html>
  );
  0;
}
