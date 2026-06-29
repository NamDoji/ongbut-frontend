"use client";

import Image from "next/image";
import { Trophy, Award } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";

const AWARDS = [
  {
    title: "TOP 10 Doanh nghiệp Công nghệ Số Việt Nam 2025",
    org: "VINASA — Hiệp hội Phần mềm và Dịch vụ CNTT Việt Nam",
    category: "Hạng mục: Giáo Dục & Đào Tạo",
    date: "09/10/2025 · Hà Nội",
    year: "2025",
    image: "/awards/vinasa-ceremony-1.jpg",
    thumbnail: "/awards/vinasa-top10-2025-award.jpg",
  },
];

export function AwardsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#EEF1FF] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Giải thưởng & Công nhận"
          title="Được vinh danh tầm quốc gia"
          description="Những ghi nhận từ tổ chức uy tín khẳng định chất lượng và uy tín của Ông Bụt AI."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {AWARDS.map((award, i) => (
            <div
              key={award.title}
              className="bg-white rounded-2xl overflow-hidden brand-shadow-lg border border-[#EEF1FF]"
            >
              {/* Main ceremony image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B4FFF]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 bg-[#D4A017] text-white text-xs font-bold px-3 py-1 rounded-full">
                    <Trophy className="w-3.5 h-3.5" />
                    TOP 10 · {award.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex gap-4">
                {/* Thumbnail - CEO with award */}
                <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 border-[#EEF1FF]">
                  <Image
                    src={award.thumbnail}
                    alt="CEO Cuong Doji nhận giải"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-[#2B4FFF] text-sm leading-snug mb-1">
                    {award.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] mb-1">{award.org}</p>
                  <p className="text-xs font-medium text-[#D4A017] mb-1">
                    {award.category}
                  </p>
                  <p className="text-xs text-[#6B7280]">{award.date}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Side: ceremony photo 2 + text */}
          <div
            className="space-y-5"
          >
            {/* Second ceremony image */}
            <div className="relative h-48 rounded-2xl overflow-hidden brand-shadow">
              <Image
                src="/awards/vinasa-ceremony-2.jpg"
                alt="Lễ vinh danh VINASA 2025"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-4 text-white text-xs font-medium">
                Lễ vinh danh VINASA 2025 · Hà Nội
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#2B4FFF] rounded-2xl p-5 text-white text-center">
                <Trophy className="w-8 h-8 text-[#F0C040] mx-auto mb-2" />
                <p className="font-bold text-2xl leading-none">TOP 10</p>
                <p className="text-xs text-blue-200 mt-1">VINASA 2025</p>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center brand-shadow border border-[#EEF1FF]">
                <Award className="w-8 h-8 text-[#D4A017] mx-auto mb-2" />
                <p className="font-bold text-sm text-[#2B4FFF] leading-tight">
                  Giáo Dục
                </p>
                <p className="text-xs text-[#6B7280] mt-1">& Đào Tạo</p>
              </div>
            </div>

            <p className="text-sm text-[#6B7280] leading-relaxed">
              Giải thưởng{" "}
              <strong className="text-[#2B4FFF]">
                TOP 10 Doanh nghiệp Công nghệ Số Việt Nam
              </strong>{" "}
              do VINASA trao tặng là sự ghi nhận xứng đáng cho nỗ lực không
              ngừng đổi mới, ứng dụng AI vào giáo dục và mang lại giá trị thực
              cho hàng nghìn học sinh Việt Nam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
