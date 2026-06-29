import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { FileText, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Tài liệu",
  description: "Thư viện tài liệu học tập của Ông Bụt AI Education.",
};

export default function DocumentsPage() {
  return (
    <>
      <PageHeader
        title="Tài liệu"
        description="Thư viện bài giảng, đề thi và tài liệu ôn tập đa dạng."
      />
      <section className="py-16 lg:py-24 bg-[#F8F9FC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-10 brand-shadow">
            <div className="w-16 h-16 rounded-2xl bg-[#EEF1FF] flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-[#2B4FFF]" />
            </div>
            <h2 className="text-xl font-bold text-[#2B4FFF] mb-3">
              Thư viện tài liệu
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
              Thư viện tài liệu của chúng tôi bao gồm hàng nghìn bài giảng,
              đề thi, và bài tập thực hành. Đăng nhập để truy cập đầy đủ.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-[#6B7280]">
              <Lock className="w-4 h-4" />
              <span>Yêu cầu đăng nhập để xem tài liệu</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
