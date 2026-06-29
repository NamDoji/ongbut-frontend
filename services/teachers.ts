import { apiFetch } from "./api";
import type { ApiResponse } from "@/types/api";
import type { Teacher } from "@/types/teacher";

export interface TeacherListParams {
  startRecord?: number;
  size?: number;
  keySearch?: string;
}

export async function getTeachers(
  params: TeacherListParams = {}
): Promise<ApiResponse<Teacher[]>> {
  const { startRecord = 0, size = 20, keySearch = "" } = params;
  const qs = new URLSearchParams({
    startRecord: String(startRecord),
    size: String(size),
    keySearch,
  });
  return apiFetch<ApiResponse<Teacher[]>>(`/public/teachers?${qs}`);
}
