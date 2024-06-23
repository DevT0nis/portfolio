

import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anthony Thomas",
  description:
    "Anthony é um desenvolvedor full-stack com 1 ano de experiencia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <html lang="pt" className="!scroll-smooth">
      <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />

      <script
        async
        src="https://cdn.userway.org/widget.js"
        data-account="YpH6Patkrn"
        
      />

      <body
        className={`${inter.className} bg-gray-50 text-gray-950 flex-col pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90  `}
      >


      



        <div className="bg-[#0059ff4d] absolute top-[20rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#bb7df6]  animate-pulse"></div>
        <div className="bg-[#ff27fb38] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#2db2ff] animate-pulse linear infinite"></div>
        <div className="bg-[#0059ff4d] absolute top-[70rem] -z-10 right-[51rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#2aff1b] animate-pulse"></div>
        <div className="bg-[#ebfd28] absolute top-[115rem] -z-50 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#ffd51b] animate-pulse"></div>
     

        <div className="bg-[#b730ffce] absolute top-[150rem] -z-40 left-[-45rem] h-[31.25rem] w-[50rem] rounded-full blur-[11rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-38rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#b16b28] animate-pulse"></div>

        <div className="bg-[#ebfd28] absolute top-[182rem] -z-50 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#fffffff5] animate-scale"></div>
        <div className="bg-[#b730ffce] absolute top-[203rem] -z-40 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[60rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#a833e7] animate-pulse"></div>

        <div className="bg-[#28cbfd9b] absolute top-[246rem] -z-50 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#50ff1bf5] animate-pulse"></div>

        <div className="bg-[#bc48c381] absolute top-[315rem] -z-50 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#491bfff5] animate-pulse"></div>
        <div className="bg-[#f8ff3099] absolute top-[292rem] -z-40 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#f4a12c] animate-pulse"></div>



        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}