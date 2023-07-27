import { appDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { appError } from "../../errors/appErros";
import { ProductsInterface } from "../../interfaces/products";
import { Products } from "../../entities/products.entiti";

const createProductService = async (dadosProducts: Products): Promise<Array<User | number | string | {}>> => {
    const ProductsRepository = appDataSource.getRepository(Products);
    const validationProduct = await ProductsRepository.findOneBy({
      name: dadosProducts.name,
    });
    if (validationProduct) {
      throw new appError("Produto exist", 409);
    }
    const product = ProductsRepository.create(dadosProducts);
    await ProductsRepository.save(product);
  
    return [201, product];
  };

export default createProductService;