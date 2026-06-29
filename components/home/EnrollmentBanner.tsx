"use client";

import { Calendar, Clock, ExternalLink, MessageCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

const HIGHLIGHT_CLASSES = [
  { cohort: "2K20", emoji: "🐁", day: "Thứ 5", time: "19:30", color: "bg-blue-500" },
  { cohort: "2K19", emoji: "🐖", day: "Thứ 4", time: "19:30", color: "bg-purple-500" },
  { cohort: "2K18", emoji: "🐕", day: "Thứ 6", time: "19:30", color: "bg-emerald-500" },
  { cohort: "2K17", emoji: "🐓", day: "Thứ 2", time: "19:30", color: "bg-orange-500" },
];

export function EnrollmentBanner() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#0A2342] via-[#1a3a6b] to-[#0A2342]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
          <div>
            <span className="inline-block bg-[#D4A017] text-[#0A2342] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
              🎓 Tuyển sinh 2024 – 2025
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Học Toán Tư Duy Online
            </h2>
            <p className="text-[#D4A017] font-semibold text-lg">cùng Thầy Cường Doji</p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc9mZcnZn4j7TOOpi7WgXP-oozVbwP4yjfe9lAQLO0p0RhK1g/viewform?usp=publish-editor"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4A017] text-[#0A2342] font-bold px-6 py-3 rounded-xl hover:bg-[#F0C040] transition-all text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Đăng ký học
            </a>
            <Link href="/tuyen-sinh"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/20 transition-all text-sm">
              Xem tất cả lớp
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Class cards preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {HIGHLIGHT_CLASSES.map((cls, i) => (
            <div key={cls.cohort}
              className="bg-white/10 border border-white/15 rounded-2xl p-5 text-white hover:bg-white/15 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-extrabold">{cls.cohort}</span>
                <span className="text-2xl">{cls.emoji}</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-blue-200 text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cls.day}</span>
                </div>
                <div className="flex items-center gap-1.5 text-blue-200 text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{cls.time} tối · hàng tuần</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 rounded-2xl px-6 py-4 border border-white/10">
          <p className="text-blue-200 text-sm text-center sm:text-left">
            📹 Video · 📄 Bài giảng · 📝 Bài tập · ✅ Đáp án — tất cả số hóa sau mỗi buổi học
          </p>
          <a href="https://zalo.me/0904290583" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#D4A017] font-bold text-sm hover:text-[#F0C040] transition-colors whitespace-nowrap">
            <MessageCircle className="w-4 h-4" />
            Zalo: 0904 290 583
          </a>
        </div>
      </div>
    </section>
  );
}
