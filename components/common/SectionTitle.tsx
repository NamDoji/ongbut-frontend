import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  center?: boolean;
}

export function SectionTitle({
  label,
  title,
  description,
  className,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={cn(center && "text-center", "mb-10 lg:mb-14", className)}>
      {label && (
        <span className="inline-block px-3 py-1 text-xs font-semibold text-[#2B4FFF] bg-blue-50 rounded-full mb-3 uppercase tracking-wide">
          {label}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B4FFF] leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
