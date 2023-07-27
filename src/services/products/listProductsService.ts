import { appDataSource } from "../../data-source";
import { Products } from "../../entities/products.entiti";

const listProductsService = async (): Promise<any> => {
  const productsRepository = appDataSource.getRepository(Products);
  const fetchedProducts = await productsRepository.find();

  return fetchedProducts;
};

export default listProductsService;