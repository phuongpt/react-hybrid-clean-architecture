import { User, UserAuth } from "../../enitites";
import { UserRepository } from "../repositories";


export class SignUpUserCase {
    userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async signUp(
        user: UserAuth,
    ): Promise<User> {
        return this.userRepository.signUp(user);
    }

}
