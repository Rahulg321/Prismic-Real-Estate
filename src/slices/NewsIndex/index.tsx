import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";

/**
 * Props for `NewsIndex`.
 */
export type NewsIndexProps = SliceComponentProps<Content.NewsIndexSlice>;

/**
 * Component for "NewsIndex" Slices.
 */
const NewsIndex = async ({ slice }: NewsIndexProps) => {
  const client = createClient();
  const allNews = await client.getAllByType("news");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12 px-4 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-amber-600 uppercase tracking-wide text-sm font-medium mb-2">
            {slice.primary.tagline}
          </p>
          <h2 className="">{slice.primary.heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allNews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 md:h-56">
                <Image
                  src={item.data.featured_image.url || "/placeholder.svg"}
                  alt={item.data.featured_image.alt || "Photo cover of news"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.data.title}
                </h3>
                <Link
                  href={`/news/${item.uid}`}
                  className="mt-2 inline-block text-amber-600 text-sm font-medium"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsIndex;
