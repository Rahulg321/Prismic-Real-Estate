import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bath, Bed, Square } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * Props for `FeaturedEstates`.
 */
export type FeaturedEstatesProps =
  SliceComponentProps<Content.FeaturedEstatesSlice>;

/**
 * Component for "FeaturedEstates" Slices.
 */
const FeaturedEstates = ({ slice }: FeaturedEstatesProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 px-4 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <h3 className="text-[#C8A870] uppercase tracking-wide text-sm font-medium mb-2">
          INVEST IN YOUR COMFORT
        </h3>
        <h2 className="text-4xl md:text-5xl font-serif font-medium">
          Our Featured Properties
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {slice.primary.estate.map((property, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative h-64 w-full mb-4">
              <Image
                src={property.estate_image.url || "/placeholder.svg"}
                alt={property.estate_image.alt || "some value"}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-[#C8A870] font-medium mb-1">
              {property.tag}
            </div>
            <h3 className="text-2xl font-serif font-medium mb-4">
              {property.title}
            </h3>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <Bed className="w-5 h-5" />
                <span>
                  {property.bed} {property.bed === "1" ? "Bed" : "Beds"}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-5 h-5" />
                <span>
                  {property.bath} {property.bath === "1" ? "Bath" : "Baths"}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Square className="w-5 h-5" />
                <span>{property.square_ft}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link
          href="#"
          className="border border-[#C8A870] text-[#C8A870] px-8 py-3 uppercase text-sm tracking-wider hover:bg-[#C8A870] hover:text-white transition-colors"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default FeaturedEstates;
