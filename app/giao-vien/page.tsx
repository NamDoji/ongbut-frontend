import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { TeacherGrid } from "@/components/teacher/TeacherGrid";

export const metadata: Metadata = {
  title: "Giáo viên",
  description:
    "Đội ngũ giáo viên tận tâm, chuyên nghiệp của Ông Bụt AI Education.",
};

export default function TeachersPage() {
  return (
    <>
      <PageHeader
        title="Đội ngũ giáo viên"
        description="Mỗi giáo viên đều được tuyển chọn kỹ lưỡng với nhiều năm kinh nghiệm giảng dạy thực tế."
      />
      <section className="py-12 lg:py-16 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TeacherGrid />
        </div>
      </section>
    </>
  );
}
