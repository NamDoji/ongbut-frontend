import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export default async function LopHocPage({ params }: Props) {
  const { slug } = await params;
  redirect(`/danh-sach-lop-hoc/${slug.join("/")}`);
}
