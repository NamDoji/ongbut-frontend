import type { Metadata } from "next";
import { TeacherDetailClient } from "./TeacherDetailClient";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Giáo viên — ${slug[0]}`,
    description: `Thông tin chi tiết về giáo viên ${slug[0]} tại Ông Bụt AI Education.`,
  };
}

export default async function TeacherDetailPage({ params }: Props) {
  const { slug } = await params;
  const username = slug[0];

  return (
    <div className="bg-[#F8F9FC] min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TeacherDetailClient username={username} />
      </div>
    </div>
  );
}
