import type { Metadata } from "next";
import localFont from "next/font/local";
import { NavBar } from "./components/NavBar";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sentient",
  description: "Open AGI Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col md:flex-row text-textDarkGray`}
      >
        <StoreProvider>
          {/* On mobile: children first, navbar last. On desktop: navbar first, children last */}
          <div className="flex flex-col md:flex-row w-full h-full">
            <div className="fixed bottom-0 left-0 right-0 md:static md:order-first">
              <NavBar />
            </div>
            <main className="flex-1 p-4 order-first md:order-last">
              {children}
            </main>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
