"use client";

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Calendar, ArrowLeft, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/common/EmptyState";
import { getNewsDetail } from "@/services/news";

interface NewsDetailProps {
  blogId: string;
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("vi-VN", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export function NewsDetail({ blogId }: NewsDetailProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["news-detail", blogId],
    queryFn: () => getNewsDetail(blogId),
    enabled: !!blogId,
  });

  const article = data?.data;

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto py-8">
        <Skeleton className="h-8 w-32 mb-6" />
        <Skeleton className="h-72 w-full rounded-2xl mb-6" />
        <Skeleton className="h-5 w-20 mb-3" />
        <Skeleton className="h-8 w-full mb-2" />
        <Skeleton className="h-8 w-3/4 mb-6" />
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-full mb-2" />
        ))}
      </div>
    );
  }

  if (isError || !article) {
    return (
      <EmptyState
        title="Không tìm thấy bài viết"
        description="Bài viết không tồn tại hoặc đã bị xóa."
      />
    );
  }

  const category = article.categories?.[0]?.category;

  return (
    <article className="max-w-3xl mx-auto py-8">
      <Link
        href="/tin-tuc"
        className="inline-flex items-center gap-1.5 text-[#2B4FFF] text-sm font-medium mb-6 hover:gap-2.5 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Quay lại tin tức
      </Link>

      {/* Cover image */}
      {article.urlImageRepresent && (
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={article.urlImageRepresent}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      )}

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {category && (
          <Badge
            variant="secondary"
            className="text-xs bg-blue-50 text-[#2B4FFF] border-0"
          >
            {category}
          </Badge>
        )}
        <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
          <Calendar className="w-3.5 h-3.5" />
          <span>{formatDate(article.createDate)}</span>
        </div>
        {article.createUser && (
          <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
            <User className="w-3.5 h-3.5" />
            <span>{article.createUser}</span>
          </div>
        )}
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-[#2B4FFF] leading-tight mb-4">
        {article.title}
      </h1>

      {/* Short content */}
      {article.shortContent && (
        <p className="text-base text-[#6B7280] border-l-4 border-[#2B4FFF] pl-4 mb-6 italic leading-relaxed">
          {article.shortContent}
        </p>
      )}

      {/* Full content */}
      {(article.htmlContent || article.content) && (
        <div
          className="prose prose-blue max-w-none text-[#0A1628] leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: (article.htmlContent || article.content) as string,
          }}
        />
      )}
    </article>
  );
}
