import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Trophy } from "lucide-react";

const LINKS = {
  courses: [
    { label: "Toán tư duy", href: "/khoa-hoc" },
    { label: "Ngữ văn", href: "/khoa-hoc" },
    { label: "Tiếng Anh", href: "/khoa-hoc" },
    { label: "Vật lý", href: "/khoa-hoc" },
    { label: "Hóa học", href: "/khoa-hoc" },
  ],
  info: [
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Giáo viên", href: "/giao-vien" },
    { label: "Bảng vàng", href: "/bang-vang" },
    { label: "Tin tức", href: "/tin-tuc" },
    { label: "Liên hệ", href: "/lien-he" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#2B4FFF] text-white">
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
            <p className="text-sm text-blue-100 leading-relaxed mb-4">
              Nền tảng giáo dục AI cá nhân hóa — học đúng cách, đúng lúc, đúng
              người.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <Phone className="w-4 h-4 text-[#F0C040]" />
                <span>0913 999 888</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <Mail className="w-4 h-4 text-[#F0C040]" />
                <span>info@ongbut.edu.vn</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-blue-100">
                <MapPin className="w-4 h-4 text-[#F0C040] mt-0.5" />
                <span>Hà Nội, Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-[#F0C040]">
              Khóa học
            </h3>
            <ul className="space-y-2">
              {LINKS.courses.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-[#F0C040]">
              Thông tin
            </h3>
            <ul className="space-y-2">
              {LINKS.info.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-[#F0C040]">
              Pháp lý
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/chinh-sach-bao-mat"
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  href="/lien-he"
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* VINASA award strip */}
        <div className="mt-8 mb-4 flex items-center justify-center gap-2 py-2 px-4 bg-white/10 rounded-xl border border-white/20 w-fit mx-auto">
          <Trophy className="w-4 h-4 text-[#F0C040] flex-shrink-0" />
          <span className="text-xs text-white font-medium">
            TOP 10 Doanh nghiệp Công nghệ Số Việt Nam 2025 · VINASA · Hạng mục Giáo Dục &amp; Đào Tạo
          </span>
        </div>

        <div className="mt-4 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-100">
            © {new Date().getFullYear()} Ông Bụt AI Education. Bảo lưu mọi
            quyền.
          </p>
          <p className="text-sm text-blue-100">
            Website:{" "}
            <a
              href="https://ongbut.edu.vn"
              className="text-[#F0C040] hover:text-yellow-300"
            >
              ongbut.edu.vn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
