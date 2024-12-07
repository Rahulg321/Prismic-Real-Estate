import PropertyCard from "@/components/property-card";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProductInfo`.
 */
export type ProductInfoProps = SliceComponentProps<Content.ProductInfoSlice>;

/**
 * Component for "ProductInfo" Slices.
 */
const ProductInfo = ({ slice }: ProductInfoProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-4 py-8">
        <PropertyCard
          image={slice.primary.product_image.url!}
          alt={slice.primary.product_image.alt!}
          name={slice.primary.title}
          price={slice.primary.price}
          beds={3}
          baths={3}
        />
      </div>
    </section>
  );
};

export default ProductInfo;
