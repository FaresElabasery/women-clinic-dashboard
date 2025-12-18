import { getSpecificService } from "@/services/services";
import { useQuery } from "@tanstack/react-query";

export default function useOneService(id: string) {
    return useQuery({
        queryKey: ['oneService', id],
        queryFn: () => getSpecificService(id)
    });
}
