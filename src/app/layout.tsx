"use client";

import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";
import MainHeader from "@/components/MainHeader";
import SubHeader from "@/components/SubHeader";
import Footer from "@/components/Footer";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="백합진흥연구협회" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${pretendard.variable} antialiased grid grid-rows-[100px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-pretendard)]`}
      >
        {isHomePage ? <MainHeader /> : <SubHeader />}
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
