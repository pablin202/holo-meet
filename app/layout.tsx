import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HoloMeet",
  description: "Revolutionize your virtual meetings with HoloMeet, the next-gen web conferencing platform.",
  keywords: [
    "HoloMeet",
    "web conferencing",
    "virtual meetings",
    "video conferencing",
    "Zoom alternative",
    "online meetings",
    "collaboration tool",
  ],
  authors: [{ name: "Pablo Molina" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-dark-2">
        {children}
      </body>
    </html>
  );
}
