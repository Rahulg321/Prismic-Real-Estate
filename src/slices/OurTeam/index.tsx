import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `OurTeam`.
 */
export type OurTeamProps = SliceComponentProps<Content.OurTeamSlice>;

/**
 * Component for "OurTeam" Slices.
 */
const OurTeam = ({ slice }: OurTeamProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 px-4 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <p className="text-amber-600 uppercase tracking-wide mb-2">
          {slice.primary.tagline}
        </p>
        <h2 className="text-4xl md:text-5xl font-serif">
          {slice.primary.heading}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {slice.primary.members.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full aspect-square relative mb-4 max-w-xs mx-auto">
              <Image
                src={member.member_image.url || "/placeholder.svg"}
                alt={
                  member.member_image.alt || "image of local bricks team member"
                }
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="text-xl font-medium text-center">
              {member.first_name} {member.last_name}
            </h3>
            <p className="text-amber-600 text-center">{member.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
