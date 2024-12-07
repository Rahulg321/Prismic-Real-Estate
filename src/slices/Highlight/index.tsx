import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Highlight`.
 */
export type HighlightProps = SliceComponentProps<Content.HighlightSlice>;

/**
 * Component for "Highlight" Slices.
 */
const Highlight = ({ slice }: HighlightProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for highlight (variation: {slice.variation}) Slices
    </section>
  );
};

export default Highlight;
