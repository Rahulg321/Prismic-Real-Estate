import ContactForm from "@/components/contact-form";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactFormSlice`.
 */
export type ContactFormSliceProps =
  SliceComponentProps<Content.ContactFormSliceSlice>;

/**
 * Component for "ContactFormSlice" Slices.
 */
const ContactFormSlice = ({ slice }: ContactFormSliceProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="text-center ">
        <p className="text-amber-600 uppercase font-medium">
          {slice.primary.tagline}
        </p>
        <div className=" py-2 px-4 inline-block w-full max-w-md">
          <h1 className="text-2xl font-bold">{slice.primary.heading}</h1>
        </div>
        <p className="text-sm ">{slice.primary.sub_heading}</p>
      </div>

      <ContactForm />
    </section>
  );
};

export default ContactFormSlice;
