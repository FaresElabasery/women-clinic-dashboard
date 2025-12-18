import api from "@/api/axios";
import type { Option } from "@/interfaces/service";
import { toast } from "sonner";

export async function getAllServiceOption(): Promise<Option[]> {
  const res = await api.get("sub-service");
  if (res.data.status !== "success") {
    toast.error(res.data.message);
    return [];
  }
  return res.data.data.options;
}
