import useOneService from "@/hooks/useOneService";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function FeedbackTable({serviceId}:{serviceId:string}) {
    const {data}=useOneService(serviceId)    
    return (
        <div >
            <DataTable columns={columns} data={data?.review || []} />
        </div>
    )
}