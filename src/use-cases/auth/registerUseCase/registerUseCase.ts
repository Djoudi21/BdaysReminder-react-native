import { AuthRepository } from "../../../repositories/interfaces/authRepisotory.ts";
import { NewUser } from "../../../types.ts";

export class RegisterUserUseCase {
  authRepository: AuthRepository;
  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }
  execute(user: NewUser) {
    return this.authRepository.register(user);
  }
}
