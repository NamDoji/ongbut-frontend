import { Inbox } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title?: string;
  description?: string;
  className?: string;
}

export function EmptyState({
  title = "Không có dữ liệu",
  description = "Chưa có thông tin nào để hiển thị.",
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 text-center",
        className
      )}
    >
      <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
        <Inbox className="w-7 h-7 text-gray-400" />
      </div>
      <h3 className="text-base font-semibold text-[#2B4FFF] mb-1">{title}</h3>
      <p className="text-sm text-[#6B7280]">{description}</p>
    </div>
  );
}
