import { OutlineButton } from "@/components/Buttons/outline-button";
import { PropertyCard } from "@/components/featured-property-card";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Properties`.
 */
export type PropertiesProps = SliceComponentProps<Content.PropertiesSlice>;

/**
 * Component for "Properties" Slices.
 */
const Properties = ({ slice }: PropertiesProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#C5A880] text-lg mb-4">INVEST IN YOUR COMFORT</p>
          <h2 className="text-4xl md:text-5xl mb-12">Featured Properties</h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {slice.primary.property_cards.map((property, index) => (
            <PropertyCard
              key={index}
              name={property.card_heading}
              image={property.card_image.url!}
              alt={property.card_image.alt!}
            />
          ))}
        </div>

        <div className="text-center">
          <OutlineButton>View All</OutlineButton>
        </div>
      </div>
    </section>
  );
};

export default Properties;
