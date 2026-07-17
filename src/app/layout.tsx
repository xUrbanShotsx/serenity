import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Coastal",
  description: "A private estate above Berry, NSW South Coast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
