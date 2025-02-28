import { SliceZone } from "@prismicio/react";
import { Content } from "@prismicio/client";

import { components } from "@/slices";
import Bounded from "@/components/Bounded";
import { formatDate } from "@/lib/utils";

export default function ContentBody({
  page,
}: {
  page: Content.BlogPostDocument | Content.NewsDocument;
}) {
  const formattedDate = formatDate(page.data.date_published);
  return (
    <section className="block-space big-container">
      <h3 className="mb-4 mt-4">{page.data.title}</h3>
      <div className="flex gap-4 text-yellow-400">
        {page.tags.map((tag, index) => (
          <span key={index} className="text-xl font-bold">
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-8 border-b border-slate-600 text-xl font-medium ">
        {formattedDate}
      </p>
      <div className="prose-xs prose prose-invert mt-12 w-full max-w-none md:prose-lg prose-h1:text-4xl md:mt-20">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </section>
  );
}
