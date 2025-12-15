import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-card"

import data from "./data.json"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className=" *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
            <SectionCards
              title="Total Bookings"
              value={1200}
              icon="/users.svg"
              increase={12.5}
              when="today"
            />
            <SectionCards
              title="Total Orders"
              value={10293}
              icon="/orders.svg"
              increase={12.5}
              when="week"
            />
            <SectionCards
              title="Total sales"
              value={89000}
              icon="/sales.svg"
              increase={12.5}
              when="week"
            />
            <SectionCards
              title="Total Pending Orders"
              value={1200}
              icon="/pending.svg"
              increase={12.5}
              when="year"
            />
          </div>
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <DataTable data={data} />
        </div>
      </div>
    </div>
  )
}
