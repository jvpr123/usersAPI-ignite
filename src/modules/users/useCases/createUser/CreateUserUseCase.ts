import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Checar se já existe usuário com email enviado:
    const userAlreadyExists = this.usersRepository.findByEmail(email);

    // Se usuário existir -> lançar mensagem de erro:
    if (userAlreadyExists) {
      throw new Error("mensagem de erro");
    }

    // Se usuário não existir -> criar novo usuário:
    const userCreated = this.usersRepository.create({ name, email });

    // Retornar usuário criado para controller:
    return userCreated;
  }
}

export { CreateUserUseCase };
