"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Trang chủ", href: "/" },
  { label: "Khóa học", href: "/khoa-hoc" },
  { label: "Lớp học", href: "/danh-sach-lop-hoc" },
  { label: "Giáo viên", href: "/giao-vien" },
  { label: "Bảng vàng", href: "/bang-vang" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Liên hệ", href: "/lien-he" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Ông Bụt AI"
              width={120}
              height={42}
              priority
              className="h-9 w-auto lg:h-10"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-[#2B4FFF] bg-[#EEF1FF]"
                    : "text-[#0A1628] hover:text-[#2B4FFF] hover:bg-[#EEF1FF]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/lien-he#consult"
              className="inline-flex items-center justify-center bg-[#2B4FFF] hover:bg-[#1A3ACC] text-white rounded-lg px-5 h-10 text-sm font-semibold transition-colors"
            >
              Đăng ký tư vấn
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[#0A1628] hover:bg-[#EEF1FF]"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-[#2B4FFF] bg-[#EEF1FF]"
                    : "text-[#0A1628] hover:text-[#2B4FFF] hover:bg-[#EEF1FF]"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/lien-he#consult"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center bg-[#2B4FFF] hover:bg-[#1A3ACC] text-white rounded-lg h-10 text-sm font-semibold transition-colors"
              >
                Đăng ký tư vấn miễn phí
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
