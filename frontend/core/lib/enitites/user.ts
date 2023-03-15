// import { z } from "zod";

// export const UserSchema = z.object({
//     email: z
//         .string()
//         .email("Please input a valid email."),
//     name: z.string(),
// });
// export type User = z.infer<typeof UserSchema>


export class User {
    _name: string;
    _email: string;

    constructor(name: string, lastName: string, email: string) {
        if (isEmptyOrNull(name) || isEmptyOrNull(email)) {
            throw new Error("You must fill name and email");
        }

        this._name = name.toLocaleLowerCase();
        this._email = email.toLocaleLowerCase();
    }

    get email(): string {
        return this._email;
    }

    get name(): string {
        return `${this._name}`;
    }
}

function isEmptyOrNull(word: string) {
    return !word || word.trim().length === 0;
}
