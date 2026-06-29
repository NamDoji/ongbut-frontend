import { z } from "zod";

export const consultSchema = z.object({
  fullName: z.string().min(2, "Vui lòng nhập họ tên"),
  phoneNumber: z
    .string()
    .min(9, "Số điện thoại không hợp lệ")
    .max(11, "Số điện thoại không hợp lệ"),
  email: z.string().email("Email không hợp lệ").or(z.literal("")),
  note: z.string().optional(),
});

export type ConsultFormData = z.infer<typeof consultSchema>;

export async function submitConsult(data: ConsultFormData): Promise<{ success: boolean }> {
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://api.ongbut.edu.vn/api/v1";

  const res = await fetch(`${API_BASE_URL}/public/consult`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Gửi thất bại, vui lòng thử lại.");
  }

  return { success: true };
}
