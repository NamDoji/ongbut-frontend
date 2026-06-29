import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Danh sách lớp học",
  description:
    "Danh sách các lớp học đang tuyển sinh tại Ông Bụt AI Education.",
};

const MOCK_CLASSES = [
  {
    id: 1,
    name: "Toán Tư Duy K1 – Khóa 2025",
    course: "Toán Tư Duy Tiểu Học",
    schedule: "Thứ 2, 4, 6 – 18:00–20:00",
    startDate: "10/07/2025",
    teacher: "Cường Doji",
    slots: 15,
    available: 5,
    mode: "Online",
    badge: "Sắp khai giảng",
    badgeColor: "bg-green-500",
  },
  {
    id: 2,
    name: "Toán THCS – Lớp chiều Thứ 3",
    course: "Toán Nâng Cao THCS",
    schedule: "Thứ 3, 5 – 16:00–18:00",
    startDate: "15/07/2025",
    teacher: "Hoàng Anh Tài",
    slots: 20,
    available: 3,
    mode: "Hybrid",
    badge: "Còn ít chỗ",
    badgeColor: "bg-orange-500",
  },
  {
    id: 3,
    name: "Toán THPT – Buổi sáng Thứ 7",
    course: "Toán Luyện Thi THPT",
    schedule: "Thứ 7 – 08:00–12:00",
    startDate: "05/07/2025",
    teacher: "Nguyễn Minh Đức",
    slots: 18,
    available: 8,
    mode: "Online",
    badge: "Đang tuyển",
    badgeColor: "bg-blue-500",
  },
  {
    id: 4,
    name: "Tiếng Anh Giao Tiếp – Lớp tối",
    course: "Tiếng Anh Giao Tiếp",
    schedule: "Thứ 2, 4, 6 – 20:00–21:30",
    startDate: "12/07/2025",
    teacher: "Phạm Thu Hương",
    slots: 12,
    available: 7,
    mode: "Online",
    badge: "Đang tuyển",
    badgeColor: "bg-blue-500",
  },
  {
    id: 5,
    name: "Vật Lý THPT – Lớp Chủ nhật",
    course: "Vật Lý Luyện Thi THPT",
    schedule: "Chủ nhật – 08:00–12:00",
    startDate: "20/07/2025",
    teacher: "Lê Văn Hùng",
    slots: 15,
    available: 10,
    mode: "Online",
    badge: "Đang tuyển",
    badgeColor: "bg-blue-500",
  },
  {
    id: 6,
    name: "Ngữ Văn THCS – Cuối tuần",
    course: "Ngữ Văn THCS",
    schedule: "Thứ 7, CN – 14:00–16:00",
    startDate: "19/07/2025",
    teacher: "Trần Thị Lan",
    slots: 16,
    available: 0,
    mode: "Online",
    badge: "Hết chỗ",
    badgeColor: "bg-red-500",
  },
];

export default function ClassesPage() {
  return (
    <>
      <PageHeader
        title="Danh sách lớp học"
        description="Các lớp học đang tuyển sinh — đăng ký sớm để có chỗ!"
      />
      <section className="py-12 lg:py-16 bg-[#F8F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {MOCK_CLASSES.map((cls) => (
              <div
                key={cls.id}
                className="bg-white rounded-2xl p-6 brand-shadow hover:brand-shadow-lg transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-bold text-[#2B4FFF] text-base">
                        {cls.name}
                      </h3>
                      <span
                        className={`text-xs font-semibold text-white px-2 py-0.5 rounded-full ${cls.badgeColor}`}
                      >
                        {cls.badge}
                      </span>
                    </div>

                    <p className="text-sm text-[#2B4FFF] font-medium mb-3">
                      {cls.course}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[#6B7280]">
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#2B4FFF]" />
                        <span>{cls.teacher}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#2B4FFF]" />
                        <span>{cls.startDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#2B4FFF]" />
                        <span>{cls.schedule}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#2B4FFF]" />
                        <span>{cls.mode}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2">
                    <div className="text-right">
                      <p className="text-xs text-[#6B7280]">Còn trống</p>
                      <p
                        className={`font-bold text-lg ${
                          cls.available === 0
                            ? "text-red-500"
                            : cls.available <= 5
                            ? "text-orange-500"
                            : "text-green-600"
                        }`}
                      >
                        {cls.available}/{cls.slots}
                      </p>
                    </div>
                    <Link
                      href={
                        cls.available > 0 ? "/lien-he#consult" : "#"
                      }
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                        cls.available > 0
                          ? "bg-[#2B4FFF] text-white hover:bg-[#1A3ACC]"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {cls.available > 0 ? "Đăng ký" : "Hết chỗ"}
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
