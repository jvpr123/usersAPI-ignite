import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("mensagem de erro");
    } else if (!user.admin) {
      throw new Error("mensagem de erro");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
