import { Auth, User, UserAuth, } from "../enitites";
import { UserRepository } from "../repositories";

export class UserService implements UserRepository {
    async signIn(auth: Auth): Promise<User> {
        return Promise.resolve(
            new User("Sample Service", "User", "sampleservice@email.com"),
        );
        // return Promise.resolve(UserSchema.parseAsync(auth));
    }

    async signUp(auth: UserAuth): Promise<User> {
        return Promise.resolve(auth);
        // return Promise.resolve(UserSchema.parseAsync(auth));
    }

}
