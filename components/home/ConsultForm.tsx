"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { consultSchema, type ConsultFormData, submitConsult } from "@/services/consult";

export function ConsultForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ConsultFormData>({
    resolver: zodResolver(consultSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: ConsultFormData) => {
    try {
      setError(null);
      await submitConsult(data);
      setSubmitted(true);
      reset();
    } catch {
      setError("Gửi thất bại. Vui lòng thử lại hoặc liên hệ hotline.");
    }
  };

  return (
    <section
      id="consult"
      className="py-16 lg:py-24 gradient-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-8"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#F0C040] bg-white/10 rounded-full mb-3 uppercase tracking-wide border border-white/20">
            Tư vấn miễn phí
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Đăng ký nhận tư vấn
          </h2>
          <p className="text-blue-200 text-sm leading-relaxed">
            Để lại thông tin, chuyên gia của chúng tôi sẽ liên hệ trong vòng
            24 giờ.
          </p>
        </div>

        <div
          className="bg-white rounded-2xl p-6 sm:p-8 brand-shadow-lg"
        >
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#2B4FFF] mb-2">
                Gửi thành công!
              </h3>
              <p className="text-[#6B7280] text-sm">
                Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-[#2B4FFF] text-white rounded-xl h-10 px-6 text-sm"
              >
                Gửi thêm
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#2B4FFF] mb-1.5">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <Input
                  {...register("fullName")}
                  placeholder="Nguyễn Văn A"
                  className="h-11 rounded-xl border-gray-200"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2B4FFF] mb-1.5">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <Input
                  {...register("phoneNumber")}
                  placeholder="0913 999 888"
                  type="tel"
                  className="h-11 rounded-xl border-gray-200"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2B4FFF] mb-1.5">
                  Email
                </label>
                <Input
                  {...register("email")}
                  placeholder="email@example.com"
                  type="email"
                  className="h-11 rounded-xl border-gray-200"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2B4FFF] mb-1.5">
                  Ghi chú
                </label>
                <textarea
                  {...register("note")}
                  placeholder="Bạn muốn tư vấn về điều gì?"
                  rows={3}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2B4FFF] resize-none"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-[#2B4FFF] hover:bg-[#1A3ACC] text-white font-bold rounded-xl text-sm"
              >
                {isSubmitting ? (
                  "Đang gửi..."
                ) : (
                  <>
                    Gửi đăng ký
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
