import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";
import type { Teacher } from "@/types/teacher";

interface TeacherCardProps {
  teacher: Teacher;
}

export function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <Link href={`/giao-vien/${teacher.username}`}>
      <div className="bg-white rounded-2xl p-6 brand-shadow hover:brand-shadow-lg transition-all group text-center cursor-pointer">
        {/* Avatar */}
        <div className="relative w-24 h-24 mx-auto mb-4">
          {teacher.picture ? (
            <Image
              src={teacher.picture}
              alt={teacher.fullName}
              fill
              className="rounded-full object-cover"
              sizes="96px"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-[#EEF1FF] flex items-center justify-center">
              <User className="w-10 h-10 text-[#2B4FFF]" />
            </div>
          )}
        </div>

        {/* Info */}
        <h3 className="font-bold text-[#2B4FFF] text-base mb-1 group-hover:text-[#2B4FFF] transition-colors">
          {teacher.fullName}
        </h3>

        {teacher.subject && (
          <Badge
            variant="secondary"
            className="text-xs bg-blue-50 text-[#2B4FFF] border-0 mb-2"
          >
            {teacher.subject}
          </Badge>
        )}

        {teacher.exp && (
          <p className="text-xs text-[#6B7280] mb-3">{teacher.exp}</p>
        )}

        {teacher.intro && (
          <p
            className="text-xs text-[#6B7280] line-clamp-2 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: teacher.intro.replace(/<[^>]*>/g, "").slice(0, 100),
            }}
          />
        )}
      </div>
    </Link>
  );
}
