import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `StatsSlice`.
 */
export type StatsSliceProps = SliceComponentProps<Content.StatsSliceSlice>;

/**
 * Component for "StatsSlice" Slices.
 */
const StatsSlice = ({ slice }: StatsSliceProps) => {
  const stats = [
    { value: "10", label: "YEARS OF EXPERIENCE" },
    { value: "400", label: "DEALS CLOSED" },
    { value: "20%", label: "AVERAGE ROI" },
    { value: "2", label: "COUNTRIES COVERED" },
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full py-16 bg-[#f8f5f0]"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold text-black mb-2">
                {stat.value}
              </span>
              <span className="text-sm uppercase tracking-wider text-[#b9a37e]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSlice;
