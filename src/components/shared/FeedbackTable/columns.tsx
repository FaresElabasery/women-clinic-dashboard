import type { Review } from "@/interfaces/Review"
import type { ColumnDef } from "@tanstack/react-table"



export const columns: ColumnDef<Review>[] = [
    {
        header:()=> <div className="font-bold">Name</div>,
        accessorKey: "user.name",
    },
    {
        accessorKey: "rating",
        header:()=> <div className="font-bold">Rating</div>,
    },
    {
        accessorKey: "review",
        header:()=> <div className="font-bold">Review</div>,
    },
    {
        accessorKey: "createdAt",
        header:()=> <div className="font-bold">Created At</div>,
    },
    {
        accessorKey: "updatedAt",
        header:()=> <div className="font-bold">Updated At</div>,
    },
]