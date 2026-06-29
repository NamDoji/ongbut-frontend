"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, Target, Heart, Lightbulb, GraduationCap } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const ADVISORS = [
  {
    nameVi: "Nguyễn Lê Thị Bích Dung",
    nameEn: "Nguyen Le Thi Bich Dung",
    roleVi: "Phó Chủ tịch HĐQT Newton Schools",
    roleEn: "Deputy Chairwoman, Newton Schools",
    emoji: "👩‍💼",
  },
  {
    nameVi: "TS. Lê Thống Nhất",
    nameEn: "Dr. Le Thong Nhat",
    roleVi: "Tiến sĩ · Chuyên gia giáo dục hàng đầu",
    roleEn: "PhD · Leading Education Expert",
    emoji: "📚",
  },
  {
    nameVi: "ThS. Đỗ Chí Cường",
    nameEn: "M.Sc. Do Chi Cuong",
    roleVi: "Chủ tịch ITSOL Group",
    roleEn: "Chairman, ITSOL Group",
    emoji: "💼",
  },
  {
    nameVi: "TS. Trần Thế Hùng",
    nameEn: "Dr. Tran The Hung",
    roleVi: "TS Đại học Paris Cité · Chuyên gia AI",
    roleEn: "PhD Paris Cité University · AI Expert",
    emoji: "🤖",
  },
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

const VALUES_VI = [
  {
    icon: Target,
    title: "Sứ mệnh",
    content:
      "Khai phóng tiềm năng mỗi học sinh thông qua giáo dục thông minh, cá nhân hóa bằng AI.",
  },
  {
    icon: Heart,
    title: "Giá trị cốt lõi",
    content:
      "Tận tâm — Chuyên nghiệp — Đổi mới — Kết quả. Thành công của học sinh là trung tâm mọi hoạt động.",
  },
  {
    icon: Lightbulb,
    title: "Tầm nhìn",
    content:
      "Trở thành nền tảng giáo dục AI hàng đầu Đông Nam Á, giúp hàng triệu học sinh tiếp cận học thông minh.",
  },
];

const VALUES_EN = [
  {
    icon: Target,
    title: "Our Mission",
    content:
      "Unlocking every student's potential through AI-powered, personalized education.",
  },
  {
    icon: Heart,
    title: "Core Values",
    content:
      "Dedication — Professionalism — Innovation — Results. Student success is at the center of everything.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    content:
      "To become Southeast Asia's leading AI education platform, helping millions of students access smart learning.",
  },
];

export default function AboutPage() {
  const { lang, t } = useLang();
  const bio = lang === "vi" ? BIO_VI : BIO_EN;
  const values = lang === "vi" ? VALUES_VI : VALUES_EN;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A2342 0%, #1a3a6b 60%, #0d2d5e 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#2B4FFF]/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-[#D4A017]/10 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#F0C040] bg-white/10 rounded-full mb-4 uppercase tracking-wide border border-white/20">
              {t("Về chúng tôi", "About Us")}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t("Ông Bụt AI Education", "Ông Bụt AI Education")}
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed max-w-2xl mx-auto">
              {t(
                "Câu chuyện, sứ mệnh và những giá trị chúng tôi mang lại cho thế hệ học sinh Việt Nam.",
                "Our story, mission, and the values we bring to the next generation of Vietnamese learners."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-gradient-to-r from-[#EEF1FF] to-[#FFFBEB] rounded-2xl p-8 border border-[#2B4FFF]/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#2B4FFF] flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#2B4FFF]">
                {t("Sứ mệnh của chúng tôi", "Our Mission")}
              </h2>
            </div>
            <p className="text-lg text-[#374151] leading-relaxed">
              {t(
                "Khai phóng tiềm năng mỗi học sinh thông qua giáo dục thông minh, cá nhân hóa bằng AI.",
                "Unlocking every student's potential through AI-powered, personalized education."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teacher Story Section */}
      <section
        className="py-12 lg:py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #fefdf8 0%, #fffbeb 50%, #fef9f0 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#D4A017] bg-[#D4A017]/10 rounded-full mb-3 uppercase tracking-wide border border-[#D4A017]/30">
              {t("Nhà sáng lập", "Founder")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2342] mb-3">
              {t(
                "Người thầy đằng sau Ông Bụt AI",
                "The Educator Behind Ông Bụt AI"
              )}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto lg:max-w-full">
                <Image
                  src="/tuyen-sinh-poster.jpg"
                  alt="Thầy Cường Doji"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-[#0A2342]/90 backdrop-blur-sm rounded-xl p-4 border border-[#D4A017]/30">
                    <p className="text-[#F0C040] text-sm font-bold mb-1">
                      {t("Thầy Cường Doji", "Master Cuong Doji")}
                    </p>
                    <p className="text-white/80 text-xs">
                      {t(
                        "Nhà sáng lập Ông Bụt AI · Chủ tịch ITSOL Group",
                        "Founder, Ông Bụt AI · Chairman, ITSOL Group"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-6"
            >
              <blockquote className="border-l-4 border-[#D4A017] pl-5 py-2">
                <p className="text-lg font-semibold text-[#0A2342] italic leading-relaxed">
                  &ldquo;{t(
                    "Toán học là ngôn ngữ của tư duy — là chìa khóa cho mọi thành công",
                    "Mathematics is the language of thought — the key to every achievement"
                  )}&rdquo;
                </p>
                <footer className="mt-2 text-sm text-[#6B7280]">
                  — {t(
                    "Thầy Cường Doji, Nhà sáng lập Ông Bụt AI",
                    "Master Cuong Doji, Founder of Ông Bụt AI"
                  )}
                </footer>
              </blockquote>

              <div className="space-y-3">
                {bio.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                  >
                    <p className="text-sm text-[#374151] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { value: "20+", labelVi: "Năm giảng dạy", labelEn: "Years Teaching" },
                  { value: "1,500+", labelVi: "Học sinh", labelEn: "Students" },
                  { value: "8", labelVi: "Lớp Online 2025", labelEn: "Classes 2025" },
                  { value: "TOP 10", labelVi: "VINASA 2025", labelEn: "VINASA 2025" },
                ].map((a) => (
                  <div key={a.labelVi} className="bg-[#0A2342] text-white rounded-xl p-3 text-center">
                    <div className="text-xl font-bold text-[#F0C040]">{a.value}</div>
                    <div className="text-xs text-blue-200 mt-1 leading-tight">
                      {lang === "vi" ? a.labelVi : a.labelEn}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VINASA Award Section */}
      <section
        className="py-12 lg:py-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A2342 0%, #1a3a6b 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#D4A017]/10 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-3 bg-[#D4A017]/20 border border-[#D4A017]/40 rounded-full px-6 py-2 mb-6">
              <Trophy className="w-5 h-5 text-[#F0C040]" />
              <span className="text-[#F0C040] font-bold text-sm">VINASA 2025</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t(
                "TOP 10 Doanh nghiệp Công nghệ Số Việt Nam 2025",
                "TOP 10 Vietnam Digital Technology Enterprises 2025"
              )}
            </h2>
            <p className="text-blue-200 text-base max-w-2xl mx-auto leading-relaxed">
              {t(
                "Ông Bụt AI được VINASA vinh danh trong hạng mục Giáo dục & Đào tạo, khẳng định vị thế tiên phong trong việc ứng dụng AI vào giáo dục Việt Nam.",
                "Ông Bụt AI was honored by VINASA in the Education & Training category, affirming our pioneering role in applying AI to Vietnamese education."
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              "/awards/vinasa-top10-2025-award.jpg",
              "/awards/vinasa-ceremony-1.jpg",
              "/awards/vinasa-ceremony-2.jpg",
            ].map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10"
              >
                <Image
                  src={src}
                  alt={`VINASA Award ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-12 lg:py-16 bg-[#F8F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#2B4FFF] bg-[#EEF1FF] rounded-full mb-3 uppercase tracking-wide">
              {t("Hội đồng cố vấn", "Advisory Board")}
            </span>
            <h2 className="text-3xl font-bold text-[#0A2342]">
              {t("Đội ngũ cố vấn", "Our Advisors")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVISORS.map((advisor, i) => (
              <motion.div
                key={advisor.nameVi}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
              >
                <div className="text-4xl mb-3">{advisor.emoji}</div>
                <h3 className="font-bold text-[#0A2342] text-sm mb-1">
                  {lang === "vi" ? advisor.nameVi : advisor.nameEn}
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {lang === "vi" ? advisor.roleVi : advisor.roleEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-[#0A2342]">
              {t("Giá trị cốt lõi", "Core Values")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="bg-[#F8F9FC] rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEF1FF] flex items-center justify-center mb-4">
                  <val.icon className="w-5 h-5 text-[#2B4FFF]" />
                </div>
                <h3 className="font-bold text-[#2B4FFF] text-base mb-2">{val.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{val.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 lg:py-16"
        style={{ background: "linear-gradient(135deg, #0A2342 0%, #1a3a6b 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <GraduationCap className="w-12 h-12 text-[#F0C040] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {t(
              "Sẵn sàng bắt đầu hành trình học tập?",
              "Ready to Start Your Learning Journey?"
            )}
          </h2>
          <p className="text-blue-200 mb-8">
            {t(
              "Đăng ký tư vấn miễn phí ngay hôm nay và khám phá phương pháp học phù hợp nhất.",
              "Register for a free consultation today and discover the best learning method for you."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center bg-[#D4A017] hover:bg-[#F0C040] text-[#0A2342] font-bold rounded-xl h-12 px-8 text-base transition-colors"
            >
              {t("Đăng ký tư vấn miễn phí", "Free Consultation")}
            </Link>
            <Link
              href="/tuyen-sinh"
              className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 rounded-xl h-12 px-8 text-base transition-colors"
            >
              {t("Xem tuyển sinh 2025", "See 2025 Enrollment")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
