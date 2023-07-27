import { appDataSource } from "../../data-source";
import { Categories } from "../../entities/categories.entiti";

const listCategoriesService = async (): Promise<any> => {
  const categorieRepository = appDataSource.getRepository(Categories);
  const categories = await categorieRepository.find();

  return categories;
};

export default listCategoriesService;
