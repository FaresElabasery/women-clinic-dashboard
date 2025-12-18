import useGetOptions from "@/hooks/useGetOptions";
import SkeletonServiceDetails from "../SkeletonServiceDetails/SkeletonServiceDetails";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function OptionTable({ id }: { id: string }) {
    const { data, isPending } = useGetOptions()
    const filteredData = data?.filter((item) => item.service === id) || []
    if (isPending) {
        return <SkeletonServiceDetails />
    }
    return (
        <div >
            <DataTable columns={columns} data={filteredData || []} />
        </div>
    )
}