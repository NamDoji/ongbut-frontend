import { apiFetch } from "./api";
import type { ApiResponse } from "@/types/api";
import type { Subject } from "@/types/subject";

export async function getSubjects(): Promise<ApiResponse<Subject[]>> {
  return apiFetch<ApiResponse<Subject[]>>("/public/subjects");
}
