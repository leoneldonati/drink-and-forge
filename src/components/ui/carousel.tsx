"use client";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

interface Props {
  assets: StaticImageData[];
}
export default function Carousel({ assets }: Props) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPosition((pos) => (pos === assets.length - 1 ? 0 : pos + 1));
    }, 2500);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <picture className="max-h-full overflow-hidden relative rounded-md w-full">
        <div
          className="flex transition-transform"
          style={{ transform: `translateX(-${position * 100}%)` }}
        >
          {assets.map((image, index) => (
            <a
              key={index}
              href={index % 2 === 0 ? "/products" : "/contact"}
              className="w-full flex flex-shrink-0"
            >
              <Image
                src={image}
                loading="lazy"
                alt=""
                className={`${
                  index === position ? "animate-zoom" : ""
                } w-full brightness-120`}
              />
            </a>
          ))}
        </div>

        <div className="absolute bottom-2 z-10 flex items-center justify-center gap-1 w-full">
          {assets.map((_, index) => (
            <span
              key={index}
              onClick={() => setPosition(index)}
              style={{
                backgroundColor:
                  index === position ? "var(--color-brand-1)" : "#aaa",
              }}
              className=" w-3 h-3 rounded-full flex"
            ></span>
          ))}
        </div>
      </picture>

      <div className="flex items-center gap-1">
        <button
          onClick={() => setPosition((pos) => (pos === 0 ? 0 : pos - 1))}
          className="transition-transform active:scale-95"
        >
          <IconArrowLeft />
        </button>

        <strong>
          {position + 1}/{assets.length}
        </strong>
        <button
          onClick={() =>
            setPosition((pos) => (pos === assets.length - 1 ? 0 : pos + 1))
          }
          className="transition-transform active:scale-95"
        >
          <IconArrowRight />
        </button>
      </div>
    </div>
  );
}
