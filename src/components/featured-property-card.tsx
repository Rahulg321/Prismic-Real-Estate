import { KeyTextField } from "@prismicio/client";
import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  name: KeyTextField;
  image: string;
  alt: string;
}

export function PropertyCard({ name, image, alt }: PropertyCardProps) {
  return (
    <div className="group relative block aspect-square overflow-hidden">
      <Image
        src={image || "/placeholder.svg"}
        alt={alt}
        fill
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
        className="object-cover "
      />
      <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-3xl md:text-4xl  text-white text-center">{name}</h3>
      </div>
    </div>
  );
}
