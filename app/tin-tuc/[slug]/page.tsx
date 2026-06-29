import type { Metadata } from "next";
import { NewsDetail } from "@/components/news/NewsDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: "Chi tiết bài viết",
    description: `Bài viết ${slug} — Ông Bụt AI Education`,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div className="bg-[#F8F9FC] min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NewsDetail blogId={slug} />
      </div>
    </div>
  );
}
