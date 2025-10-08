"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Buy",
    children: [
      {
        label: "Residential",
        children: [
          {
            label: "Off-Plan",
            href: "/buy/residential/off-plan",
          },
          {
            label: "Resale",
            href: "/buy/residential/resale",
          },
        ],
      },
      {
        label: "Commercial",
        children: [
          {
            label: "Off-Plan",
            href: "/buy/commercial/off-plan",
          },
          {
            label: "Resale",
            href: "/buy/commercial/resale",
          },
        ],
      },
    ],
  },
  {
    label: "Rent",
    children: [
      {
        label: "Residential",
        children: [
          {
            label: "Apartments",
            href: "/rent/residential/apartments",
          },
          {
            label: "Villas",
            href: "/rent/residential/villas",
          },
          {
            label: "Townhouses",
            href: "/rent/residential/townhouses",
          },
          {
            label: "Penthouses",
            href: "/rent/residential/penthouses",
          },
        ],
      },
      {
        label: "Commercial",
        children: [
          {
            label: "Offices",
            href: "/rent/commercial/offices",
          },
          {
            label: "Shops",
            href: "/rent/commercial/shops",
          },
          {
            label: "Warehouses",
            href: "/rent/commercial/warehouses",
          },
          {
            label: "Retail",
            href: "/rent/commercial/retail",
          },
        ],
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="relative z-50">
      <div className="flex h-20 items-center justify-between 0 px-4 md:px-6 ">
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:flex-1 md:justify-center md:gap-8">
          {menuItems.map((item) => (
            <DesktopMenuItem key={item.label} item={item} />
          ))}
        </nav>
      </div>

      {/* Mobile navigation overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile navigation - slides from right */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-[80%] max-w-sm bg-black/95 shadow-xl md:hidden",
          "transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-20 items-center justify-between px-4 border-b border-gray-800">
          <span className="text-xl font-bold text-white">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} className="text-white" />
          </button>
        </div>
        <nav className="h-[calc(100%-5rem)] overflow-y-auto">
          <div className="flex flex-col p-4">
            {menuItems.map((item) => (
              <MobileMenuItem
                key={item.label}
                item={item}
                closeMenu={() => setMobileMenuOpen(false)}
              />
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

function DesktopMenuItem({ item }: { item: MenuItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubMenuClick = (label: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  if (!item.children) {
    return (
      <Link href={item.href || "#"} className="relative px-1 py-2 font-medium">
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-1 py-2 font-medium"
      >
        {item.label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full min-w-[220px] rounded-md bg-white py-2 shadow-lg">
          {item.children.map((child) => (
            <div key={child.label} className="relative">
              {!child.children ? (
                <Link
                  href={child.href || "#"}
                  className="flex w-full items-center px-4 py-2 text-gray-800"
                >
                  <span className="mr-2 h-2 w-2 rounded-full bg-gray-400"></span>
                  {child.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={(e) => handleSubMenuClick(child.label, e)}
                    className="flex w-full cursor-pointer items-center justify-between px-4 py-2 text-gray-800"
                  >
                    <div className="flex items-center">
                      <span className="mr-2 h-2 w-2 rounded-full bg-gray-400"></span>
                      {child.label}
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        activeSubmenu === child.label
                          ? "rotate-180"
                          : "-rotate-90"
                      )}
                    />
                  </button>
                  {activeSubmenu === child.label && (
                    <div className="absolute left-full top-0 min-w-[220px] rounded-md bg-white py-2 shadow-lg">
                      {child.children.map((subChild) => (
                        <Link
                          key={subChild.label}
                          href={subChild.href || "#"}
                          className="flex w-full items-center px-4 py-2 text-gray-800"
                        >
                          <span className="mr-2 h-2 w-2 rounded-full bg-gray-400"></span>
                          {subChild.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileMenuItem({
  item,
  closeMenu,
}: {
  item: MenuItem;
  closeMenu: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState<string | null>(null);

  if (!item.children) {
    return (
      <Link
        href={item.href || "#"}
        className="border-b border-gray-800 py-4 font-medium text-white"
        onClick={closeMenu}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-lg font-medium text-white"
      >
        {item.label}
        <ChevronDown
          className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <div className="ml-4 space-y-1 pb-4">
          {item.children.map((child) => (
            <div key={child.label}>
              {!child.children ? (
                <Link
                  href={child.href || "#"}
                  className="flex items-center py-2 text-white/80"
                  onClick={closeMenu}
                >
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                  {child.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setSubMenuOpen(
                        subMenuOpen === child.label ? null : child.label
                      )
                    }
                    className="flex w-full items-center justify-between py-2 text-white/80"
                  >
                    <div className="flex items-center">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                      {child.label}
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        subMenuOpen === child.label && "rotate-180"
                      )}
                    />
                  </button>
                  {subMenuOpen === child.label && (
                    <div className="ml-4 space-y-1 py-2">
                      {child.children.map((subChild) => (
                        <Link
                          key={subChild.label}
                          href={subChild.href || "#"}
                          className="flex items-center py-2 text-white/70"
                          onClick={closeMenu}
                        >
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gray-500"></span>
                          {subChild.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-2xl font-bold sm:text-3xl"
    >
      <Image
        src={"/logos/bricks-logo.png"}
        alt="local bricks logo"
        width={200}
        height={200}
      />
    </Link>
  );
}
