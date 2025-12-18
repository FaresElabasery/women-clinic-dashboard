import OptionTable from "@/components/shared/OptionTable/OptionTable";
import ServiceDetailsCard from "@/components/shared/ServiceDetailsCard/ServiceDetailsCard";
import SkeletonServiceDetails from "@/components/shared/SkeletonServiceDetails/SkeletonServiceDetails";
import { Button } from "@/components/ui/button";
import useGetOptions from "@/hooks/useGetOptions";
import useOneService from "@/hooks/useOneService";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

export default function ServiceDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: service, isPending, error } = useOneService(id || '')
  const { data: options, isPending: isPendingOptions } = useGetOptions()


  if (isPending || isPendingOptions) return <SkeletonServiceDetails />
  if (error) toast.error(error.message)
  if (!service || !options) return <div className="text-5xl font-bold flex-center h-[60vh] flex-col gap-4">Service not found <Button onClick={() => navigate('/services')}>Go Back</Button> </div>
  return (
    <div className="@container/main container py-4 flex flex-1 flex-col gap-2">
      <h1 className="text-3xl font-bold mb-3">Service Details</h1>
      <ServiceDetailsCard service={service} />
      <div className="flex flex-col gap-2 bg-Bg bg-[url('assets/images/Card-bg.svg')] p-4 rounded-md">
        <h2 className="text-2xl font-bold">Options</h2>
        <OptionTable id={service.id} />
      </div>
    </div>
  )
}
