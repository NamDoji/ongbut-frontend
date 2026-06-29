"use client";

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, User, Mail, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/common/EmptyState";
import { getTeachers } from "@/services/teachers";

interface TeacherDetailClientProps {
  username: string;
}

export function TeacherDetailClient({ username }: TeacherDetailClientProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["teachers", { size: 100 }],
    queryFn: () => getTeachers({ size: 100 }),
  });

  const teacher = data?.data?.find((t) => t.username === username);

  if (isLoading) {
    return (
      <div>
        <Skeleton className="h-6 w-32 mb-6" />
        <div className="bg-white rounded-2xl p-8 brand-shadow">
          <div className="flex flex-col sm:flex-row gap-8">
            <Skeleton className="w-40 h-40 rounded-2xl" />
            <div className="flex-1 space-y-3">
              <Skeleton className="h-7 w-48" />
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !teacher) {
    return (
      <EmptyState
        title="Không tìm thấy giáo viên"
        description="Giáo viên không tồn tại hoặc đã thay đổi thông tin."
      />
    );
  }

  return (
    <div>
      <Link
        href="/giao-vien"
        className="inline-flex items-center gap-1.5 text-[#2B4FFF] text-sm font-medium mb-6 hover:gap-2.5 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Quay lại danh sách
      </Link>

      <div className="bg-white rounded-2xl p-6 sm:p-8 brand-shadow">
        <div className="flex flex-col sm:flex-row gap-8 mb-6">
          {/* Avatar */}
          <div className="relative w-36 h-36 flex-shrink-0 mx-auto sm:mx-0">
            {teacher.picture ? (
              <Image
                src={teacher.picture}
                alt={teacher.fullName}
                fill
                className="rounded-2xl object-cover"
                sizes="144px"
              />
            ) : (
              <div className="w-36 h-36 rounded-2xl bg-[#EEF1FF] flex items-center justify-center">
                <User className="w-16 h-16 text-[#2B4FFF]" />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[#2B4FFF] mb-2">
              {teacher.fullName}
            </h1>

            <div className="flex flex-wrap gap-2 mb-4">
              {teacher.subject && (
                <Badge className="bg-[#2B4FFF] text-white border-0">
                  {teacher.subject}
                </Badge>
              )}
              {teacher.exp && (
                <Badge
                  variant="secondary"
                  className="bg-[#FFFBEB] text-[#D4A017] border-0"
                >
                  {teacher.exp}
                </Badge>
              )}
            </div>

            <div className="space-y-2">
              {teacher.email && (
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <Mail className="w-4 h-4 text-[#2B4FFF]" />
                  <span>{teacher.email}</span>
                </div>
              )}
              {teacher.subject && (
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <BookOpen className="w-4 h-4 text-[#2B4FFF]" />
                  <span>Dạy môn: {teacher.subject}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Intro */}
        {teacher.intro && (
          <div>
            <h2 className="text-base font-bold text-[#2B4FFF] mb-3">
              Giới thiệu
            </h2>
            <div
              className="prose prose-sm max-w-none text-[#6B7280] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: teacher.intro }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
