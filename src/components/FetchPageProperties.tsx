import { filter } from "@prismicio/client";
import RealEstateListing from "./real-estate-listing";
import { createClient } from "@/prismicio";

async function FetchPageProperties({ pageId }: { pageId: string }) {
  const client = createClient();
  const listings = await client.getAllByType("property", {
    filters: [filter.at("my.property.route_name", pageId)],
  });

  return (
    <div className="big-container block-space">
      {listings.map((listing, index) => {
        return <RealEstateListing key={index} property={listing} />;
      })}
    </div>
  );
}

export default FetchPageProperties;
