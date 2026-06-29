import { apiFetch } from "./api";
import type { ApiResponse } from "@/types/api";
import type { RankingItem, RankingType } from "@/types/ranking";

export async function getRanking(
  type: RankingType = 0
): Promise<ApiResponse<RankingItem[]>> {
  return apiFetch<ApiResponse<RankingItem[]>>(`/public/ranking?type=${type}`);
}
