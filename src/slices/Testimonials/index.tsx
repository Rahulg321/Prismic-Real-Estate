import { TestimonialCard } from "@/components/testimonial-card";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps) => {
  return (
    <section className="py-16 md:py-24 bg-[#FDF8F5]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center text-gray-800 mb-12">
          Client Testimonials
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {slice.primary.client_testimonial.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.content}
              author={testimonial.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
