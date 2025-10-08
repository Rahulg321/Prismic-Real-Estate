import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";

/**
 * Props for `Partners`.
 */
export type PartnersProps = SliceComponentProps<Content.PartnersSlice>;

/**
 * Component for "Partners" Slices.
 */
const Partners = ({ slice }: PartnersProps) => {
  const partners = [
    {
      name: "DLF",
      logo: "/logos/damac.png",
      href: "https://www.dlf.in",
    },
    {
      name: "EMAAR",
      logo: "/logos/emaar.png",
      href: "https://www.emaar.com",
    },
    {
      name: "Godrej",
      logo: "/logos/Azizi-Developments.png",
      href: "https://www.godrejproperties.com",
    },
    {
      name: "Nakheel",
      logo: "/logos/nakheel.png",
      href: "https://www.adani.com",
    },
    {
      name: "SOBHA Realty",
      logo: "/logos/sobha-realty.png",
      href: "https://www.sobha.com",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-900 mb-16">
          Our Channel Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center max-w-6xl mx-auto">
          {slice.primary.partner_logo_images.map((partner, index) => (
            <Link
              key={index}
              href={partner.logo_url.text || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[160px] hover:opacity-75 transition-opacity"
            >
              <PrismicNextImage
                field={partner.logo_image}
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
