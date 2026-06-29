"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

const floatVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const PARTICLES = [
  { cx: "10%", cy: "20%", r: 3, delay: 0 },
  { cx: "85%", cy: "15%", r: 5, delay: 1 },
  { cx: "70%", cy: "75%", r: 4, delay: 2 },
  { cx: "25%", cy: "80%", r: 3, delay: 1.5 },
  { cx: "50%", cy: "10%", r: 2, delay: 0.5 },
  { cx: "90%", cy: "50%", r: 4, delay: 2.5 },
  { cx: "5%", cy: "60%", r: 3, delay: 3 },
];

export function HeroSection() {
  const { t, lang } = useLang();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A2342 0%, #1a3a6b 60%, #0d2d5e 100%)",
      }}
    >
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              left: p.cx,
              top: p.cy,
              width: p.r * 2,
              height: p.r * 2,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: p.delay,
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        ))}
        {/* Glow blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#2B4FFF]/20 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-[#D4A017]/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#2B4FFF]/10 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Trust badges */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-3 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm text-white">
              <span className="w-2 h-2 rounded-full bg-[#F0C040] animate-pulse" />
              {t("Nền tảng học AI đầu tiên tại Việt Nam", "Vietnam's First AI Learning Platform")}
            </div>
            <div className="inline-flex items-center gap-2 bg-[#D4A017]/20 border border-[#D4A017]/40 rounded-full px-4 py-1.5 text-sm text-white">
              <Trophy className="w-4 h-4 text-[#F0C040]" />
              <span>TOP 10 VINASA 2025</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4"
          >
            Ông Bụt AI
          </motion.h1>

          {/* Sub headline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-xl sm:text-2xl font-semibold text-[#F0C040] mb-4"
          >
            {t(
              "Học thông minh. Nghĩ sâu. Vươn xa.",
              "Learn Smart. Think Deep. Go Far."
            )}
          </motion.p>

          {/* Description */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base sm:text-lg text-blue-200 leading-relaxed mb-8 max-w-xl"
          >
            {t(
              "Nền tảng AI cá nhân hóa — học đúng cách, đúng lúc, đúng người. Giỏi Toán · Mạnh Tin · Tư duy khai phóng.",
              "AI-personalized education — the right method, at the right time, for the right learner. Math · Tech · Liberal Thinking."
            )}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#F0C040] text-[#0A2342] font-bold rounded-xl h-13 px-8 text-base transition-colors"
            >
              {t("Đăng ký tư vấn miễn phí", "Free Consultation")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tuyen-sinh"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 rounded-xl h-13 px-8 text-base transition-colors"
            >
              {t("Xem tuyển sinh 2025", "See 2025 Enrollment")}
            </Link>
          </motion.div>

          {/* Achievement Badges */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-2 mb-12"
          >
            {[
              t("🏆 TOP 10 VINASA 2025", "🏆 TOP 10 VINASA 2025"),
              t("👨‍🎓 1.500+ học sinh", "👨‍🎓 1,500+ Students"),
              t("🏅 10+ năm kinh nghiệm", "🏅 10+ Years Experience"),
            ].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-white font-medium"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-8 max-w-3xl"
        >
          {[
            { value: "1,500+", labelVi: "Học sinh", labelEn: "Students" },
            { value: "20+", labelVi: "Giáo viên", labelEn: "Teachers" },
            { value: "10+", labelVi: "Năm kinh nghiệm", labelEn: "Years Exp." },
            { value: "TOP 10", labelVi: "VINASA 2025", labelEn: "VINASA 2025" },
          ].map((stat) => (
            <div key={stat.labelVi} className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm text-blue-300 mt-1">
                {lang === "vi" ? stat.labelVi : stat.labelEn}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating accent element */}
      <motion.div
        className="absolute right-8 top-1/3 hidden lg:block"
        variants={floatVariants}
        animate="animate"
      >
        <div className="w-20 h-20 rounded-2xl bg-[#D4A017]/20 border border-[#D4A017]/30 flex items-center justify-center backdrop-blur-sm">
          <Trophy className="w-10 h-10 text-[#F0C040]" />
        </div>
      </motion.div>
    </section>
  );
}
