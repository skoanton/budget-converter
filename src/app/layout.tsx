import { Metadata } from "next";
import "../app/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
export const metadata: Metadata = {
  title: "Next.js",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen flex bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        <main className="w-screen p-4">{children}</main>
      </body>
    </html>
  );
}
