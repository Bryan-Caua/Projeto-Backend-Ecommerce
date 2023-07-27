import { appDataSource } from "../../data-source";
import { Categories } from "../../entities/categories.entiti";
import { Properties } from "../../entities/properties.entiti";
import { Schedules_user_properties } from "../../entities/shedeuls.entiti";
import { appError } from "../../errors/appErros";

const listShedelsService = async (Sechid: string): Promise<any> => {
  const shedelRepository = appDataSource.getRepository(Schedules_user_properties);
  const propertyeRepository = appDataSource.getRepository(Properties);


  const propertyExist = await propertyeRepository.findOneBy({
    id: Sechid,
  });

  if (!propertyExist) {
    throw new appError("Schedel não existe", 404);
  }

 const schedules = await propertyeRepository.findOne(
    {relations: { schedules: true}, where: {id: Sechid}}
 )

  return schedules;
};

export default listShedelsService;
