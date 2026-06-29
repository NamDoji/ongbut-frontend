"use client";

import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const PARTICLES = [
  { cls: "top-[15%] left-[8%]  w-2 h-2",   delay: "0s" },
  { cls: "top-[25%] right-[12%] w-3 h-3",  delay: "1s" },
  { cls: "top-[60%] left-[75%] w-2 h-2",   delay: "2s" },
  { cls: "top-[75%] left-[20%] w-1.5 h-1.5", delay: "1.5s" },
  { cls: "top-[10%] left-[50%] w-1 h-1",   delay: "0.5s" },
  { cls: "top-[50%] right-[5%] w-2.5 h-2.5", delay: "2.5s" },
];

const STATS = [
  { vi: "1.500+", en: "1,500+", labelVi: "Học sinh",     labelEn: "Students"   },
  { vi: "20+",    en: "20+",    labelVi: "Giáo viên",    labelEn: "Teachers"   },
  { vi: "10+",    en: "10+",    labelVi: "Năm kinh nghiệm", labelEn: "Years Exp." },
  { vi: "4.9★",   en: "4.9★",  labelVi: "Đánh giá",     labelEn: "Rating"     },
];

export function HeroSection() {
  const { t } = useLang();

  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg,#0A2342 0%,#1a3a6b 60%,#0d2d5e 100%)" }}
    >
      {/* Floating particles — CSS only, no framer-motion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className={`absolute rounded-full bg-white/20 hero-float ${p.cls}`}
            style={{ animationDelay: p.delay, animationDuration: `${4 + i}s` }}
          />
        ))}
      </div>

      {/* Soft glow blobs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="max-w-3xl">

          {/* VINASA badge */}
          <div className="hero-fade-in inline-flex items-center gap-2 bg-[#D4A017]/20 border border-[#D4A017]/40 text-[#D4A017] text-xs font-bold px-4 py-2 rounded-full mb-6">
            <Trophy className="w-3.5 h-3.5 shrink-0" />
            TOP 10 VINASA 2025 &nbsp;·&nbsp; {t("Giáo dục & Đào tạo", "Education & Training")}
          </div>

          {/* Headline */}
          <h1 className="hero-fade-in-up text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-4">
            Ông Bụt AI
          </h1>

          <p className="hero-fade-in-up hero-delay-1 text-xl sm:text-2xl md:text-3xl font-semibold text-[#D4A017] mb-6">
            {t("Học thông minh. Nghĩ sâu. Vươn xa.", "Learn Smart. Think Deep. Go Far.")}
          </p>

          <p className="hero-fade-in-up hero-delay-2 text-base md:text-lg text-blue-200 mb-10 max-w-xl leading-relaxed">
            {t(
              "Nền tảng AI cá nhân hóa — học đúng cách, đúng lúc, đúng người. Giỏi Toán · Mạnh Tin · Tư duy khai phóng.",
              "AI-personalized education — the right method, right time, right learner. Math · Tech · Liberal Thinking."
            )}
          </p>

          {/* CTAs */}
          <div className="hero-fade-in-up hero-delay-3 flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center gap-2 bg-[#D4A017] text-[#0A2342] font-bold px-8 py-4 rounded-xl hover:bg-[#F0C040] transition-colors text-base shadow-lg"
            >
              {t("Đăng ký tư vấn miễn phí", "Free Consultation")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tuyen-sinh"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/25 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors text-base"
            >
              {t("Xem tuyển sinh 2025", "See 2025 Enrollment")}
            </Link>
          </div>

          {/* Stats strip */}
          <div className="hero-fade-in-up hero-delay-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {STATS.map((s) => (
              <div
                key={s.vi}
                className="rounded-xl p-4 text-center"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <p className="text-xl sm:text-2xl font-extrabold text-white">{s.vi}</p>
                <p className="text-xs text-blue-300 mt-1">{t(s.labelVi, s.labelEn)}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
