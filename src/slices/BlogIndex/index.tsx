import { BlogCard } from "@/components/blog-card";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogIndex`.
 */
export type BlogIndexProps = SliceComponentProps<Content.BlogIndexSlice>;

/**
 * Component for "BlogIndex" Slices.
 */
const BlogIndex = async ({ slice }: BlogIndexProps) => {
  const client = createClient();
  const blogposts = await client.getAllByType("blog_post");

  return (
    <section className="big-container block-space">
      <div className="">
        <div className="text-center mb-12">
          <p className="text-[#C5A880] text-lg mb-4">
            DON&apos;T MISS THE LATEST NEWS
          </p>
          <h2 className="md:text-5xl mb:6 md:mb:8 lg:mb-12">Our Blog</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogposts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogIndex;
