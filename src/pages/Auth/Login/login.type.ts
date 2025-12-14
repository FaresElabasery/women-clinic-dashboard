import type z from "zod";
import type { loginSchema } from "./Login.schema";

export type loginType = z.infer<typeof loginSchema>
