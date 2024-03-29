import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import {
  
    
    Setting,
    User,
    ArrowDown2 ,
    Logout
  } from "iconsax-react"
  
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${jakarta.className} h-screen flex `}>
        <aside className=" hidden sm:flex  w-[5.5%]  border-[0.5px] border-r-woodsmoke-400/10 ">
          <Sidebar />
        </aside>
        <div className="flex w-[95.5%] flex-col ">
      
          {children}
        </div>
      </body>
    </html>
  );
}
