import Image from "next/image";
import { Building2, MapPin } from "lucide-react";
import { PropertyDocument } from "../../prismicio-types";
import { title } from "process";

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
  } = property.data;

  return (
    <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div className="flex flex-col md:flex-row">
        {/* Property Image */}
        <div className="md:w-2/5 relative h-64 md:h-auto">
          <Image
            src={property_image.url || "placeholder.svg"}
            alt={property_image.alt || "Image of a real estate listing"}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Property Details */}
        <div className="md:w-3/5 p-6">
          <div className="text-amber-700 font-medium text-xl mb-2">
            {tagline}
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-1">{title}</h1>
          <p className="text-lg text-gray-800 mb-6">{sub_heading}</p>

          <div className="grid grid-cols-2 gap-y-6 gap-x-4">
            <div>
              <h3 className="text-gray-700 font-medium mb-1">
                Price Per Sq. Ft
              </h3>
              <p className="text-gray-900">{price_square_ft}</p>
            </div>

            <div>
              <h3 className="text-gray-700 font-medium mb-1">
                Super Built Area
              </h3>
              <p className="text-gray-900">{super_built_area}</p>
            </div>

            <div>
              <h3 className="text-gray-700 font-medium mb-1">
                Construction Status
              </h3>
              <p className="text-amber-800 font-medium">
                {construction_status}
              </p>
            </div>

            <div>
              <h3 className="text-gray-700 font-medium mb-1">Location</h3>
              <p className="text-amber-800 font-medium flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {location}
              </p>
            </div>

            <div>
              <h3 className="text-gray-700 font-medium mb-1">Floor</h3>
              <p className="text-gray-900 flex items-center">
                <Building2 className="h-4 w-4 mr-1" />
                {floor}
              </p>
            </div>

            <div>
              <h3 className="text-gray-700 font-medium mb-1">Ownership</h3>
              <p className="text-gray-900">{ownership}</p>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button className="px-4 py-2 border border-amber-700 text-amber-700 rounded hover:bg-amber-50 transition-colors">
              Contact Agent
            </button>
            <button className="px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
