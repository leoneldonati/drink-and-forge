"use client";

import { useState } from "react";
import { IconMenu } from "@tabler/icons-react";
import Link from "next/link";

export default function AsideMenu() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <button
        className="md:hidden bg-brand-1  grid place-items-center px-2 py-1 rounded-md"
        onClick={() => setOpened(true)}
      >
        <IconMenu />
      </button>

      <ul
        className={`
        flex items-center gap-5 absolute md:relative md:flex-row flex-col z-50 
        left-0 top-0 backdrop-blur-md md:backdrop-blur-none h-screen md:h-auto px-8 py-4 md:p-0 md:translate-x-0 transition-transform
        ${opened ? "translate-x-0" : "-translate-x-full"}
        `}
        onClick={() => setOpened(false)}
      >
        <div className=" md:hidden flex justify-end w-full">
          <button
            onClick={() => setOpened(false)}
            className="bg-brand-1  grid place-items-center px-2 py-1 rounded-md"
          >
            <IconMenu />
          </button>
        </div>

        <li>
          <Link
            href="/"
            className="px-4 py-2 rounded-md font-brand-1 uppercase  animate-neon md:w-fit w-full  grid place-items-center bg-brand-1 text-white font-bold"
            style={{ textShadow: "-1px 1.5px 5px var(--color-brand-1)" }}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="px-4 py-2 rounded-md font-brand-1 uppercase  animate-neon md:w-fit w-full  grid place-items-center bg-brand-1 text-white font-bold"
            style={{ textShadow: "-1px 1.5px 5px var(--color-brand-1)" }}
          >
            Productos
          </Link>
        </li>
        <li>
          <Link
            href="/combos"
            className="px-4 py-2 rounded-md font-brand-1 uppercase  animate-neon md:w-fit w-full  grid place-items-center bg-brand-1 text-white font-bold"
            style={{ textShadow: "-1px 1.5px 5px var(--color-brand-1)" }}
          >
            Combos
          </Link>
        </li>
      </ul>
    </>
  );
}
