import { KeyTextField } from "@prismicio/client";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  text: KeyTextField;
  author: KeyTextField;
}

export function TestimonialCard({ text, author }: TestimonialCardProps) {
  return (
    <div className="p-8 border border-[#C5A880]/20 rounded-sm">
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#C5A880] text-[#C5A880]" />
        ))}
      </div>
      <span className="text-gray-700 mb-6 leading-relaxed">{text}</span>
      <p className=" text-xl text-gray-800">{author}</p>
    </div>
  );
}
