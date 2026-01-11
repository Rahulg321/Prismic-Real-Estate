import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { TeamCard } from "@/components/team-card";

/**
 * Props for `OurTeam`.
 */
export type OurTeamProps = SliceComponentProps<Content.OurTeamSlice>;

/**
 * Component for "OurTeam" Slices.
 */
const OurTeam = async ({ slice }: OurTeamProps) => {
  const client = createClient();

  const members = await client.getAllByType("teammember");

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
        {members.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
