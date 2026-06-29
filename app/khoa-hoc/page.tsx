import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Khóa học",
  description:
    "Danh sách khóa học tại Ông Bụt AI Education — từ tiểu học đến THPT.",
};

const MOCK_COURSES = [
  {
    id: 1,
    grade: "Lớp 1–5",
    name: "Toán Tư Duy Tiểu Học",
    teacher: "Cường Doji",
    sessions: 24,
    price: "Liên hệ",
    badge: "HOT",
    badgeColor: "bg-red-500",
    subject: "Toán",
    icon: "🔢",
    desc: "Xây dựng nền tảng tư duy toán học vững chắc cho học sinh tiểu học qua các bài toán thực tế.",
  },
  {
    id: 2,
    grade: "Lớp 6–9",
    name: "Toán Nâng Cao THCS",
    teacher: "Hoàng Anh Tài",
    sessions: 32,
    price: "Liên hệ",
    badge: "NEW",
    badgeColor: "bg-blue-500",
    subject: "Toán",
    icon: "📐",
    desc: "Chương trình toán nâng cao, ôn luyện thi học sinh giỏi và thi vào lớp 10.",
  },
  {
    id: 3,
    grade: "Lớp 10–12",
    name: "Toán Luyện Thi THPT",
    teacher: "Nguyễn Minh Đức",
    sessions: 40,
    price: "Liên hệ",
    badge: "HOT",
    badgeColor: "bg-red-500",
    subject: "Toán",
    icon: "📊",
    desc: "Luyện thi THPT Quốc gia môn Toán với chiến lược và đề thi thử sát với đề thật.",
  },
  {
    id: 4,
    grade: "Lớp 6–9",
    name: "Ngữ Văn THCS",
    teacher: "Trần Thị Lan",
    sessions: 28,
    price: "Liên hệ",
    badge: "",
    badgeColor: "",
    subject: "Văn",
    icon: "✍️",
    desc: "Nâng cao kỹ năng đọc hiểu, viết văn nghị luận và cảm thụ văn học.",
  },
  {
    id: 5,
    grade: "Lớp 1–9",
    name: "Tiếng Anh Giao Tiếp",
    teacher: "Phạm Thu Hương",
    sessions: 36,
    price: "Liên hệ",
    badge: "NEW",
    badgeColor: "bg-blue-500",
    subject: "Anh",
    icon: "🌍",
    desc: "Tiếng Anh giao tiếp thực tế, phát âm chuẩn, từ vựng phong phú theo CEFR.",
  },
  {
    id: 6,
    grade: "Lớp 10–12",
    name: "Vật Lý Luyện Thi THPT",
    teacher: "Lê Văn Hùng",
    sessions: 38,
    price: "Liên hệ",
    badge: "",
    badgeColor: "",
    subject: "Lý",
    icon: "⚡",
    desc: "Chinh phục Vật lý THPT với phương pháp giải nhanh và luyện đề chuyên sâu.",
  },
];

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        title="Khóa học"
        description="Đa dạng chương trình từ tiểu học đến THPT, được thiết kế khoa học và cá nhân hóa."
      />
      <section className="py-12 lg:py-16 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_COURSES.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl overflow-hidden brand-shadow hover:brand-shadow-lg transition-all group"
              >
                {/* Header */}
                <div className="bg-gradient-to-br from-[#2B4FFF] to-[#1A3ACC] p-6 relative">
                  <div className="text-4xl mb-3">{course.icon}</div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-white/20 text-white border-0 mb-2"
                      >
                        {course.grade}
                      </Badge>
                      <h3 className="font-bold text-white text-base leading-tight">
                        {course.name}
                      </h3>
                    </div>
                    {course.badge && (
                      <span
                        className={`text-xs font-bold text-white px-2 py-0.5 rounded-full ${course.badgeColor} flex-shrink-0`}
                      >
                        {course.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                    {course.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 text-xs text-[#6B7280] mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#2B4FFF]" />
                      <span>{course.teacher}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#2B4FFF]" />
                      <span>{course.sessions} buổi</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-[#2B4FFF]" />
                      <span>{course.subject}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#D4A017] text-sm">
                      {course.price}
                    </span>
                    <Link
                      href="/lien-he#consult"
                      className="text-sm font-semibold text-[#2B4FFF] hover:text-[#2B4FFF] transition-colors"
                    >
                      Đăng ký →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
