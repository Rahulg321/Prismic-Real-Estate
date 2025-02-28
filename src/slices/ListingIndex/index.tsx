import FilterTabs from "@/components/filter-tabs";
import RealEstateListing from "@/components/real-estate-listing";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ListingIndex`.
 */
export type ListingIndexProps = SliceComponentProps<Content.ListingIndexSlice>;

/**
 * Component for "ListingIndex" Slices.
 */
const ListingIndex = async ({ slice }: ListingIndexProps) => {
  const client = createClient();
  const listings = await client.getAllByType("property");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="big-container block-space"
    >
      <FilterTabs />
      <div className="space-y-4 md:space-y-6 lg:space-y-8">
        {listings.map((listing, index) => {
          return <RealEstateListing key={index} property={listing} />;
        })}
        {listings.map((listing, index) => {
          return <RealEstateListing key={index} property={listing} />;
        })}
      </div>
    </section>
  );
};

export default ListingIndex;
