import { z } from "zod";

const UserAuthSchema = z.object({
    email: z
        .string()
        .email("Please input a valid email."),
    name: z.string().min(1, { message: "Name should not empty." }),
    password: z.string().min(8, { message: "Password should have at least 8 characters." })
});
export type UserAuth = z.infer<typeof UserAuthSchema>
export const validateUserAuth = (data: UserAuth) => UserAuthSchema.safeParse(data);
export const parseUserAuth = (data: UserAuth) => UserAuthSchema.parse(data);
