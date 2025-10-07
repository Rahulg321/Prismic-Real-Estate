import Image from "next/image";
import Link from "next/link";
import { Youtube, Instagram, Linkedin, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <Image
                src="/logos/bricks-logo.png"
                alt="local bricks logo"
                width={150}
                height={150}
              />
            </div>
            <p className="mb-4">Premium Service</p>
            <p className="mb-4">
              Follow us for the latest news about real estate
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Youtube size={24} />
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
                <Link
                  href="/buy/residential/off-plan"
                  className="hover:text-white"
                >
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
            <h3 className="text-lg font-semibold mb-4 text-white">Details</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone
                  size={20}
                  className="mt-1 text-green-500 flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <Link
                    href="https://wa.me/919560014664"
                    className="hover:text-white"
                  >
                    +91-9560014664
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-1">
                <MapPin size={20} className="mt-1 text-red-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p className="text-sm">
                    Vatika Business Park, Section 49,
                    <br />
                    Sohna Road, Gurugram,
                    <br />
                    Haryana - 122018
                  </p>
                </div>
              </div>
            </div>
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
