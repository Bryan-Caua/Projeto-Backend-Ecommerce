import { Request, Response } from "express";
import createSaleService from "../../services/sales/createSaleService";
import { sale } from "../../interfaces/sales";


const createSaleController = async(req: Request, res: Response) =>{
    const dadosSale: sale = req.body;
    const [status, NewSale] = await createSaleService(dadosSale);
    return res.status(status as number).json(NewSale);
}

export {createSaleController}