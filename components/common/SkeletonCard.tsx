import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden brand-shadow">
      <Skeleton className="h-48 w-full" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}

export function SkeletonTeacherCard() {
  return (
    <div className="bg-white rounded-2xl p-6 brand-shadow text-center">
      <Skeleton className="w-24 h-24 rounded-full mx-auto mb-4" />
      <Skeleton className="h-5 w-32 mx-auto mb-2" />
      <Skeleton className="h-4 w-24 mx-auto mb-2" />
      <Skeleton className="h-3 w-full mb-1" />
      <Skeleton className="h-3 w-3/4 mx-auto" />
    </div>
  );
}
