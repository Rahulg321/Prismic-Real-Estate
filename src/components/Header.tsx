"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const propertyItems = [
  { title: "Residential", href: "/residential" },
  { title: "Commericial", href: "/commercial" },
  { title: "Resale", href: "/resale" },
  { title: "Off Plan", href: "/off-plan" },
];

const serviceItems = [
  { title: "Property Management", href: "/services/property-management" },
  { title: "Mortgage Services", href: "/services/mortgage" },
  { title: "Valuation", href: "/services/valuation" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              LocalBricks
            </Link>
          </div>
          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Buy</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      {propertyItems.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      {serviceItems.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about-us" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <div className="hidden md:flex items-center">
            <Button
              variant="outline"
              className="text-gray-900 border-gray-900 hover:bg-gray-100"
            >
              Sign In
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
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
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              href="/properties"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Properties
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2">
              <Button
                variant="outline"
                className="w-full text-gray-900 border-gray-900 hover:bg-gray-100"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

const ListItem = ({
  className,
  title,
  href,
  ...props
}: {
  className?: string;
  title: string;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
