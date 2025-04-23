import type { Metadata } from "next";
import "./globals.css";
import Header from "@components/header";
import { Toaster } from "react-hot-toast";
import Footer from "@components/footer";
import Image from "next/image";
import withoutBg from "@assets/bg-white.png";

const CANNONICAL_URL = "https://dafbebidas.netlify.app";
export const metadata: Metadata = {
  title: "Drink and Forget",
  description:
    "Drink and Forget: para quienes saben que la vida sigue y cada trago es un nuevo comienzo. Siempre hay una razón para brindar, aunque sea por olvidar. ¡Salud!",
  metadataBase: new URL(CANNONICAL_URL),
  alternates: {
    canonical: CANNONICAL_URL,
  },
  authors: [{ name: "Leonel Donati", url: "https://leodonati.site" }],
  openGraph: {
    title: "Drink and Forget",
    description:
      "Para quienes saben que la vida sigue y cada trago es un nuevo comienzo. Siempre hay una razón para brindar, aunque sea por olvidar. ¡Salud!",
    url: CANNONICAL_URL,
    siteName: "DAF Bebidas",
    images: [
      {
        url: `${CANNONICAL_URL}/daf.avif`,
        alt: "Brindis con copas de whiskey",
        type: "image/avif",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={` antialiased relative`}>
        <div className="max-w-4xl mx-auto min-h-screen flex flex-col w-full">
          <Header />
          <main className="max-w-2xl mx-auto px-2 flex-grow flex flex-col w-full">
            {children}
          </main>
          <Footer />
        </div>

        <Image
          src={withoutBg}
          alt=""
          className="fixed top-0 left-0 -z-10 w-full h-full brightness-55 object-cover aspect-video scale-110"
        />
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
