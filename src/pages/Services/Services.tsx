import ServiceList from "@/components/shared/ServiceList/ServiceList";
import useGetService from "@/hooks/useGetService";
import { toast } from "sonner";

export default function Services() {

  const { data: services, isPending, error } = useGetService()
  if (error) toast.error('Error Network')
  return (

    <div className="@container/main container py-4 flex flex-1 flex-col gap-2">
      <h1 className="text-3xl font-bold mb-3">Services</h1>
      <ServiceList services={services} isLoading={isPending} />
    </div>

  )
}
