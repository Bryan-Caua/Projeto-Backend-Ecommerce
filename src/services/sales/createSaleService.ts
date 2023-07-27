import { appDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { appError } from "../../errors/appErros";
import { sale } from "../../interfaces/sales";
import { Products } from "../../entities/products.entiti";
import { Sales } from "../../entities/sales.entiti";

const createSaleService = async (dadosSale: sale): Promise<Array<User | number | string | {}>> => {
    const saleRepository = appDataSource.getRepository(Sales);
    const ProductsRepository = appDataSource.getRepository(Products);
    const validationProduct = await ProductsRepository.findOneBy({
      name: dadosSale.produto,
    });
    if (!validationProduct) {
      throw new appError("Produto not exist", 409);
    }
    const sale = saleRepository.create(dadosSale);
    await saleRepository.save(sale);
  
    return [201, sale];
  };

export default createSaleService;