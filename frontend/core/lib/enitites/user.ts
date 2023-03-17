import { z } from "zod";

const UserSchema = z.object({
    email: z
        .string()
        .email("Please input a valid email."),
    name: z.string(),
});
export type User = z.infer<typeof UserSchema>;
export const validateUser = (data: User) => UserSchema.safeParse(data);
export const parseUser = (data: User) => UserSchema.parse(data);