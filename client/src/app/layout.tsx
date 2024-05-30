import { Metadata } from "next";
import "./globals.css";
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
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <div className="flex">
          <aside className="self-start sticky top-0 max-w-max">
            <Navbar />
          </aside>

          <main className="p-2 w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
