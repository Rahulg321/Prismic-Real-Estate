import {
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import WhitePrismicLogo from "../../public/logos/white-logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left Column - Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src={WhitePrismicLogo}
                alt="Local Bricks Logo"
                width={100}
                height={100}
              />
            </div>
            <p className="text-base leading-relaxed">
              Premium Service. Follow us for the latest news about real estate.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-amber-500"
              >
                <FaYoutube size={32} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-amber-500"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://www.instagram.com/therealocalbricks/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-amber-500"
              >
                <FaInstagram size={32} />
              </a>
            </div>
          </div>

          {/* Middle Column - Contact */}
          <div className="space-y-6">
            <h2 className="text-4xl font-serif">Contact</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaPhone size={24} className="mt-1 flex-shrink-0" />
                <span className="text-lg">+91-9560014664</span>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt size={24} className="mt-1 flex-shrink-0" />
                <span className="text-lg">
                  Vatika Business Park, Section 49, Gurugram, Haryana - 12201
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope size={24} className="mt-1 flex-shrink-0" />
                <span className="text-lg">rakeshbajaj1958@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Column - Newsletter */}
          <div className="space-y-6">
            <h2 className="text-4xl font-serif">Don&apos;t Miss Our News</h2>
            <p className="text-lg">Subscribe now and thank us later</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="you@example.com"
                className="flex-1 border-white bg-transparent text-white placeholder:text-gray-400"
              />
              <Button
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-black"
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-16 border-t border-gray-700 pt-8 text-center">
          <p className="text-base">
            © 2025 Copyright message goes here. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
