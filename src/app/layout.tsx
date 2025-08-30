"use client"
import Footer from "@/components/footer";
import "./globals.css";
import Headers from "@/components/headers";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], // agora tem finos
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className={sora.className}>
     
      <body className={"w-full h-fullflex flex-col min-h-screen "}>
     <Headers />
           
           <main className="flex-grow w-full">{children}</main>
          
    
      <Footer/>
      </body>
     
    </html>
  );
}
