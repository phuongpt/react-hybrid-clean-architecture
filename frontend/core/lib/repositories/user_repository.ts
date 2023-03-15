import { Auth, UserAuth, User } from "../enitites";

export interface UserRepository {
    signUp: (userAuth: UserAuth) => Promise<User>;
    signIn: (auth: Auth) => Promise<User>;
}
