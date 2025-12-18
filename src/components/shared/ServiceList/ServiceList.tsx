import type { Service } from "@/interfaces/service";
import ServiceCard from "../ServiceCard/ServiceCard";
import SkeletonCard from "../SkeletonCard/SkeletonCard";

export default function ServiceList({ services, isLoading }: { services?: Service[], isLoading: boolean }) {
    if (isLoading) {
        return <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)}</div>
    }
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                services?.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))
            }
        </div>
    )
}
