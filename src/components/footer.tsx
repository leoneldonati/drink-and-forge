import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="flex flex-col-reverse sm:flex-row items-center justify-center p-4 gap-3 rounded-md backdrop-blur-xs bg-black/60">
      <p className="font-brand-1 text-shadow-white text-shadow-md brightness-150 contrast-150   uppercase">
        Cada trago es un nuevo comienzo
      </p>

      <a
        href={`https://api.whatsapp.com/send?phone=5493412859537`}
        title="¡Contáctanos en Whatsapp!"
        aria-label="¡Contáctanos en Whatsapp!"
        className="text-white bg-green-500 p-2 flex rounded-full animate-rotate"
      >
        <IconBrandWhatsapp />
      </a>
    </footer>
  );
}
