import { Skeleton } from "@/components/ui/skeleton";

export function PropertyCardSkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-6 rounded-lg overflow-hidden border border-border">
      {/* Property Image Skeleton */}
      <div className="w-full md:w-2/5 h-[300px] md:h-auto relative">
        <Skeleton className="h-full w-full" />
      </div>

      {/* Property Details Skeleton */}
      <div className="w-full md:w-3/5 p-6 space-y-6">
        {/* Price Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-6 w-64" />
        </div>

        {/* Property Type Skeleton */}
        <Skeleton className="h-6 w-3/4" />

        {/* Two Column Info Skeleton */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-6 w-24" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>

        {/* Two Column Info Skeleton */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-6 w-32" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-6 w-32" />
          </div>
        </div>

        {/* Two Column Info Skeleton */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-6 w-32" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>

        {/* Buttons Skeleton */}
        <div className="flex gap-4 pt-2">
          <Skeleton className="h-10 w-36" />
          <Skeleton className="h-10 w-36" />
        </div>
      </div>
    </div>
  );
}
