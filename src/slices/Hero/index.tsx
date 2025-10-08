import { OutlineButton } from "@/components/Buttons/outline-button";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full min-h-[80vh] overflow-hidden bg-slate-900"
    >
      {isFilled.link(slice.primary.background_video) ? (
        <video
          src={slice.primary.background_video.url as string}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <video
          src={"/local-bricks-bgVideo.mp4"}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
            {slice.primary.heading}
          </h1>

          {/* Tagline */}
          {slice.primary.tagline && (
            <p className="text-lg sm:text-xl  text-white/90 font-light max-w-3xl mx-auto drop-shadow-lg">
              {slice.primary.tagline}
            </p>
          )}

          <div className="pt-4 md:pt-6">
            {isFilled.link(slice.primary.button_link) ? (
              <PrismicNextLink href="/buy/residential/off-plan">
                <OutlineButton className="text-white border-white hover:bg-white hover:text-black transition-all duration-300 text-base px-6 py-3">
                  {slice.primary.button_link.text || "Learn More"}
                </OutlineButton>
              </PrismicNextLink>
            ) : (
              <Link href="/buy/residential/off-plan">
                <OutlineButton className="text-white border-white hover:bg-white hover:text-black transition-all duration-300 text-base px-6 py-3">
                  Learn More
                </OutlineButton>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
