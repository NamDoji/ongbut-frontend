"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const ACHIEVEMENTS = [
  { value: "20+", labelVi: "Năm giảng dạy", labelEn: "Years Teaching" },
  { value: "1,500+", labelVi: "Học sinh", labelEn: "Students" },
  { value: "8", labelVi: "Lớp Online 2025", labelEn: "Classes Online 2025" },
  { value: "TOP 10", labelVi: "VINASA 2025", labelEn: "VINASA 2025" },
];

const BIO_VI = [
  "🎓 Thạc sĩ Toán Tin ứng dụng, ĐH Bách Khoa Hà Nội · 20+ năm kinh nghiệm dạy học",
  "💡 Chủ tịch ITSOL Group & Ông Bụt AI · Tiên phong ứng dụng AI vào giáo dục Việt Nam",
  "🏅 Cha của Đỗ Bảo Nam — HCV SIMOC 2020, HCV ITMC 2020, nhiều HCV Toán quốc tế",
];

const BIO_EN = [
  "🎓 M.Sc. Applied Mathematics & IT, Hanoi University of Science & Technology · 20+ years teaching",
  "💡 Chairman of ITSOL Group & Ông Bụt AI · Pioneer in AI-powered education in Vietnam",
  "🏅 Father of Do Bao Nam — Gold Medals at SIMOC 2020, ITMC 2020, multiple international Math Olympiads",
];

export function TeacherStory() {
  const { lang, t } = useLang();
  const bio = lang === "vi" ? BIO_VI : BIO_EN;

  return (
    <section
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fefdf8 0%, #fffbeb 50%, #fef9f0 100%)",
      }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#D4A017]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#2B4FFF]/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#D4A017] bg-[#D4A017]/10 rounded-full mb-3 uppercase tracking-wide border border-[#D4A017]/30">
            {t("Người thầy", "The Educator")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2342] mb-3">
            {t(
              "Người thầy đằng sau Ông Bụt AI",
              "The Educator Behind Ông Bụt AI"
            )}
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-base leading-relaxed">
            {t(
              "Hành trình 20+ năm kiến tạo những thế hệ học sinh xuất sắc",
              "A 20+ year journey of shaping outstanding generations of students"
            )}
          </p>
        </motion.div>

        {/* Main content: 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto lg:max-w-full">
              <Image
                src="/tuyen-sinh-poster.jpg"
                alt="Thầy Cường Doji"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gold overlay badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-[#0A2342]/90 backdrop-blur-sm rounded-xl p-4 border border-[#D4A017]/30">
                  <p className="text-[#F0C040] text-sm font-bold mb-1">
                    {t("Thầy Cường Doji", "Master Cuong Doji")}
                  </p>
                  <p className="text-white/80 text-xs">
                    {t("Nhà sáng lập Ông Bụt AI · Chủ tịch ITSOL Group", "Founder, Ông Bụt AI · Chairman, ITSOL Group")}
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative floating card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100 hidden lg:block">
              <p className="text-xs text-[#6B7280]">{t("Thành tích nổi bật", "Key Achievement")}</p>
              <p className="text-sm font-bold text-[#2B4FFF]">TOP 10 VINASA 2025</p>
              <p className="text-xs text-[#6B7280]">{t("Hạng mục Giáo dục & ĐT", "Education & Training")}</p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-6"
          >
            {/* Quote */}
            <blockquote className="border-l-4 border-[#D4A017] pl-5 py-2">
              <p className="text-lg sm:text-xl font-semibold text-[#0A2342] italic leading-relaxed">
                &ldquo;{t(
                  "Toán học là ngôn ngữ của tư duy — là chìa khóa cho mọi thành công",
                  "Mathematics is the language of thought — the key to every achievement"
                )}&rdquo;
              </p>
              <footer className="mt-2 text-sm text-[#6B7280]">
                — {t("Thầy Cường Doji, Nhà sáng lập Ông Bụt AI", "Master Cuong Doji, Founder of Ông Bụt AI")}
              </footer>
            </blockquote>

            {/* Bio points */}
            <div className="space-y-4">
              {bio.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.4, 0, 0.2, 1] }}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                >
                  <p className="text-sm text-[#374151] leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>

            {/* Achievement cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {ACHIEVEMENTS.map((a) => (
                <div
                  key={a.labelVi}
                  className="bg-[#0A2342] text-white rounded-xl p-3 text-center"
                >
                  <div className="text-xl font-bold text-[#F0C040]">{a.value}</div>
                  <div className="text-xs text-blue-200 mt-1 leading-tight">
                    {lang === "vi" ? a.labelVi : a.labelEn}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/gioi-thieu"
                className="inline-flex items-center justify-center gap-2 bg-[#2B4FFF] hover:bg-[#1A3ACC] text-white font-semibold rounded-xl h-11 px-6 text-sm transition-colors"
              >
                {t("Tìm hiểu thêm về chúng tôi", "Learn More About Us")}
              </Link>
              <Link
                href="/lien-he"
                className="inline-flex items-center justify-center gap-2 border border-[#2B4FFF] text-[#2B4FFF] hover:bg-[#EEF1FF] font-semibold rounded-xl h-11 px-6 text-sm transition-colors"
              >
                {t("Đặt lịch tư vấn", "Book a Consultation")}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
