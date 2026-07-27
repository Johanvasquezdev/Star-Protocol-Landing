"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type MediaImageProps = {
  src?: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

export function MediaImage({
  src,
  fallbackSrc = "/images/placeholders/media-placeholder.svg",
  alt,
  className,
  imgClassName
}: MediaImageProps) {
  const initialSrc = useMemo(() => src || fallbackSrc, [src, fallbackSrc]);
  const [currentSrc, setCurrentSrc] = useState(initialSrc);
  const [failed, setFailed] = useState(false);

  if (failed && currentSrc === fallbackSrc) {
    return (
      <div className={cn("grid place-items-center overflow-hidden bg-white/[0.045]", className)} role="img" aria-label={alt}>
        <ImageIcon className="text-white/30" size={28} />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-white/[0.045]", className)}>
      <Image
        src={currentSrc}
        alt={alt}
        className={cn("h-full w-full object-cover", imgClassName)}
        fill
        sizes="(min-width: 1024px) 42vw, 92vw"
        unoptimized={currentSrc.endsWith(".svg")}
        onError={() => {
          if (currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
            return;
          }
          setFailed(true);
        }}
      />
    </div>
  );
}
