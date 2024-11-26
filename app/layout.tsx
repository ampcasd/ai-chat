import type { Metadata } from "next";
import { NavBar } from "./components/NavBar";
import { plusJakartaSans } from "./fonts";
import "./globals.css";
import StoreProvider from "./StoreProvider";

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
        className={`${plusJakartaSans.className} antialiased flex flex-col md:flex-row text-textDarkGray font-[${plusJakartaSans.className}]`}
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
