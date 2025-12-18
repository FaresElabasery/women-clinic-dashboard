import { getAllServiceOption } from "@/services/serviceOptions";
import { useQuery } from "@tanstack/react-query";

export default function useGetOptions() {
    return useQuery({
        queryKey: ['options'],
        queryFn: getAllServiceOption
    });

}
