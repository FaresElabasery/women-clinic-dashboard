import { Badge } from "@/components/ui/badge";
import type { Service } from "@/interfaces/service";
import { Star } from "lucide-react";
import moment from 'moment';
import { Link } from "react-router-dom";

export default function ServiceCard({ service }: { service: Service }) {
    return (
        <Link to={'/services/' + service.id} className="service-card rounded-3xl active:scale-95 hover:scale-105 duration-200 bg-Bg bg-[url('/src/assets/images/Card-bg.svg')] p-4 flex flex-col justify-between bg-cover w-full sm:max-w-[400px] relative">
            {service?.options?.length > 0 ?
                <Badge className="absolute top-0 right-0  rounded-tl-2xl rounded-br-2xl text-xs font-bold px-3 text-text3 ">Has Pricing Options</Badge>
                :
                <Badge className="absolute top-0 right-0  rounded-tl-2xl rounded-br-2xl text-xs font-bold px-3 text-text3 bg-gray">No Options Yet</Badge>
            }
            <div className="space-y-4 mt-1">
                <div className="service-card-header">
                    <h3 className="service-card-title text-2xl font-bold text-Text">{service.name}</h3>
                </div>
                <div className="service-card-content">
                    <p className="service-card-description text-sm text-Text">{service.description}</p>
                </div>
                <div className="service-review flex items-center gap-1">
                    <p>Rating : </p>
                    <span className="text-sm font-bold ">({service.ratingsAverage})</span>
                    <Star size={18} fill="#ffd230" color="#ffd230" className=" text-amber-300   " />
                </div>
            </div>
            <div className="pt-4">
                <p className="text-gray text-xs"><span className="font-semibold">Created at :</span>{moment(service.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                <p className="text-gray text-xs"><span className="font-semibold">Updated at :</span>{moment(service.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
        </Link>
    )
}
