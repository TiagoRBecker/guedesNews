"use client"
import "./globals.css";
import Headers from "@/components/headers";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
   
            <Headers />
            <main className="w-full h-full">{children}</main>
        
    
      </body>
    </html>
  );
}
