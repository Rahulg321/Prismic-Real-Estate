import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="block-space">
      <div className="big-container">
        {/* Hero Image Skeleton */}
        <div className="w-full mb-8 md:mb-12">
          <Skeleton className="w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-lg" />
        </div>

        {/* Title and Tagline Skeleton */}
        <div className="mb-8">
          <Skeleton className="h-10 md:h-12 lg:h-14 w-3/4 mb-3" />
          <Skeleton className="h-6 md:h-8 w-2/3 mb-2" />
          <Skeleton className="h-5 w-1/2" />
        </div>

        {/* Badges Skeleton */}
        <div className="flex gap-3 mb-8">
          <Skeleton className="h-10 w-28" />
          <Skeleton className="h-10 w-28" />
        </div>

        {/* Property Details Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-muted rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Skeleton className="w-6 h-6 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <Skeleton className="h-6 w-24 mb-2" />
                  <Skeleton className="h-5 w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content Skeleton */}
        <div className="mb-12 space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>

        {/* Call to Action Skeleton */}
        <div className="mt-16 md:mt-24 mb-8">
          <div className="rounded-lg p-8 md:p-12 bg-muted text-center">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-5 w-96 mx-auto mb-4" />
            <Skeleton className="h-5 w-80 mx-auto mb-8" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Skeleton className="h-12 w-40" />
              <Skeleton className="h-12 w-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
