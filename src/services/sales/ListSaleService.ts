import AppDataSource from "../../data-source";
import { Sales } from "../../entities/sales.entiti";

const ListSaleService = async (): Promise<any> => {
  const saleRepository = AppDataSource.getRepository(Sales);
  const fetchedSale = await saleRepository.find();

  return fetchedSale;
};

export default ListSaleService;