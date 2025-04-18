import { INSTAGRAM_LINK } from "@constants";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="flex flex-col-reverse sm:flex-row items-center justify-around p-4  rounded-md backdrop-blur-xs bg-black/40">
      <p className="text-brand-1 font-brand-1 text-shadow-md text-shadow-white">
        Cada trago es un nuevo comienzo
      </p>

      <a
        href={INSTAGRAM_LINK}
        title="¡Visítanos en Instagram!"
        className="text-white bg-green-500 p-2 flex rounded-full animate-rotate"
      >
        <IconBrandWhatsapp />
      </a>
    </footer>
  );
}
