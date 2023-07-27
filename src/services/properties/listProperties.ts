import { appDataSource } from "../../data-source";
import { Properties } from "../../entities/properties.entiti";

const listPropertiesService = async (): Promise<any> => {
  const propertieRepository = appDataSource.getRepository(Properties);
  const properties = await propertieRepository.find();

  return properties;
};

export default listPropertiesService;
