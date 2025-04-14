import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drink & Forge",
  description:
    "Drink & Forge: para quienes saben que la vida sigue y cada trago es un nuevo comienzo. Siempre hay una razón para brindar, aunque sea por olvidar. ¡Salud!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="max-w-2xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
