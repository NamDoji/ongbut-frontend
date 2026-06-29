"use client";

import { motion } from "framer-motion";
import { Brain, Target, Users, Award, Zap, BookOpen } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";

const FEATURES = [
  {
    icon: Brain,
    title: "AI cá nhân hóa",
    description:
      "Hệ thống AI phân tích điểm mạnh/yếu, tự động tạo lộ trình học phù hợp cho từng học sinh.",
    color: "#2B4FFF",
    bg: "#EEF1FF",
  },
  {
    icon: Target,
    title: "Học đúng trọng tâm",
    description:
      "Tập trung vào những phần quan trọng nhất, không lãng phí thời gian vào nội dung không cần thiết.",
    color: "#D4A017",
    bg: "#FFFBEB",
  },
  {
    icon: Users,
    title: "Giáo viên tận tâm",
    description:
      "Đội ngũ giáo viên giỏi, giàu kinh nghiệm, luôn sẵn sàng hỗ trợ học sinh 24/7.",
    color: "#2B4FFF",
    bg: "#EEF1FF",
  },
  {
    icon: Award,
    title: "Kết quả được chứng minh",
    description:
      "Hàng nghìn học sinh đạt thành tích xuất sắc, vào được trường top sau khi học tại Ông Bụt.",
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    icon: Zap,
    title: "Học mọi lúc, mọi nơi",
    description:
      "Nền tảng trực tuyến linh hoạt, học trên điện thoại, máy tính, không bị ràng buộc thời gian.",
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    icon: BookOpen,
    title: "Tài liệu phong phú",
    description:
      "Thư viện bài giảng, đề thi, bài tập đa dạng được cập nhật liên tục theo chương trình mới nhất.",
    color: "#DC2626",
    bg: "#FEF2F2",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Tại sao chọn Ông Bụt"
          title="Học thật sự hiệu quả"
          description="Chúng tôi kết hợp trí tuệ nhân tạo với phương pháp sư phạm tiên tiến để mang lại kết quả học tập tốt nhất."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
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
                <feat.icon
                  className="w-6 h-6"
                  style={{ color: feat.color }}
                />
              </div>
              <h3 className="font-bold text-[#2B4FFF] text-base mb-2">
                {feat.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
