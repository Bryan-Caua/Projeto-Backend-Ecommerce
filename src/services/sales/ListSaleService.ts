import { appDataSource } from "../../data-source";
import { Sales } from "../../entities/sales.entiti";

const ListSaleService = async (): Promise<any> => {
  const saleRepository = appDataSource.getRepository(Sales);
  const fetchedSale = await saleRepository.find();

  return fetchedSale;
};

export default ListSaleService;