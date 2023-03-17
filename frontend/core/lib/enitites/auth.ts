import { z } from "zod";

const AuthSchema = z.object({
    email: z
        .string()
        .email("Please input a valid email."),
    password: z.string().min(8, { message: "Password should have at least 8 characters." })
});

export type Auth = z.infer<typeof AuthSchema>;
export const validateAuth = (data: Auth) => AuthSchema.safeParse(data);
export const parseAuth = (data: Auth) => AuthSchema.parse(data);