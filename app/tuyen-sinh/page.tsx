"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Users, ExternalLink, Phone, MessageCircle, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CLASSES = [
  {
    cohort: "2K20", year: 2020, grade: "Lớp 1", emoji: "🐁",
    day: "Thứ 5", time: "19:30", extraDay: null, extraTime: null,
    zalo: "https://zalo.me/g/7gfzvbjvc5aicjyiohpf",
    color: "from-blue-500 to-blue-600",
  },
  {
    cohort: "2K19", year: 2019, grade: "Lớp 2", emoji: "🐖",
    day: "Thứ 4", time: "19:30", extraDay: null, extraTime: null,
    zalo: "https://zalo.me/g/xlt0drbiv6evwtf4wheo",
    color: "from-purple-500 to-purple-600",
  },
  {
    cohort: "2K18", year: 2018, grade: "Lớp 3", emoji: "🐕",
    day: "Thứ 6", time: "19:30", extraDay: null, extraTime: null,
    zalo: "https://zalo.me/g/loh8stvd26rlo9ykecmn",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    cohort: "2K17", year: 2017, grade: "Lớp 4", emoji: "🐓",
    day: "Thứ 2", time: "19:30", extraDay: null, extraTime: null,
    zalo: "https://zalo.me/g/kqzyo3xs7qzjz1t7dy6b",
    color: "from-orange-500 to-orange-600",
  },
  {
    cohort: "2K16", year: 2016, grade: "Lớp 5", emoji: "🐒",
    day: "Thứ 3", time: "19:30", extraDay: "Thứ 7", extraTime: "9:00",
    zalo: "https://zalo.me/g/lsuhtokm5gsolehqby7z",
    color: "from-red-500 to-red-600",
  },
  {
    cohort: "2K15", year: 2015, grade: "Lớp 6", emoji: "🐐",
    day: "Thứ 7", time: "19:30", extraDay: null, extraTime: null,
    zalo: "https://zalo.me/g/fmfbkg6l4jbddjieiy2j",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    cohort: "2K14", year: 2014, grade: "Lớp 7", emoji: "🐎",
    day: "Chủ Nhật", time: "19:30", extraDay: null, extraTime: null,
    zalo: "https://zalo.me/g/dnwzbasqv734gynucrtk",
    color: "from-amber-500 to-amber-600",
  },
  {
    cohort: "2K13", year: 2013, grade: "Lớp 8", emoji: "🐍",
    day: "Thứ 5", time: "19:30", extraDay: "Chủ Nhật", extraTime: "14:30",
    zalo: "https://zalo.me/g/q2jrbhsv8ou0fmrdn1qf",
    color: "from-indigo-500 to-indigo-600",
  },
];

const BENEFITS = [
  "Video buổi học lưu trữ vĩnh viễn",
  "Bài giảng chi tiết sau mỗi buổi",
  "Bài tập về nhà có đáp án",
  "Lời giải chi tiết từng bước",
  "Học online qua Zoom — mọi lúc mọi nơi",
  "Giáo viên phản hồi nhanh trên nhóm Zalo",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number,number,number,number] },
  }),
};

export default function TuyenSinhPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FC]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A2342] via-[#1a3a6b] to-[#0066CC] text-white py-20 px-4">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #D4A017 0%, transparent 50%), radial-gradient(circle at 80% 20%, #60a5fa 0%, transparent 40%)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-[#D4A017] text-[#0A2342] text-sm font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
              🎓 Tuyển sinh năm học 2024 – 2025
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Học Toán Tư Duy Online
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-[#D4A017] mb-3">
              cùng Thầy Cường Doji
            </p>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Tư duy sắc bén · Giải toán thần tốc · Chinh phục mọi kỳ thi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc9mZcnZn4j7TOOpi7WgXP-oozVbwP4yjfe9lAQLO0p0RhK1g/viewform?usp=publish-editor"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4A017] text-[#0A2342] font-bold px-8 py-4 rounded-xl hover:bg-[#F0C040] transition-all shadow-lg text-lg"
              >
                <ExternalLink className="w-5 h-5" />
                Đăng ký học ngay
              </a>
              <a
                href="https://zalo.me/0904290583"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/25 transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                0904 290 583
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Poster ── */}
      <section className="max-w-2xl mx-auto px-4 -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/tuyen-sinh-poster.jpg"
            alt="Tuyển sinh Học Toán Tư Duy Online cùng Thầy Cường Doji"
            width={800}
            height={1100}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* ── Benefits ── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#0A2342] mb-3">Sau mỗi buổi học</h2>
          <p className="text-gray-600">Tất cả được số hóa trên website Ông Bụt AI</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BENEFITS.map((b, i) => (
            <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" animate="show"
              className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-gray-700 font-medium">{b}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Class Schedule ── */}
      <section className="bg-[#0A2342] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">🗓️ Lịch học các lớp</h2>
            <p className="text-blue-200">Chọn lớp phù hợp với năm sinh của con</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CLASSES.map((cls, i) => (
              <motion.div key={cls.cohort} custom={i} variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${cls.color} p-5 text-white`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-3xl font-extrabold">{cls.cohort}</span>
                    <span className="text-3xl">{cls.emoji}</span>
                  </div>
                  <p className="text-white/80 text-sm font-medium">{cls.grade} · Sinh năm {cls.year}</p>
                </div>

                {/* Schedule */}
                <div className="p-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{cls.day}</p>
                      {cls.extraDay && (
                        <p className="text-sm font-semibold text-gray-800">+ {cls.extraDay}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700">{cls.time} tối · hàng tuần</p>
                      {cls.extraTime && (
                        <p className="text-sm text-gray-700">{cls.extraTime} · {cls.extraDay}</p>
                      )}
                    </div>
                  </div>

                  {/* Zalo button */}
                  <a
                    href={cls.zalo}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full mt-2 bg-[#0068FF] text-white text-sm font-bold py-2.5 rounded-lg hover:bg-[#0052CC] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Vào nhóm Zalo {cls.cohort}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration CTA ── */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#D4A017] to-[#F0C040]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-extrabold text-[#0A2342] mb-3">
              Sẵn sàng đồng hành cùng Thầy Cường?
            </h2>
            <p className="text-[#0A2342]/80 mb-8 text-lg">
              Điền form đăng ký — Thầy sẽ liên hệ tư vấn trong vòng 24h
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc9mZcnZn4j7TOOpi7WgXP-oozVbwP4yjfe9lAQLO0p0RhK1g/viewform?usp=publish-editor"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A2342] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#1a3a6b] transition-all shadow-lg text-lg"
              >
                <ExternalLink className="w-5 h-5" />
                Điền form đăng ký học
              </a>
              <a
                href="https://zalo.me/0904290583"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0A2342] font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-lg text-lg"
              >
                <Phone className="w-5 h-5" />
                Zalo: 0904 290 583
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
