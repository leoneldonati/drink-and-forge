import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@components/header";
import { Toaster } from "react-hot-toast";
import Footer from "@components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drink and Forget",
  description:
    "Drink and Forget: para quienes saben que la vida sigue y cada trago es un nuevo comienzo. Siempre hay una razón para brindar, aunque sea por olvidar. ¡Salud!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative `}
      >
        <div className="max-w-4xl mx-auto min-h-screen flex flex-col w-full">
          <Header />
          <main className="max-w-2xl mx-auto px-2 flex-grow flex flex-col w-full">
            {children}
          </main>
          <Footer />
        </div>

        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            removeDelay: 1000,
            style: {
              background: "var(--color-brand-1)",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 2000,
              iconTheme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
