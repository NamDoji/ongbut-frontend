"use client";

import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { TeacherCard } from "./TeacherCard";
import { SkeletonTeacherCard } from "@/components/common/SkeletonCard";
import { EmptyState } from "@/components/common/EmptyState";
import { getTeachers } from "@/services/teachers";

export function TeacherGrid() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["teachers", { size: 20 }],
    queryFn: () => getTeachers({ size: 20 }),
  });

  const teachers = data?.data ?? [];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonTeacherCard key={i} />
        ))}
      </div>
    );
  }

  if (isError || teachers.length === 0) {
    return (
      <EmptyState
        title="Chưa có thông tin giáo viên"
        description="Vui lòng quay lại sau."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {teachers.map((teacher, i) => (
        <motion.div
          key={teacher.username}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
        >
          <TeacherCard teacher={teacher} />
        </motion.div>
      ))}
    </div>
  );
}
