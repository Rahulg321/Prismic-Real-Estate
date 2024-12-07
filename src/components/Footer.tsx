import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Column */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="LocalBricks Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <h2 className="text-2xl font-bold text-white">LocalBricks</h2>
            </div>
            <p className="mb-4">Premium Service</p>
            <p className="mb-4">
              Follow us for the latest news about real estate
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="hover:text-white">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Second Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-white">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Subscribe to Our Newsletter
            </h3>
            <p className="mb-4">Stay updated with our latest news and offers</p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white border-gray-700"
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} LocalBricks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
