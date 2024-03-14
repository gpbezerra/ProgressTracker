import type { Metadata } from "next";
import {roboto} from "./ui/font";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-backgroundBlue ${roboto.className}`}>{children}</body>
    </html>
  );
}
