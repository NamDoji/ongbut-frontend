"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Trophy, Medal } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/common/EmptyState";
import { getRanking } from "@/services/ranking";
import type { RankingType } from "@/types/ranking";
import { cn } from "@/lib/utils";

const TABS: { label: string; type: RankingType }[] = [
  { label: "Tuần này", type: 0 },
  { label: "Tháng này", type: 1 },
  { label: "Tất cả", type: 2 },
];

const MEDAL_COLORS = ["text-yellow-500", "text-gray-400", "text-amber-600"];

function getRankIcon(rank: number) {
  if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-500" />;
  if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
  if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />;
  return (
    <span className="text-sm font-bold text-[#6B7280] w-5 text-center">
      {rank}
    </span>
  );
}

export function RankingClient() {
  const [activeTab, setActiveTab] = useState<RankingType>(0);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["ranking", activeTab],
    queryFn: () => getRanking(activeTab),
  });

  const items = data?.data ?? [];

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-8 bg-white rounded-xl p-1.5 brand-shadow w-fit mx-auto">
        {TABS.map((tab) => (
          <button
            key={tab.type}
            onClick={() => setActiveTab(tab.type)}
            className={cn(
              "px-5 py-2 rounded-lg text-sm font-semibold transition-all",
              activeTab === tab.type
                ? "bg-[#2B4FFF] text-white"
                : "text-[#6B7280] hover:text-[#2B4FFF]"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-16 w-full rounded-xl" />
          ))}
        </div>
      ) : isError ? (
        <EmptyState
          title="Không thể tải bảng vàng"
          description="Vui lòng thử lại sau."
        />
      ) : items.length === 0 ? (
        <EmptyState
          title="Chưa có dữ liệu bảng vàng"
          description="Hãy học chăm để lên bảng vàng nhé!"
        />
      ) : (
        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                "bg-white rounded-xl p-4 brand-shadow flex items-center gap-4",
                i < 3 && "border-l-4",
                i === 0 && "border-l-yellow-400",
                i === 1 && "border-l-gray-300",
                i === 2 && "border-l-amber-500"
              )}
            >
              <div className="w-8 flex items-center justify-center">
                {getRankIcon(i + 1)}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#2B4FFF] text-sm">
                  {item.studentName || `Học sinh #${i + 1}`}
                </p>
                {item.subject && (
                  <p className="text-xs text-[#6B7280]">{item.subject}</p>
                )}
                {item.class && (
                  <p className="text-xs text-[#6B7280]">{item.class}</p>
                )}
              </div>
              {item.score !== undefined && (
                <div className="text-right">
                  <p className="font-bold text-[#2B4FFF] text-lg">
                    {item.score}
                  </p>
                  <p className="text-xs text-[#6B7280]">điểm</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
