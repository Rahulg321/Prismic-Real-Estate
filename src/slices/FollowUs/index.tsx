"use client";

import { useState } from "react";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FollowUs`.
 */
export type FollowUsProps = SliceComponentProps<Content.FollowUsSlice>;

/**
 * Component for "FollowUs" Slices.
 */
const FollowUs = ({ slice }: FollowUsProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    console.log("Subscribing email:", email);
  };

  return (
    <section className="container mx-auto px-4 py-16 relative">
      <div className="grid md:grid-cols-2 gap-12 md:gap-24">
        <div className="absolute left-1/2 top-16 bottom-16 w-1 bg-[#b39671] hidden md:block" />
        {/* Follow Us Section */}
        <div className="text-center">
          <h2 className="text-4xl mb-4">Follow Us</h2>
          <p className="text-gray-600 mb-8">
            Don&apos;t miss promotions, follow us for the latest news
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="#"
              className="text-[#C5A880] hover:text-[#b39671] transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={32} />
            </Link>
            <Link
              href="#"
              className="text-[#C5A880] hover:text-[#b39671] transition-colors"
              aria-label="Connect with us on LinkedIn"
            >
              <Linkedin size={32} />
            </Link>
            <Link
              href="#"
              className="text-[#C5A880] hover:text-[#b39671] transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={32} />
            </Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-center">
          <h2 className="text-4xl  mb-4">Don&apos;t Miss Our News</h2>
          <p className="text-gray-600 mb-8">Subscribe now and thank us later</p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-300"
              required
            />
            <Button
              type="submit"
              variant="outline"
              className="min-w-[120px] border-gray-300 hover:bg-[#C5A880] hover:text-white hover:border-[#C5A880]"
            >
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
