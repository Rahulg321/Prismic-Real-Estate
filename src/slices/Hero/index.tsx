"use client";

import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useEffect, useState } from "react";

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
      className="relative overflow-hidden bg-slate-900 min-h-[75vh] max-h-[80vh]"
    >
      <video
        src={"/background-video.mp4"}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white px-12 text-pretty text-center">
        <span className="mb-2 text-2xl lg:text-4xl">
          {slice.primary.heading}
        </span>
        <span>{slice.primary.tagline}</span>
        <Button>Click</Button>
      </div>
    </section>
  );
};

export default Hero;
