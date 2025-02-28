import Image from "next/image";
import Link from "next/link";
import { BlogPostDocument } from "../../prismicio-types";
import { OutlineButton } from "./Buttons/outline-button";

export function BlogCard({ post }: { post: BlogPostDocument }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.uid}`}>
        <div className="relative aspect-[16/10] mb-4 overflow-hidden">
          <Image
            src={post.data.featured_image.url!}
            alt={post.data.featured_image.alt!}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[#C5A880]">
            <time className="text-sm uppercase">
              {post.data.date_published}
            </time>
            <span>•</span>
            <span className="text-sm uppercase">Real Estate</span>
          </div>
          <h3 className="text-xl text-gray-900 group-hover:text-[#C5A880] transition-colors">
            {post.data.title}
          </h3>
        </div>
      </Link>
    </article>
  );
}
