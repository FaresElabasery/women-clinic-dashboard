import { IconTrendingUp } from "@tabler/icons-react"

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type CardProps = {
  title: string
  value: number
  icon: string
  increase: number
  when: "today" | "week" | "month" | "year"
}
export function SectionCards({ title, value, icon, increase, when }: CardProps) {
  return (
      <Card className="@container/card">
        <CardHeader className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <CardDescription>{title}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {value}
            </CardTitle>
          </div>
          <img src={icon} alt={title} className="size-15" />
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <CardAction className="flex items-center">
            <div className="flex items-center font-semibold text-[#00B69B]">
              <IconTrendingUp className="mr-1" />
              {increase}%
            </div>
            <span className="text-sm text-gray-600 ms-1"> Up from {when}</span>
          </CardAction>
        </CardFooter>
      </Card>
  )
}
