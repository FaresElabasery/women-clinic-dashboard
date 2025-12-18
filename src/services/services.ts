import api from "@/api/axios";
import type { Service } from "@/interfaces/service";
import { toast } from "sonner";

export async function getAllService(): Promise<Service[]> {
    const res = await api.get("/service");
    if (res.data.status !== 'success') {
        toast.error(res.data.message);
        return [];
    }
    return res.data.data.services;
}
export async function getSpecificService(id: string): Promise<Service> {
    const res = await api.get("/service/" + id);
    if (res.data.status !== 'success') {
        toast.error(res.data.message);
        return {} as Service;
    }
    return res.data.data.service;
}
