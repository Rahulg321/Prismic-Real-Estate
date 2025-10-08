import { SliceZone } from "@prismicio/react";
import { Content } from "@prismicio/client";

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
      </div>
    </section>
  );
}
