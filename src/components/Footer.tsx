import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left Column - Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src={"/logos/bricks-logo.png"}
                alt="Bricks Logo"
                width={200}
                height={200}
              />
            </div>
            <p className="text-base leading-relaxed">
              Premium Service. Follow us for the latest news about real estate.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="transition-colors hover:text-amber-500">
                <Facebook size={32} fill="white" />
              </a>
              <a href="#" className="transition-colors hover:text-amber-500">
                <Linkedin size={32} fill="white" />
              </a>
              <a href="#" className="transition-colors hover:text-amber-500">
                <Instagram size={32} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Middle Column - Contact */}
          <div className="space-y-6">
            <h2 className="text-4xl font-serif">Contact</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={24} className="mt-1 flex-shrink-0" />
                <span className="text-lg">+91-9560014664</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={24} className="mt-1 flex-shrink-0" />
                <span className="text-lg">
                  Vatika Business Park, Section 49, Gurugram, Haryana - 12201
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={24} className="mt-1 flex-shrink-0" />
                <span className="text-lg">rakeshbajaj1958@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Column - Newsletter */}
          <div className="space-y-6">
            <h2 className="text-4xl font-serif">Don't Miss Our News</h2>
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
