import { SliceZone } from "@prismicio/react";
import { Content } from "@prismicio/client";
import Link from "next/link";

import { components } from "@/slices";
import Bounded from "@/components/Bounded";
import { formatDate } from "@/lib/utils";
import { PrismicNextImage } from "@prismicio/next";

export default function ContentBody({
  page,
}: {
  page: Content.BlogPostDocument | Content.NewsDocument;
}) {
  const formattedDate = formatDate(page.data.date_published);
  return (
    <section className="block-space">
      <div className="big-container">
        {/* Featured Image */}
        <div className="w-full mb-8 md:mb-12">
          <PrismicNextImage
            field={page.data.featured_image}
            className="w-full h-[300px] md:h-[450px] lg:h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Title */}
        <div className="mb-6">
          <h3 className="mb-0">{page.data.title}</h3>
        </div>

        {/* Tags */}
        <div className="flex gap-4 text-yellow-400 mb-6">
          {page.tags.map((tag, index) => (
            <span key={index} className="text-xl font-bold">
              {tag}
            </span>
          ))}
        </div>

        {/* Date */}
        <p className="border-b border-slate-600 text-xl font-medium pb-4 mb-8">
          {formattedDate}
        </p>

        {/* Content */}
        <div className="prose-xs prose prose-invert mt-12 w-full max-w-none md:prose-lg prose-h1:text-4xl md:mt-20">
          <SliceZone slices={page.data.slices} components={components} />
        </div>

        {/* Call to Action */}
        <div className="mt-16 md:mt-24 mb-8 text-center">
          <div className="rounded-lg p-8 md:p-12 bg-muted">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Learning More?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get in touch with our team for personalized assistance and expert
              advice on your real estate needs.
            </p>
            <Link
              href="/contact"
              className="inline-block text-xs bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
