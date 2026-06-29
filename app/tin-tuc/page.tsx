import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { NewsList } from "@/components/news/NewsList";

export const metadata: Metadata = {
  title: "Tin tức",
  description:
    "Cập nhật tin tức, thông báo và bài viết mới nhất từ Ông Bụt AI Education.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="Tin tức"
        description="Cập nhật các tin tức, thông báo và bài viết hữu ích từ đội ngũ Ông Bụt AI."
      />
      <section className="py-12 lg:py-16 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsList />
        </div>
      </section>
    </>
  );
}
