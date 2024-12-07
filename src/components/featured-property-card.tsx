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
    <Link
      href={"#"}
      className="group relative block aspect-[4/3] overflow-hidden"
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-3xl md:text-4xl  text-white text-center">{name}</h3>
      </div>
    </Link>
  );
}
