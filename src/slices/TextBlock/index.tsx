import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps) => {
  return (
    <div className="prose max-w-2xl text-justify mx-auto">
      <PrismicRichText field={slice.primary.textblock} />
    </div>
  );
};

export default TextBlock;
