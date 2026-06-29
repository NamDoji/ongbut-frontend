"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { SkeletonCard } from "@/components/common/SkeletonCard";
import { NewsCard } from "@/components/news/NewsCard";
import { getNewsList } from "@/services/news";

export function NewsPreview() {
  const { data, isLoading } = useQuery({
    queryKey: ["news", { page: 0, size: 3 }],
    queryFn: () => getNewsList({ page: 0, size: 3 }),
  });

  const news = data?.data?.slice(0, 3) ?? [];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Tin tức"
          title="Cập nhật mới nhất"
          description="Theo dõi các tin tức, thông báo và bài viết hữu ích từ đội ngũ Ông Bụt AI."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            : news.map((article, i) => (
                <div
                  key={article.blogId}
                >
                  <NewsCard article={article} />
                </div>
              ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/tin-tuc"
            className="inline-flex items-center gap-2 text-[#2B4FFF] font-semibold text-sm hover:gap-3 transition-all"
          >
            Xem tất cả tin tức
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
