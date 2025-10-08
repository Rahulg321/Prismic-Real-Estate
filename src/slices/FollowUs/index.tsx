"use client";

import { useState } from "react";
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
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
      <div className="">
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
              <Youtube size={32} />
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
      </div>
    </section>
  );
};

export default FollowUs;
