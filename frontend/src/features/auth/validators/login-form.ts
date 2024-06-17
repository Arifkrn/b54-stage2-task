import { z } from "zod";

export const loginSchema = z.object({
    email: z.string({message: "email harus berupa string"}).email({message: "silahkan masukan email yang valid"}),
    password: z.string({message: "sialhkan masukan password"}).min(4),
})