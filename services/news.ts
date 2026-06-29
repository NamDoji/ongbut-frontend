import { apiFetch } from "./api";
import type { ApiResponse } from "@/types/api";
import type { BlogItem, BlogDetail } from "@/types/news";

export interface NewsListParams {
  categoryId?: string;
  page?: number;
  size?: number;
}

export async function getNewsList(
  params: NewsListParams = {}
): Promise<ApiResponse<BlogItem[]>> {
  const { categoryId = "", page = 0, size = 10 } = params;
  const qs = new URLSearchParams({
    categoryId,
    page: String(page),
    size: String(size),
  });
  return apiFetch<ApiResponse<BlogItem[]>>(`/public/blog?${qs}`);
}

export async function getNewsDetail(
  blogId: string
): Promise<ApiResponse<BlogDetail>> {
  return apiFetch<ApiResponse<BlogDetail>>(`/public/blog/${blogId}`);
}
