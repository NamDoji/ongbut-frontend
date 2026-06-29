import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Khóa học — ${slug.join("/")}`,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div className="bg-[#F8F9FC] min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/khoa-hoc"
          className="inline-flex items-center gap-1.5 text-[#2B4FFF] text-sm font-medium mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Quay lại danh sách
        </Link>
        <div className="bg-white rounded-2xl p-8 brand-shadow text-center">
          <h1 className="text-2xl font-bold text-[#2B4FFF] mb-3">
            Chi tiết khóa học
          </h1>
          <p className="text-[#6B7280] text-sm">
            Đang cập nhật thông tin cho khóa học:{" "}
            <strong>{slug.join("/")}</strong>
          </p>
          <Link
            href="/lien-he#consult"
            className="inline-block mt-4 px-6 py-2.5 bg-[#2B4FFF] text-white rounded-xl text-sm font-semibold hover:bg-[#1A3ACC] transition-colors"
          >
            Đăng ký tư vấn
          </Link>
        </div>
      </div>
    </div>
  );
}
