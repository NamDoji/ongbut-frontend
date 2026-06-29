"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Trophy } from "lucide-react";

const STATS = [
  { value: "1,500+", label: "Học sinh" },
  { value: "20+", label: "Giáo viên" },
  { value: "10+", label: "Năm kinh nghiệm" },
  { value: "TOP 10", label: "VINASA 2025" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center gradient-primary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
              Nền tảng học AI đầu tiên tại Việt Nam
            </div>
            <div className="inline-flex items-center gap-2 bg-[#D4A017]/20 border border-[#D4A017]/40 rounded-full px-4 py-1.5 text-sm text-white">
              <Trophy className="w-4 h-4 text-[#F0C040]" />
              <span>TOP 10 Doanh nghiệp Công nghệ Số VN 2025 · VINASA</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
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
            Học thông minh. Nghĩ sâu. Vươn xa.
          </motion.p>

          {/* Description */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base sm:text-lg text-blue-200 leading-relaxed mb-8 max-w-xl"
          >
            Nền tảng giáo dục AI cá nhân hóa — học đúng cách, đúng lúc, đúng
            người.
          </motion.p>

          {/* CTA */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="#consult"
              className="inline-flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#F0C040] text-[#2B4FFF] font-bold rounded-xl h-12 px-8 text-base transition-colors"
            >
              Đăng ký tư vấn
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/khoa-hoc"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 rounded-xl h-12 px-8 text-base transition-colors"
            >
              <Play className="w-4 h-4" />
              Khám phá khóa học
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-blue-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
