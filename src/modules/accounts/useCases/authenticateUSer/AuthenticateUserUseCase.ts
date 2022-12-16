import { compare } from "bcrypt";
import { AppError } from "shared/errors/AppError";
import { sign } from "jsonwebtoken";
import { IUsersRepository } from "modules/accounts/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password not found");
    }
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password not found");
    }
    // acd32bd8c1fafd5e6d08f376089cf8f1
    // process.env.JWT_SECRET
    const token = sign({}, "acd32bd8c1fafd5e6d08f376089cf8f1", {
      subject: user.id,
      expiresIn: "1d",
    });

    return {
      token,
      user: { email: user.email, name: user.name },
    };
  }
}

export { AuthenticateUserUseCase };
