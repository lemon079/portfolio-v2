import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "../app/globals.css";
import ClickSparkProvider from "@/components/providers/ClickSparkProvider";
import LenisProvider from "@/components/providers/LenisProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-hanken-grotesk",
});

export const metadata: Metadata = {
  title: "Bilal Tahir - Full Stack AI Developer",
  description:
    "Portfolio of a passionate Full Stack AI Developer specializing in modern web technologies, React, Next.js, and beautiful user experiences.",
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
  icons: {
    icon: "/pfp-animated.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${hankenGrotesk.variable} relative after:content-[''] after:fixed after:bottom-0 after:left-0 after:w-full after:h-30 after:pointer-events-none after:bg-linear-to-t after:from-(--color-bg-primary) after:to-transparent after:z-50`}
        style={{ fontFamily: 'var(--font-hanken-grotesk), sans-serif' }}
      >
        <ThemeProvider>
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
            <main className="bg-(--color-bg-primary) text-text-primary flex flex-col transition-colors duration-300">
              <div className="min-h-screen max-w-4xl mx-auto bg-transparent px-4 md:px-8 lg:px-16 tracking-wide pt-20 flex-1">
                {children}
              </div>
              <Footer />
            </main>
          </ClickSparkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

