"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { SkeletonTeacherCard } from "@/components/common/SkeletonCard";
import { TeacherCard } from "@/components/teacher/TeacherCard";
import { getTeachers } from "@/services/teachers";

export function TeacherPreview() {
  const { data, isLoading } = useQuery({
    queryKey: ["teachers", { size: 4 }],
    queryFn: () => getTeachers({ size: 4 }),
  });

  const teachers = data?.data?.slice(0, 4) ?? [];

  return (
    <section className="py-16 lg:py-24 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Đội ngũ giáo viên"
          title="Giáo viên tận tâm, chuyên nghiệp"
          description="Mỗi giáo viên đều được tuyển chọn kỹ lưỡng với nhiều năm kinh nghiệm giảng dạy thực tế."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <SkeletonTeacherCard key={i} />
              ))
            : teachers.map((teacher, i) => (
                <div
                  key={teacher.username}
                >
                  <TeacherCard teacher={teacher} />
                </div>
              ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/giao-vien"
            className="inline-flex items-center gap-2 text-[#2B4FFF] font-semibold text-sm hover:gap-3 transition-all"
          >
            Xem tất cả giáo viên
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
