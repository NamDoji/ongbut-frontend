"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsCard } from "./NewsCard";
import { SkeletonCard } from "@/components/common/SkeletonCard";
import { EmptyState } from "@/components/common/EmptyState";
import { getNewsList } from "@/services/news";

const PAGE_SIZE = 9;

export function NewsList() {
  const [page, setPage] = useState(0);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["news", { page, size: PAGE_SIZE }],
    queryFn: () => getNewsList({ page, size: PAGE_SIZE }),
  });

  const articles = data?.data ?? [];

  return (
    <div>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : isError ? (
        <EmptyState
          title="Không thể tải tin tức"
          description="Vui lòng thử lại sau."
        />
      ) : articles.length === 0 ? (
        <EmptyState title="Chưa có tin tức" description="Quay lại sau nhé!" />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <motion.div
                key={article.blogId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <NewsCard article={article} />
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="rounded-lg"
            >
              <ChevronLeft className="w-4 h-4" />
              Trước
            </Button>
            <span className="text-sm text-[#6B7280] px-2">
              Trang {page + 1}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => p + 1)}
              disabled={articles.length < PAGE_SIZE}
              className="rounded-lg"
            >
              Tiếp
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
