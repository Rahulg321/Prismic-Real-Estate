"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { KeyTextField, NumberField } from "@prismicio/client";

interface PropertyCardProps {
  image: string;
  alt: string;
  name: KeyTextField;
  price: NumberField;
  beds: number;
  baths: number;
  onLearnMore?: () => void;
}

export default function PropertyCard({
  image,
  name,
  price,
  beds,
  alt,
  baths,
  onLearnMore = () => console.log("Learn more clicked"),
}: PropertyCardProps) {
  return (
    <div className="relative">
      {/* Image Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image src={image} alt={alt} fill className="object-cover" priority />
      </div>

      {/* Property Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4 flex items-center justify-between">
        <div className="flex items-center justify-center gap-4 md:gap-8">
          <h3 className="text-base md:text-lg font-medium">{name}</h3>
          <span className="text-base md:text-lg">{price}</span>
          <div className="flex gap-4 items-center justify-center">
            <span className="">{beds} Beds</span>
            <span className="">{baths} Baths</span>
          </div>
        </div>
        <div className="flex gap-2 md:gap-4">
          <Button
            variant="outline"
            onClick={onLearnMore}
            className=" border-white hover:bg-white text-black text-xs md:text-sm px-2 md:px-4 py-1 md:py-2"
          >
            LEARN MORE
          </Button>
        </div>
      </div>
    </div>
  );
}
