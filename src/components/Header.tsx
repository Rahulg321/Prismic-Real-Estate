import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              LocalBricks
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link
              href="/about"
              className="text-base font-medium text-white hover:text-gray-300"
            >
              About
            </Link>
            <Link
              href="/properties"
              className="text-base font-medium text-white hover:text-gray-300"
            >
              Properties
            </Link>
            <Link
              href="/services"
              className="text-base font-medium text-white hover:text-gray-300"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-white hover:text-gray-300"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900"
            >
              Sign In
            </Button>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <Button variant="ghost" className="text-white">
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
