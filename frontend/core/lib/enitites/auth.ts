import { z } from "zod";

// const AuthSchema = z.object({
//     email: z
//         .string()
//         .email("Please input a valid email."),
//     password: z.string().min(8, { message: "Password should have at least 8 characters" })
// });

// export type Auth = z.infer<typeof AuthSchema>;



export class Auth {
    _email: string;
    _password: string;

    constructor(email: string, password: string) {
        if (isInvalid(password)) {
            throw new Error("Your password must contains only letter and numbers");
        }

        this._password = password;
        this._email = email;
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }
}

function isInvalid(password: string) {
    const passwordRegex = /^[a-zA-Z0-9_.-]*$/;
    return !passwordRegex.test(password);
}
