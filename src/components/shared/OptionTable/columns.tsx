import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Option } from "@/interfaces/service"
import { IconDotsVertical } from "@tabler/icons-react"
import type { ColumnDef } from "@tanstack/react-table"



export const columns: ColumnDef<Option>[] = [
    {
        header: () => <div className="font-bold">Name</div>,
        accessorKey: "optionName",
    },
    {
        accessorKey: "type",
        header: () => <div className="font-bold">Type</div>,
    },
    {
        accessorKey: "notes",
        header: () => <div className="font-bold">Notes</div>,
    },
    {
        accessorKey: "price",
        header: () => <div className="font-bold">Price</div>,
    },
    {
        accessorKey: "createdAt",
        header: () => <div className="font-bold">Created At</div>,
    },
    {
        accessorKey: "updatedAt",
        header: () => <div className="font-bold">Updated At</div>,
    },
    {
    id: "actions",
    cell: () => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button
            variant="ghost"
            className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
            size="icon"
            >
            <IconDotsVertical />
            <span className="sr-only">Open menu</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    ),
  },
]