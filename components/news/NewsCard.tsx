import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { BlogItem } from "@/types/news";

interface NewsCardProps {
  article: BlogItem;
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export function NewsCard({ article }: NewsCardProps) {
  const category = article.categories?.[0]?.category;

  return (
    <Link href={`/tin-tuc/${article.blogId}`}>
      <article className="bg-white rounded-2xl overflow-hidden brand-shadow hover:brand-shadow-lg transition-all group cursor-pointer h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          {article.urlImageRepresent ? (
            <Image
              src={article.urlImageRepresent}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#EEF1FF] to-[#DBEAFE] flex items-center justify-center">
              <span className="text-4xl">📰</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {category && (
            <Badge
              variant="secondary"
              className="w-fit text-xs bg-blue-50 text-[#2B4FFF] border-0 mb-3"
            >
              {category}
            </Badge>
          )}

          <h3 className="font-bold text-[#2B4FFF] text-base leading-snug mb-2 group-hover:text-[#2B4FFF] transition-colors line-clamp-2 flex-1">
            {article.title}
          </h3>

          {article.shortContent && (
            <p className="text-sm text-[#6B7280] line-clamp-2 leading-relaxed mb-3">
              {article.shortContent}
            </p>
          )}

          <div className="flex items-center gap-1.5 text-xs text-[#6B7280] mt-auto">
            <Calendar className="w-3.5 h-3.5" />
            <span>{formatDate(article.createDate)}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
