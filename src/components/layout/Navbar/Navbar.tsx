import { NavUser } from "@/components/nav-user";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { IconSearch } from "@tabler/icons-react";

const data = {
  user: {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
}
export default function Navbar() {
  return (
    <div className="w-full bg-Bg py-4 border-b border-b-gray-200">
      <div className="container flex items-center">
        <SidebarTrigger className="-ml-1 mr-4" />
        <div className="flex justify-between items-center w-full">
          <div className="relative">
            <IconSearch size={15} className="absolute left-2 top-1/2 transform text-gray -translate-y-1/2" />
            <Input type="search" className="ps-8 md:w-[300px] rounded-full" placeholder="Search" />
          </div>
          <div>
            <NavUser user={data.user} />
          </div>
        </div>
      </div>
    </div>
  )
}
