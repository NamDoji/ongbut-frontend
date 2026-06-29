"use client";

import { motion } from "framer-motion";
import { Brain, Bot, Video, Trophy, Users, Globe } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { useLang } from "@/contexts/LanguageContext";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

const FEATURES = [
  {
    icon: Brain,
    titleVi: "🧠 Toán Tư Duy, không phải học vẹt",
    titleEn: "🧠 Critical Thinking, Not Rote Learning",
    descVi: "Phương pháp tư duy khai phóng, giúp học sinh hiểu bản chất vấn đề thay vì chỉ nhớ công thức.",
    descEn: "Our liberal-thinking approach helps students understand core concepts rather than memorizing formulas.",
    color: "#2B4FFF",
    bg: "#EEF1FF",
  },
  {
    icon: Bot,
    titleVi: "🤖 AI cá nhân hóa lộ trình học",
    titleEn: "🤖 AI-Personalized Learning Path",
    descVi: "Hệ thống AI phân tích điểm mạnh/yếu, tự động thiết kế lộ trình phù hợp cho từng học sinh.",
    descEn: "AI system analyzes each student's strengths and weaknesses to automatically design a tailored roadmap.",
    color: "#D4A017",
    bg: "#FFFBEB",
  },
  {
    icon: Video,
    titleVi: "📹 Video & bài giảng số hóa",
    titleEn: "📹 Digitized Video & Lecture Notes",
    descVi: "Thư viện bài giảng video chất lượng cao, học lại bất kỳ lúc nào, bất kỳ đâu.",
    descEn: "High-quality video lecture library — rewatch anytime, anywhere at your convenience.",
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    icon: Trophy,
    titleVi: "🏆 Thành tích thi đua quốc tế",
    titleEn: "🏆 International Competition Results",
    descVi: "Học sinh Ông Bụt đạt nhiều HCV Toán quốc tế: SIMOC, ITMC, AMC và các kỳ thi danh tiếng.",
    descEn: "Ông Bụt students win Gold Medals at SIMOC, ITMC, AMC, and other prestigious international competitions.",
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    icon: Users,
    titleVi: "👨‍👩‍👧 Đồng hành phụ huynh - học sinh",
    titleEn: "👨‍👩‍👧 Parent-Student Partnership",
    descVi: "Báo cáo tiến độ định kỳ, nhóm Zalo hỗ trợ 24/7 cho phụ huynh và học sinh.",
    descEn: "Regular progress reports and 24/7 Zalo groups for parents and students.",
    color: "#DC2626",
    bg: "#FEF2F2",
  },
  {
    icon: Globe,
    titleVi: "🌐 Học online, không giới hạn địa lý",
    titleEn: "🌐 Online Learning, No Boundaries",
    descVi: "Nền tảng trực tuyến linh hoạt, học trên điện thoại hoặc máy tính từ bất kỳ tỉnh thành nào.",
    descEn: "Flexible online platform — learn from any device, from any province in Vietnam.",
    color: "#0891B2",
    bg: "#ECFEFF",
  },
];

export function WhyChooseUs() {
  const { lang, t } = useLang();

  return (
    <section className="py-16 lg:py-24 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label={t("Tại sao chọn Ông Bụt", "Why Choose Ông Bụt")}
          title={t("Học thật sự hiệu quả", "Learning That Actually Works")}
          description={t(
            "Chúng tôi kết hợp trí tuệ nhân tạo với phương pháp sư phạm tiên tiến để mang lại kết quả học tập tốt nhất.",
            "We combine artificial intelligence with advanced pedagogy to deliver the best learning outcomes."
          )}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.titleVi}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 brand-shadow hover:brand-shadow-lg transition-shadow group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: feat.bg }}
              >
                <feat.icon className="w-6 h-6" style={{ color: feat.color }} />
              </div>
              <h3 className="font-bold text-[#0A2342] text-base mb-2">
                {lang === "vi" ? feat.titleVi : feat.titleEn}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {lang === "vi" ? feat.descVi : feat.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
