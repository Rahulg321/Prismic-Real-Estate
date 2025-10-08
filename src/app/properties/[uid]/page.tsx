import { createClient } from "@/prismicio";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { isFilled } from "@prismicio/client";
import Link from "next/link";
import {
  MapPin,
  Home,
  DollarSign,
  Building2,
  Layers,
  Key,
  Construction,
} from "lucide-react";

type Params = { uid: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const property = await client
    .getByUID("property", uid)
    .catch(() => notFound());

  return {
    title: property.data.meta_title,
    description: property.data.meta_description,
    openGraph: {
      title: property.data.meta_title || undefined,
      description: property.data.meta_description || undefined,
      images: property.data.meta_image.url
        ? [property.data.meta_image.url]
        : [],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const properties = await client.getAllByType("property");

  return properties.map((property) => {
    return { uid: property.uid };
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const property = await client
    .getByUID("property", uid)
    .catch(() => notFound());

  return (
    <section className="block-space">
      <div className="big-container">
        {/* Hero Image */}
        {isFilled.image(property.data.property_image) && (
          <div className="w-full mb-8 md:mb-12">
            <PrismicNextImage
              field={property.data.property_image}
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
            />
          </div>
        )}

        {/* Property Title and Tagline */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            {property.data.property_title}
          </h1>
          {isFilled.keyText(property.data.sub_heading) && (
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              {property.data.sub_heading}
            </p>
          )}
          {isFilled.keyText(property.data.tagline) && (
            <p className="text-lg text-accent-foreground font-medium">
              {property.data.tagline}
            </p>
          )}
        </div>

        {/* Property Type and Listing Type Badges */}
        <div className="flex gap-3 mb-8">
          {isFilled.select(property.data.property_type) && (
            <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold text-sm">
              {property.data.property_type}
            </span>
          )}
          {isFilled.select(property.data.listing_type) && (
            <span className="inline-block bg-muted text-foreground px-4 py-2 rounded-md font-semibold text-sm">
              For {property.data.listing_type}
            </span>
          )}
        </div>

        {/* Property Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Location */}
          {isFilled.keyText(property.data.location) && (
            <div className="bg-muted rounded-lg p-6 flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-muted-foreground">
                  {property.data.location}
                </p>
              </div>
            </div>
          )}

          {/* Price per Square Foot */}
          {isFilled.keyText(property.data.price_square_ft) && (
            <div className="bg-muted rounded-lg p-6 flex items-start gap-4">
              <DollarSign className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Price/sq.ft</h3>
                <p className="text-muted-foreground">
                  {property.data.price_square_ft}
                </p>
              </div>
            </div>
          )}

          {/* Super Built Area */}
          {isFilled.keyText(property.data.super_built_area) && (
            <div className="bg-muted rounded-lg p-6 flex items-start gap-4">
              <Home className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Built Area</h3>
                <p className="text-muted-foreground">
                  {property.data.super_built_area}
                </p>
              </div>
            </div>
          )}

          {/* Floor */}
          {isFilled.keyText(property.data.floor) && (
            <div className="bg-muted rounded-lg p-6 flex items-start gap-4">
              <Layers className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Floor</h3>
                <p className="text-muted-foreground">{property.data.floor}</p>
              </div>
            </div>
          )}

          {/* Ownership */}
          {isFilled.keyText(property.data.ownership) && (
            <div className="bg-muted rounded-lg p-6 flex items-start gap-4">
              <Key className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Ownership</h3>
                <p className="text-muted-foreground">
                  {property.data.ownership}
                </p>
              </div>
            </div>
          )}

          {/* Construction Status */}
          {isFilled.keyText(property.data.construction_status) && (
            <div className="bg-muted rounded-lg p-6 flex items-start gap-4">
              <Construction className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Status</h3>
                <p className="text-muted-foreground">
                  {property.data.construction_status}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Additional Content from Slices */}
        {property.data.slices.length > 0 && (
          <div className="prose prose-invert max-w-none md:prose-lg mb-12">
            <SliceZone slices={property.data.slices} components={components} />
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 md:mt-24 mb-8">
          <div className="rounded-lg p-8 md:p-12 bg-muted text-center">
            <h3 className="text-2xl font-bold mb-4">
              Interested in This Property?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get in touch with our team for personalized assistance, schedule a
              viewing, or get more information about this property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block text-xs bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Contact Us
              </Link>
              {isFilled.contentRelationship(property.data.route_name) && (
                <PrismicNextLink
                  field={property.data.route_name}
                  className="inline-block text-xs bg-transparent border-2 border-primary hover:bg-primary hover:text-primary-foreground text-primary font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  View Similar Properties
                </PrismicNextLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
