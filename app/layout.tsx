import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Crowlit",
  description: "AI Chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://crowlit-client.vercel.app/loader.js"
          data-site="ccf711242f69"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}