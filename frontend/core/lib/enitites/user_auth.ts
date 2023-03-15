import { z } from "zod";

// const UserAuthSchema = z.object({
//     email: z
//         .string()
//         .email("Please input a valid email."),
//     name: z.string(),
//     password: z.string().min(8, { message: "Password should have at least 8 characters" })
// });
// export type UserAuth = z.infer<typeof UserAuthSchema>


export class UserAuth {
    _email: string;
    _password: string;
    _name: string;

    constructor(email: string, password: string, name: string) {
        if (isInvalid(password)) {
            throw new Error("Your password must contains only letter and numbers");
        }

        this._password = password;
        this._email = email;
        this._name = name;
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }
    get name(): string {
        return this._name;
    }
}

function isInvalid(password: string) {
    const passwordRegex = /^[a-zA-Z0-9_.-]*$/;
    return !passwordRegex.test(password);
}
