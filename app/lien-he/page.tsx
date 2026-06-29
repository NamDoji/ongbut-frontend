"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const consultSchema = z.object({
  fullName: z.string().min(2, { message: "Vui lòng nhập họ tên / Please enter your name" }),
  phoneNumber: z
    .string()
    .min(9, { message: "Số điện thoại không hợp lệ / Invalid phone number" })
    .max(12, { message: "Số điện thoại không hợp lệ / Invalid phone number" }),
  email: z
    .string()
    .email({ message: "Email không hợp lệ / Invalid email" })
    .or(z.literal("")),
  course: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof consultSchema>;

const COURSES = [
  "2K13 (Lớp 12)",
  "2K14 (Lớp 11)",
  "2K15 (Lớp 10)",
  "2K16 (Lớp 9)",
  "2K17 (Lớp 8)",
  "2K18 (Lớp 7)",
  "2K19 (Lớp 6)",
  "2K20 (Lớp 5)",
];

export default function ContactPage() {
  const { lang, t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(consultSchema),
    defaultValues: { email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setError(null);
      const API_BASE_URL =
        process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.ongbut.edu.vn/api/v1";
      const res = await fetch(`${API_BASE_URL}/public/consult`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      reset();
    } catch {
      setError(
        t(
          "Gửi thất bại. Vui lòng liên hệ trực tiếp qua hotline 0904 290 583.",
          "Submission failed. Please contact us directly at 0904 290 583."
        )
      );
    }
  };

  const CONTACT_INFO = [
    {
      icon: Phone,
      label: t("Hotline", "Hotline"),
      value: "0904 290 583",
      sub: t("Hỗ trợ 7:00 – 22:00 hằng ngày", "Support 7:00 AM – 10:00 PM daily"),
      href: "tel:0904290583",
    },
    {
      icon: MessageCircle,
      label: "Zalo",
      value: "0904 290 583",
      sub: t("Nhắn tin Zalo trực tiếp", "Message via Zalo"),
      href: "https://zalo.me/0904290583",
    },
    {
      icon: Mail,
      label: "Email",
      value: "cuong@ongbut.vn",
      sub: t("Phản hồi trong 24h", "Reply within 24h"),
      href: "mailto:cuong@ongbut.vn",
    },
    {
      icon: MapPin,
      label: t("Địa chỉ", "Address"),
      value: t(
        "SH1 tòa B, Hà Nội Paragon",
        "SH1 Block B, Hanoi Paragon"
      ),
      sub: t("Ngõ 86 Duy Tân, Cầu Giấy, Hà Nội", "No. 86 Duy Tan Alley, Cau Giay, Hanoi"),
      href: "https://maps.google.com/?q=Hà+Nội+Paragon",
    },
    {
      icon: Clock,
      label: t("Giờ làm việc", "Office Hours"),
      value: "7:00 – 22:00",
      sub: t("Thứ 2 – Chủ nhật", "Monday – Sunday"),
      href: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative pt-28 pb-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A2342 0%, #1a3a6b 60%, #0d2d5e 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#2B4FFF]/20 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#F0C040] bg-white/10 rounded-full mb-4 uppercase tracking-wide border border-white/20">
              {t("Liên hệ", "Contact")}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t("Liên hệ với chúng tôi", "Contact Us")}
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed max-w-2xl mx-auto">
              {t(
                "Đội ngũ chuyên gia sẵn sàng tư vấn và hỗ trợ bạn. Liên hệ ngay để được tư vấn miễn phí.",
                "Our team of experts is ready to advise and support you. Contact us now for a free consultation."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 bg-[#F8F9FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {CONTACT_INFO.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEF1FF] flex items-center justify-center mx-auto mb-3">
                  <info.icon className="w-5 h-5 text-[#2B4FFF]" />
                </div>
                <p className="text-xs text-[#6B7280] mb-1 font-medium">{info.label}</p>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="font-semibold text-[#2B4FFF] text-xs hover:underline block"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="font-semibold text-[#2B4FFF] text-xs">{info.value}</p>
                )}
                <p className="text-xs text-[#6B7280] mt-0.5 leading-tight">{info.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section id="consult" className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="text-xl font-bold text-[#0A2342] mb-4">
                {t("Địa chỉ văn phòng", "Office Address")}
              </h2>
              <div className="bg-[#F8F9FC] rounded-xl p-4 mb-4 border border-gray-100">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2B4FFF] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#0A2342] text-sm">
                      {t(
                        "SH1 tòa B, Chung cư Hà Nội Paragon",
                        "SH1 Block B, Hanoi Paragon Apartment"
                      )}
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      {t(
                        "Ngõ 86 Duy Tân, Cầu Giấy, Hà Nội",
                        "No. 86 Duy Tan Alley, Cau Giay, Hanoi"
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  src="https://maps.google.com/maps?q=Hà+Nội+Paragon,+ngõ+86+Duy+Tân,+Cầu+Giấy,+Hà+Nội&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ông Bụt AI - Office Location"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="text-xl font-bold text-[#0A2342] mb-4">
                {t("Đăng ký tư vấn miễn phí", "Register for Free Consultation")}
              </h2>

              <div className="bg-[#F8F9FC] rounded-2xl p-6 border border-gray-100">
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-[#2B4FFF] mb-2">
                      {t("Gửi thành công!", "Submitted Successfully!")}
                    </h3>
                    <p className="text-[#6B7280] text-sm mb-4">
                      {t(
                        "Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.",
                        "We will contact you within 24 hours."
                      )}
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="bg-[#2B4FFF] text-white rounded-xl h-10 px-6 text-sm"
                    >
                      {t("Gửi thêm", "Submit Another")}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-[#0A2342] mb-1.5">
                        {t("Họ và tên", "Full Name")} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        {...register("fullName")}
                        placeholder={t("Nguyễn Văn A", "John Doe")}
                        className="h-11 rounded-xl border-gray-200"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-[#0A2342] mb-1.5">
                        {t("Số điện thoại", "Phone Number")} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        {...register("phoneNumber")}
                        placeholder="0904 290 583"
                        type="tel"
                        className="h-11 rounded-xl border-gray-200"
                      />
                      {errors.phoneNumber && (
                        <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-[#0A2342] mb-1.5">
                        Email
                      </label>
                      <Input
                        {...register("email")}
                        placeholder="email@example.com"
                        type="email"
                        className="h-11 rounded-xl border-gray-200"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Course */}
                    <div>
                      <label className="block text-sm font-medium text-[#0A2342] mb-1.5">
                        {t("Khóa học quan tâm", "Course of Interest")}
                      </label>
                      <select
                        {...register("course")}
                        className="w-full h-11 px-4 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#2B4FFF] text-[#374151]"
                      >
                        <option value="">
                          {t("-- Chọn khóa học --", "-- Select a course --")}
                        </option>
                        {COURSES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-[#0A2342] mb-1.5">
                        {t("Tin nhắn", "Message")}
                      </label>
                      <textarea
                        {...register("message")}
                        placeholder={t(
                          "Bạn muốn tư vấn về điều gì?",
                          "What would you like to consult about?"
                        )}
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
                        t("Đang gửi...", "Sending...")
                      ) : (
                        <>
                          {t("Gửi đăng ký", "Submit")}
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Direct contact note */}
              <div className="mt-4 p-4 bg-[#EEF1FF] rounded-xl">
                <p className="text-sm text-[#2B4FFF] text-center">
                  {t(
                    "Hoặc liên hệ trực tiếp:",
                    "Or contact us directly:"
                  )}{" "}
                  <a href="tel:0904290583" className="font-bold hover:underline">
                    📞 0904 290 583
                  </a>
                  {" · "}
                  <a href="mailto:cuong@ongbut.vn" className="font-bold hover:underline">
                    ✉️ cuong@ongbut.vn
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
