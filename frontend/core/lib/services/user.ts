import { Auth, parseUser, User, UserAuth, } from "../enitites";
import { UserRepository } from "../repositories";

export class UserService implements UserRepository {
    async signIn(auth: Auth): Promise<User> {

        return Promise.resolve(parseUser({
            ...auth,
            name: "Unknown"
        }));
    }

    async signUp(auth: UserAuth): Promise<User> {
        return Promise.resolve(parseUser({
            ...auth,
        }));

    }
    async signOut(): Promise<void> {
        return Promise.resolve();
    }

}
