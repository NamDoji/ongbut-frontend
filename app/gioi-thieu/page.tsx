import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { AwardsSection } from "@/components/home/AwardsSection";
import { GraduationCap, Target, Heart, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Tìm hiểu về Ông Bụt AI Education — nền tảng giáo dục AI cá nhân hóa hàng đầu Việt Nam.",
};

const VALUES = [
  {
    icon: Target,
    title: "Sứ mệnh",
    content:
      "Mang lại cơ hội học tập chất lượng cao, cá nhân hóa cho mọi học sinh Việt Nam, bất kể điều kiện địa lý hay hoàn cảnh.",
  },
  {
    icon: Heart,
    title: "Giá trị cốt lõi",
    content:
      "Tận tâm — Chuyên nghiệp — Đổi mới — Kết quả. Chúng tôi đặt thành công của học sinh làm trung tâm của mọi hoạt động.",
  },
  {
    icon: Award,
    title: "Tầm nhìn",
    content:
      "Trở thành nền tảng giáo dục AI hàng đầu Đông Nam Á, giúp hàng triệu học sinh tiếp cận phương pháp học thông minh.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Về Ông Bụt AI"
        description="Câu chuyện, sứ mệnh và những giá trị chúng tôi mang lại."
      />

      <section className="py-12 lg:py-20 bg-[#F8F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story */}
          <div className="bg-white rounded-2xl p-8 brand-shadow mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#2B4FFF] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#2B4FFF]">
                Câu chuyện của chúng tôi
              </h2>
            </div>
            <div className="space-y-4 text-[#6B7280] text-base leading-relaxed">
              <p>
                <strong className="text-[#2B4FFF]">Ông Bụt AI Education</strong>{" "}
                được thành lập với một niềm tin đơn giản: mọi học sinh đều xứng
                đáng được tiếp cận nền giáo dục chất lượng cao, phù hợp với
                năng lực và tốc độ học của chính mình.
              </p>
              <p>
                Với hơn 10 năm kinh nghiệm trong lĩnh vực giáo dục, chúng tôi
                đã xây dựng một nền tảng kết hợp trí tuệ nhân tạo với phương
                pháp sư phạm tiên tiến, tạo ra trải nghiệm học tập cá nhân hóa
                chưa từng có.
              </p>
              <p>
                Đến nay, chúng tôi tự hào đã đồng hành cùng hơn{" "}
                <strong className="text-[#2B4FFF]">1.500 học sinh</strong> trên
                hành trình học tập, với đội ngũ hơn{" "}
                <strong className="text-[#2B4FFF]">20 giáo viên</strong> tận
                tâm và chuyên nghiệp.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl p-6 brand-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEF1FF] flex items-center justify-center mb-4">
                  <val.icon className="w-5 h-5 text-[#2B4FFF]" />
                </div>
                <h3 className="font-bold text-[#2B4FFF] text-base mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {val.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AwardsSection />
    </>
  );
}
