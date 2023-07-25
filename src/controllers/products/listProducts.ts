import { Request, Response } from "express";
import listProductsService from "../../services/products/listProductsService";

const listProductsController = async (req: Request, res: Response) => {
  const Products = await listProductsService();
  return res.json(Products);
};

export default listProductsController;
