import { Auth, User } from "../../enitites";
import { UserRepository } from "../repositories";


export class SignInUserCase {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async signIn(auth: Auth): Promise<User> {
    return this.userRepository.signIn(auth);
  }
}
