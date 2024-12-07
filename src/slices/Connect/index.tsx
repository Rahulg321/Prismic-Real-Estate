import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";

/**
 * Props for `Connect`.
 */
export type ConnectProps = SliceComponentProps<Content.ConnectSlice>;

/**
 * Component for "Connect" Slices.
 */
const Connect = ({ slice }: ConnectProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#FDF8F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#C5A880] text-lg mb-4">{slice.primary.tagline}</p>
          <h2 className="text-4xl md:text-5xl mb-12">
            {slice.primary.heading}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {slice.primary.images.map((image, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={image.office_image.url!}
                alt={image.office_image.alt!}
                fill
                className="object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="https://instagram.com/therelocalbricks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-[#C5A880] text-[#C5A880] hover:bg-[#C5A880] hover:text-white transition-colors duration-200"
          >
            FOLLOW @therelocalbricks
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Connect;
