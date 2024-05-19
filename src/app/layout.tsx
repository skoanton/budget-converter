import { Metadata } from "next";
import "../app/globals.css";
import Navbar from "@/components/Navbar/Navbar";
export const metadata: Metadata = {
  title: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen flex">
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
