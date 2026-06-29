"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Trophy, MessageCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export function Footer() {
  const { lang, t } = useLang();

  const QUICK_LINKS_VI = [
    { label: "Tuyển sinh 2025", href: "/tuyen-sinh" },
    { label: "Khóa học", href: "/khoa-hoc" },
    { label: "Giáo viên", href: "/giao-vien" },
    { label: "Bảng vàng", href: "/bang-vang" },
    { label: "Liên hệ", href: "/lien-he" },
  ];

  const QUICK_LINKS_EN = [
    { label: "2025 Enrollment", href: "/tuyen-sinh" },
    { label: "Courses", href: "/khoa-hoc" },
    { label: "Teachers", href: "/giao-vien" },
    { label: "Honor Roll", href: "/bang-vang" },
    { label: "Contact", href: "/lien-he" },
  ];

  const quickLinks = lang === "vi" ? QUICK_LINKS_VI : QUICK_LINKS_EN;

  const ZALO_GROUPS = [
    { label: t("Zalo nhóm 2K13 (Lớp 12)", "Zalo Group 2K13 (Grade 12)"), href: "https://zalo.me/g/example-2k13" },
    { label: t("Zalo nhóm 2K14 (Lớp 11)", "Zalo Group 2K14 (Grade 11)"), href: "https://zalo.me/g/example-2k14" },
    { label: t("Zalo nhóm 2K15 (Lớp 10)", "Zalo Group 2K15 (Grade 10)"), href: "https://zalo.me/g/example-2k15" },
    { label: t("Zalo nhóm 2K16 (Lớp 9)", "Zalo Group 2K16 (Grade 9)"), href: "https://zalo.me/g/example-2k16" },
  ];

  return (
    <footer className="bg-[#0A2342] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="Ông Bụt AI"
                width={120}
                height={42}
                className="h-9 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-blue-200 leading-relaxed mb-4">
              {t(
                "Nền tảng giáo dục AI cá nhân hóa — học đúng cách, đúng lúc, đúng người.",
                "AI-personalized education platform — the right method, at the right time, for the right learner."
              )}
            </p>
            <div className="space-y-2">
              <a
                href="tel:0904290583"
                className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F0C040]" />
                <span>0904 290 583</span>
              </a>
              <a
                href="https://zalo.me/0904290583"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#F0C040]" />
                <span>Zalo: 0904 290 583</span>
              </a>
              <a
                href="mailto:cuong@ongbut.vn"
                className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#F0C040]" />
                <span>cuong@ongbut.vn</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-blue-200">
                <MapPin className="w-4 h-4 text-[#F0C040] mt-0.5 flex-shrink-0" />
                <span>
                  {t(
                    "SH1 tòa B, Hà Nội Paragon, ngõ 86 Duy Tân, Cầu Giấy, Hà Nội",
                    "SH1 Block B, Hanoi Paragon, No. 86 Duy Tan Alley, Cau Giay, Hanoi"
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-[#F0C040]">
              {t("Liên kết nhanh", "Quick Links")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zalo Groups */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-[#F0C040]">
              {t("Nhóm Zalo lớp học", "Class Zalo Groups")}
            </h3>
            <ul className="space-y-2">
              {ZALO_GROUPS.map((g) => (
                <li key={g.label}>
                  <a
                    href={g.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-200 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <MessageCircle className="w-3 h-3 text-[#F0C040]" />
                    {g.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-[#F0C040]">
              {t("Pháp lý", "Legal")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/chinh-sach-bao-mat"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  {t("Chính sách bảo mật", "Privacy Policy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/lien-he"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  {t("Điều khoản sử dụng", "Terms of Service")}
                </Link>
              </li>
              <li>
                <Link
                  href="/gioi-thieu"
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  {t("Về chúng tôi", "About Us")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* VINASA award strip */}
        <div className="mt-8 mb-4 flex items-center justify-center gap-2 py-2 px-4 bg-white/10 rounded-xl border border-white/20 w-fit mx-auto">
          <Trophy className="w-4 h-4 text-[#F0C040] flex-shrink-0" />
          <span className="text-xs text-white font-medium">
            {t(
              "TOP 10 Doanh nghiệp Công nghệ Số Việt Nam 2025 · VINASA · Hạng mục Giáo Dục & Đào Tạo",
              "TOP 10 Vietnam Digital Technology Enterprises 2025 · VINASA · Education & Training Category"
            )}
          </span>
        </div>

        <div className="mt-4 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} {t("Ông Bụt AI. Thuộc ITSOL Group.", "Ông Bụt AI. Part of ITSOL Group.")}
          </p>
          <p className="text-sm text-blue-200">
            {t("Website", "Website")}:{" "}
            <a
              href="https://ongbut.vn"
              className="text-[#F0C040] hover:text-yellow-300"
            >
              ongbut.vn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
