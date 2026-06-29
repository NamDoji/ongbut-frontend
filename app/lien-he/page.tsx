import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { ConsultForm } from "@/components/home/ConsultForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Liên hệ với đội ngũ Ông Bụt AI Education để được tư vấn miễn phí.",
};

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Hotline",
    value: "0913 999 888",
    sub: "Hỗ trợ 24/7",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@ongbut.edu.vn",
    sub: "Phản hồi trong 2h",
  },
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: "Hà Nội, Việt Nam",
    sub: "Học trực tuyến toàn quốc",
  },
  {
    icon: Clock,
    label: "Giờ làm việc",
    value: "7:00 – 22:00",
    sub: "Từ Thứ 2 đến Chủ nhật",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Liên hệ với chúng tôi"
        description="Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn và hỗ trợ bạn."
      />

      {/* Contact info cards */}
      <section className="py-12 lg:py-16 bg-[#F8F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {CONTACT_INFO.map((info) => (
              <div
                key={info.label}
                className="bg-white rounded-2xl p-5 brand-shadow text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEF1FF] flex items-center justify-center mx-auto mb-3">
                  <info.icon className="w-5 h-5 text-[#2B4FFF]" />
                </div>
                <p className="text-xs text-[#6B7280] mb-1">{info.label}</p>
                <p className="font-semibold text-[#2B4FFF] text-sm">
                  {info.value}
                </p>
                <p className="text-xs text-[#6B7280] mt-0.5">{info.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultForm />
    </>
  );
}
