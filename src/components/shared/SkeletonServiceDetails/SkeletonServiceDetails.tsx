import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonServiceDetails() {
    return (
        <div className="p-4">
            <div className="flex items-center space-x-4 bg-Bg py-9 px-4 rounded-md w-full">
                <div className="space-y-4">
                    <Skeleton className="h-6 w-[120px] mb-5" />
                    <Skeleton className="h-4 w-[550px]" />
                    <Skeleton className="h-4 w-[550px]" />
                    <Skeleton className="h-4 w-[120px]" />
                    <Skeleton className="h-4 w-[120px]" />
                </div>
            </div>
        </div>
    )
}
