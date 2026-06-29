"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, BookOpen } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Skeleton } from "@/components/ui/skeleton";
import { getSubjects } from "@/services/subjects";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

export function FeaturedSubjects() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["subjects"],
    queryFn: getSubjects,
  });

  const subjects = data?.data?.slice(0, 8) ?? [];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Môn học"
          title="Đa dạng chương trình"
          description="Từ tiểu học đến THPT, chúng tôi có đầy đủ các môn học với lộ trình được thiết kế khoa học."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => (
                <Skeleton key={i} className="h-28 rounded-2xl" />
              ))
            : isError || subjects.length === 0
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-gray-50 h-28 animate-pulse"
                />
              ))
            : subjects.map((subject, i) => (
                <motion.div
                  key={subject.folderId}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  <Link
                    href="/khoa-hoc"
                    className="block rounded-2xl p-5 text-center hover:scale-105 transition-transform brand-shadow group"
                    style={{
                      backgroundColor:
                        subject.backgroundColor || "#EEF1FF",
                    }}
                  >
                    <div className="text-3xl mb-2">{subject.icon || "📚"}</div>
                    <h3 className="font-semibold text-sm text-[#2B4FFF] leading-tight">
                      {subject.folderName}
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-1">
                      {subject.countLesson} bài học
                    </p>
                  </Link>
                </motion.div>
              ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/khoa-hoc"
            className="inline-flex items-center gap-2 text-[#2B4FFF] font-semibold text-sm hover:gap-3 transition-all"
          >
            Xem tất cả khóa học
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
