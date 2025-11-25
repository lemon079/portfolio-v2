import type { Metadata } from "next";
import "../app/globals.css";
import ClickSparkProvider from "@/components/providers/ClickSparkProvider";
import LenisProvider from "@/components/providers/LenisProvider";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Bilal Tahir - Full Stack Developer & Designer",
  description:
    "Portfolio of a passionate Full Stack Developer specializing in modern web technologies, React, Next.js, and beautiful user experiences.",
  keywords: [
    "web developer",
    "full stack",
    "react",
    "next.js",
    "portfolio",
    "UI/UX",
  ],
  authors: [{ name: "Bilal Tahir" }],
  openGraph: {
    title: "Bilal Tahir - Full Stack Developer",
    description: "Crafting beautiful, high-performance web experiences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}
        className="relative after:content-[''] after:fixed after:bottom-0 after:left-0 after:w-full after:h-30 after:pointer-events-none after:rounded-full after:bg-linear-to-t after:from-black after:to-transparent after:z-50"
      >
        <LoadingScreen />
        <LenisProvider />
        <ClickSparkProvider
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={20}
          sparkCount={8}
          duration={400}
        >
          <Header />
          <main className="bg-black text-white flex flex-col min-h-screen">
            <div className="min-h-screen max-w-5xl mx-auto bg-transparent px-16 tracking-wide shadow-lg pt-20 flex-1">
              {children}
            </div>
            <Footer />
          </main>
        </ClickSparkProvider>
      </body>
    </html>
  );
}
