import { Request, Response } from "express";
import ListSaleService from "../../services/sales/ListSaleService";

const ListSaleController = async (req: Request, res: Response) => {
  const Products = await ListSaleService();
  return res.json(Products);
};

export default ListSaleController;
