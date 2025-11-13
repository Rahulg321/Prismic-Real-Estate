import { Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { Divide, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type HighlightProps = SliceComponentProps<Content.HighlightSlice>;

/**
 * Component for "Highlight" Slices.
 */
const Highlight = ({ slice }: HighlightProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "backgroundWithHeading" ? (
        <div className="relative min-h-[600px] flex items-center justify-center">
          {/* Background Image with Overlay */}
          {slice.primary.featured_image && (
            <Image
              src={slice.primary.featured_image.url as string}
              alt="Luxury living room"
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
          {/* Dark overlay */}

          {/* Content */}
          <div className="absolute inset-0 flex items-center z-10 text-center max-w-4xl mx-auto px-4">
            <div className="space-y-6">
              <p className="text-white text-lg tracking-wide">
                <span>EXPERTISE</span>
                <span className="mx-3">•</span>
                <span>SERVICE</span>
                <span className="mx-3">•</span>
                <span>SUCCESS</span>
              </p>

              <h2 className="text-5xl md:text-6xl  text-white">
                {slice.primary.heading}
              </h2>

              <div className="text-white">
                <PrismicRichText field={slice.primary.content} />
              </div>

              <Link
                href="/contact"
                className="inline-block mt-8 px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-200 tracking-wider"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      ) : slice.variation === "inverted" ? (
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Content on the left */}
            <div className="space-y-6 md:order-1">
              <div>
                <h2 className="text-[#C5A880] text-lg mb-2">
                  {slice.primary.tagline}
                </h2>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {slice.primary.heading}
                </h1>
              </div>

              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-[#C5A880] hover:text-[#b39671] transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={24} />
                </Link>
                <Link
                  href="#"
                  className="text-[#C5A880] hover:text-[#b39671] transition-colors"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href="#"
                  className="text-[#C5A880] hover:text-[#b39671] transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={24} />
                </Link>
              </div>

              <PrismicRichText field={slice.primary.content} />
            </div>

            {/* Image on the right */}
            <div className="relative aspect-square md:order-2">
              <Image
                src={slice.primary.featured_image.url as string}
                alt="Luxury living room"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square">
              <Image
                src={slice.primary.featured_image.url as string}
                alt="Luxury living room"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-[#C5A880] text-lg mb-2">
                  {slice.primary.tagline}
                </h2>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {slice.primary.heading}
                </h1>
              </div>

              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-[#C5A880] hover:text-[#b39671] transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={24} />
                </Link>
                <Link
                  href="#"
                  className="text-[#C5A880] hover:text-[#b39671] transition-colors"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href="#"
                  className="text-[#C5A880] hover:text-[#b39671] transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={24} />
                </Link>
              </div>

              <PrismicRichText field={slice.primary.content} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Highlight;
