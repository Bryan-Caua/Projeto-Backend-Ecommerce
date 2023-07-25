import { Request, Response } from "express";
import { sale } from "../../interfaces/sales";
import createProductService from "../../services/products/createProductsService";
import { ProductsInterface } from "../../interfaces/products";


const createProductsController = async(req: Request, res: Response) =>{
    const dadosProduct: ProductsInterface = req.body;
    const [status, NewProduct] = await createProductService(dadosProduct);
    return res.status(status as number).json(NewProduct);
}

export {createProductsController}