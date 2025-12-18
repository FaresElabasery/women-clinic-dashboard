import { getAllService } from "@/services/services";
import { useQuery } from "@tanstack/react-query";

export default function useGetService() {
    return useQuery({
        queryKey: ['service'],
        queryFn: getAllService
    });

}
