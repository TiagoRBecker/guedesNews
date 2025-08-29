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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
      {loading ? (
          <Loader />  
        ) : (
          <>
            <Headers />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
