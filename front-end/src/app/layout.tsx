import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href={`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap`}
          rel="stylesheet"
        />
        <Script
          async
          src="http://www.instagram.com/embed.js"
          type="text/javascript"
        ></Script>
        <title>Bookmark AI</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
