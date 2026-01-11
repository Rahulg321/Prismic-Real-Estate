import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { BackButton } from "@/components/back-button";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const member = await client
    .getByUID("teammember", uid)
    .catch(() => notFound());

  return (
    <section className="block-space-mini">
      <div className="big-container">
        {/* Back Button */}
        <BackButton />

        {/* Team Member Header */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
          {/* Headshot */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <PrismicNextImage
                field={member.data.headshot}
                className="object-cover w-full h-full"
                imgixParams={{ fit: "crop" }}
              />
            </div>
          </div>

          {/* Member Info */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              {member.data.first_name} {member.data.last_name}
            </h1>
            <p className="text-amber-600 text-xl md:text-2xl font-medium mb-6">
              {member.data.designation}
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-8">
              {member.data.email && (
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">Email:</span>
                  <a
                    href={`mailto:${member.data.email}`}
                    className="text-amber-600 hover:text-amber-500 transition-colors"
                  >
                    {member.data.email}
                  </a>
                </div>
              )}
              {member.data.phone_number && (
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">Phone:</span>
                  <a
                    href={`tel:${member.data.phone_number}`}
                    className="text-amber-600 hover:text-amber-500 transition-colors"
                  >
                    {member.data.phone_number}
                  </a>
                </div>
              )}
              {member.data.location && (
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">Location:</span>
                  <span>{member.data.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        {member.data.description && (
          <div className="prose-xs prose mt-12 w-full max-w-none md:prose-lg prose-h1:text-4xl md:mt-20 mb-12">
            <PrismicRichText field={member.data.description} />
          </div>
        )}

        {/* Slices */}
        {member.data.slices && member.data.slices.length > 0 && (
          <div className="mt-12">
            <SliceZone slices={member.data.slices} components={components} />
          </div>
        )}
      </div>
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const member = await client
    .getByUID("teammember", uid)
    .catch(() => notFound());

  return {
    title:
      member.data.meta_title ||
      `${member.data.first_name} ${member.data.last_name}`,
    description:
      member.data.meta_description ||
      `${member.data.designation} at our real estate team`,
    openGraph: {
      images: [
        {
          url: member.data.meta_image?.url || member.data.headshot?.url || "",
          width:
            member.data.meta_image?.dimensions?.width ||
            member.data.headshot?.dimensions?.width ||
            0,
          height:
            member.data.meta_image?.dimensions?.height ||
            member.data.headshot?.dimensions?.height ||
            0,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const members = await client.getAllByType("teammember");

  return members.map((member) => {
    return { uid: member.uid };
  });
}
