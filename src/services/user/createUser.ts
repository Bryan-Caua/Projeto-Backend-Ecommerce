import { IUser } from "../../interfaces/users";
import { appDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { appError } from "../../errors/appErros";

const createUserService = async (
  userData: IUser
): Promise<Array<User | number | string | {}>> => {
  const userRepository = appDataSource.getRepository(User);
  const validationEmail = await userRepository.findOneBy({
    email: userData.email,
  });
  if (validationEmail) {
    throw new appError("Email already exist", 409);
  }
  const user = userRepository.create(userData);
  await userRepository.save(user);

  const { password, ...Newuser } = user;

  return [201, Newuser];
};

export default createUserService;
