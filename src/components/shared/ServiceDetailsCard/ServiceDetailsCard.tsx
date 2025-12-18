import type { Service } from "@/interfaces/service";
import { Star } from "lucide-react";
import { useState } from "react";
import FeedbackTable from "../FeedbackTable/FeedbackTable";

export default function ServiceDetailsCard({ service }: { service: Service }) {
    const [showRating, setShowRating] = useState(false)
    return (
        <div key={service?._id} className="flex flex-col gap-2 bg-Bg bg-[url('assets/images/Card-bg.svg')] p-4 rounded-md">
            <p className="text-3xl font-bold text-primary">{service?.name}</p>
            <p className="text-md ">
                <span className="font-bold">
                    Description:
                </span> {service?.description}
            </p>
            <div className="flex items-center gap-1">
                <p className="font-bold ">Rating : </p>
                <span className="text-sm font-medium">({service?.ratingsAverage})</span>
                {[...Array(Math.round(service?.ratingsAverage || 0))].map((_, index) => (
                    <Star key={index} size={18} fill="#ffd230" color="#ffd230" className=" text-amber-300   " />
                ))}
            </div>
            <div className="service-rating flex items-center gap-1">
                <p className="font-bold ">Reviews : </p>
                <span className="text-sm font-medium">({service?.ratingsQuantity || 0})</span>
                <button onClick={() => setShowRating(!showRating)} className="text-sm font-medium text-primary underline">Show Reviews</button>
            </div>
            {showRating && <FeedbackTable serviceId={service?._id || ''} />}
        </div>
    )
}
