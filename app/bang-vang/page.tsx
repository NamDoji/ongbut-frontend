import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { RankingClient } from "./RankingClient";

export const metadata: Metadata = {
  title: "Bảng vàng",
  description:
    "Bảng vàng thành tích học sinh xuất sắc tại Ông Bụt AI Education.",
};

export default function RankingPage() {
  return (
    <>
      <PageHeader
        title="Bảng vàng"
        description="Tôn vinh những học sinh xuất sắc, nỗ lực và đạt thành tích cao."
      />
      <section className="py-12 lg:py-16 bg-[#F8F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RankingClient />
        </div>
      </section>
    </>
  );
}
