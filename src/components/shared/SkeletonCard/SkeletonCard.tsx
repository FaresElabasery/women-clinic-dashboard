import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
    return (
        <div className="flex items-center space-x-4 bg-Bg py-9 px-4 rounded-md w-full">
            <div className="space-y-4">
                <Skeleton className="h-6 w-[120px] mb-5" />
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
            <>
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[200px]" />
            </>
        </div>
    )
}
