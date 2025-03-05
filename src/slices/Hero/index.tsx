import { OutlineButton } from "@/components/Buttons/outline-button";
import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-slate-900 min-h-screen"
    >
      <video
        src={"/local-bricks-bgVideo.mp4"}
        className="w-full h-full object-cover "
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white px-12 text-pretty text-center">
        <div className="mb-4 md:mb-6 lg:mb-8">
          <h1>{slice.primary.heading}</h1>
          <span>{slice.primary.tagline}</span>
        </div>
        <OutlineButton className="text-white border-white">
          View All Properties
        </OutlineButton>
      </div>
    </section>
  );
};

export default Hero;
