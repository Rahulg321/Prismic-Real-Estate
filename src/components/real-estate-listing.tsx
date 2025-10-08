import Image from "next/image";
import { Building2, MapPin } from "lucide-react";
import { PropertyDocument } from "../../prismicio-types";
import { isFilled } from "@prismicio/client";
import { Button } from "./ui/button";
import Link from "next/link";

export default function RealEstateListing({
  property,
}: {
  property: PropertyDocument;
}) {
  const {
    floor,
    construction_status,
    property_image,
    ownership,
    location,
    price_square_ft,
    sub_heading,
    super_built_area,
    tagline,
    property_title,
  } = property.data;

  return (
    <div className="w-full max-w-5xl bg-card border border-border rounded-lg overflow-hidden shadow-sm">
      <div className="flex flex-col md:flex-row">
        {/* Property Image */}
        {isFilled.image(property_image) && (
          <div className="md:w-2/5 relative h-64 md:h-auto">
            <Image
              src={property_image.url}
              alt={property_image.alt || "Image of a real estate listing"}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Property Details */}
        <div className="md:w-3/5 p-6">
          {isFilled.keyText(tagline) && (
            <div className="text-yellow-400 font-medium text-xl mb-2">
              {tagline}
            </div>
          )}

          <h1 className="text-2xl font-bold text-card-foreground mb-1">
            {property_title}
          </h1>
          {isFilled.keyText(sub_heading) && (
            <p className="text-lg text-card-foreground mb-6">{sub_heading}</p>
          )}

          <div className="grid grid-cols-2 gap-y-6 gap-x-4">
            {isFilled.keyText(price_square_ft) && (
              <div>
                <h3 className="text-muted-foreground font-medium mb-1">
                  Price Per Sq. Ft
                </h3>
                <p className="text-foreground">{price_square_ft}</p>
              </div>
            )}

            {isFilled.keyText(super_built_area) && (
              <div>
                <h3 className="text-muted-foreground font-medium mb-1">
                  Super Built Area
                </h3>
                <p className="text-foreground">{super_built_area}</p>
              </div>
            )}

            {isFilled.keyText(construction_status) && (
              <div>
                <h3 className="text-muted-foreground font-medium mb-1">
                  Construction Status
                </h3>
                <p className="text-yellow-400 font-medium">
                  {construction_status}
                </p>
              </div>
            )}

            {isFilled.keyText(location) && (
              <div>
                <h3 className="text-muted-foreground font-medium mb-1">
                  Location
                </h3>
                <p className="text-yellow-400 font-medium flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {location}
                </p>
              </div>
            )}

            {isFilled.keyText(floor) && (
              <div>
                <h3 className="text-muted-foreground font-medium mb-1">
                  Floor
                </h3>
                <p className="text-foreground flex items-center">
                  <Building2 className="h-4 w-4 mr-1" />
                  {floor}
                </p>
              </div>
            )}

            {isFilled.keyText(ownership) && (
              <div>
                <h3 className="text-muted-foreground font-medium mb-1">
                  Ownership
                </h3>
                <p className="text-foreground">{ownership}</p>
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <Button
              className="bg-yellow-400 text-black rounded hover:bg-yellow-500 transition-colors"
              asChild
            >
              <Link href={`/properties/${property.uid}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
