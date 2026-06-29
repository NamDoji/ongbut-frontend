"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";

const PHOTOS = [
  {
    src: "/launch-group.jpg",
    alt: "Họp báo ra mắt Ông Bụt — Thầy Cường Doji cùng học sinh",
    caption: { vi: "Thầy Cường Doji cùng các học sinh tại lễ ra mắt", en: "Thầy Cường Doji with students at the launch event" },
    span: "col-span-2 md:col-span-1",
  },
  {
    src: "/launch-event-1.jpg",
    alt: "Họp báo ra mắt Ông Bụt 2022 — Thầy Cường và khách mời",
    caption: { vi: "Thầy Cường và khách mời tại Novotel Hà Nội", en: "Thầy Cường and guests at Novotel Hanoi" },
    span: "col-span-2 md:col-span-1",
  },
  {
    src: "/launch-event-2.jpg",
    alt: "Họp báo Ông Bụt — đội ngũ ITSOL",
    caption: { vi: "Đội ngũ ITSOL tại lễ ra mắt sản phẩm", en: "ITSOL team at the product launch" },
    span: "col-span-2 md:col-span-1",
  },
  {
    src: "/launch-backdrop-design.jpg",
    alt: "Backdrop sự kiện Ông Bụt 21/12/2022",
    caption: { vi: "Backdrop lễ ra mắt — Hà Nội 21/12/2022", en: "Event backdrop — Hanoi 21/12/2022" },
    span: "col-span-2 md:col-span-1",
  },
  {
    src: "/launch-banner-4.jpg",
    alt: "Ông Bụt — Education 4.0 ra mắt tại Novotel Hà Nội",
    caption: { vi: "Giáo dục 4.0 — Novotel Hà Nội 21/12/2022", en: "Education 4.0 — Novotel Hanoi 21/12/2022" },
    span: "col-span-2 md:col-span-2",
  },
  {
    src: "/launch-backdrop-real.jpg",
    alt: "Backdrop thực tế sự kiện ra mắt Ông Bụt",
    caption: { vi: "Không gian sự kiện ra mắt sản phẩm Ông Bụt", en: "Ông Bụt product launch event space" },
    span: "col-span-2 md:col-span-2",
  },
];

export function LaunchGallery() {
  const { t } = useLang();

  return (
    <section className="py-20 px-4 bg-[#0A2342]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#D4A017]/20 text-[#D4A017] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            {t("Sự kiện", "Event")}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {t("Lễ Ra Mắt Ông Bụt AI", "Ông Bụt AI Launch Event")}
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            {t(
              "Họp báo ra mắt sản phẩm công nghệ giáo dục Ông Bụt tại Novotel Hà Nội, ngày 21/12/2022",
              "Official launch press conference for Ông Bụt EdTech platform at Novotel Hanoi, December 21, 2022"
            )}
          </p>
        </motion.div>

        {/* Grid gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              className={`${photo.span} relative group overflow-hidden rounded-2xl`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium leading-tight">
                    {t(photo.caption.vi, photo.caption.en)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Milestone badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {[
            { vi: "🚀 Ra mắt 21/12/2022", en: "🚀 Launched 21/12/2022" },
            { vi: "📍 Novotel Hà Nội", en: "📍 Novotel Hanoi" },
            { vi: "🎓 Giáo dục 4.0", en: "🎓 Education 4.0" },
            { vi: "📱 App Store & Google Play", en: "📱 App Store & Google Play" },
          ].map((badge, i) => (
            <span key={i} className="bg-white/10 border border-white/20 text-white/90 text-sm font-semibold px-5 py-2.5 rounded-full">
              {t(badge.vi, badge.en)}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
