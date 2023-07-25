import { Router } from "express";
import {  } from "../controllers/categories/createCategori";
import validationToken from "../middlewares/validationUserToken";
import validationIsAdmin from "../middlewares/validationIsAdmin";
import { createSaleController } from "../controllers/sales/createSale";
import ListSaleController from "../controllers/sales/listSale";

const salesRoute = Router();
salesRoute.post(
  "",
  validationToken,
  validationIsAdmin,
  createSaleController
);
salesRoute.get("", ListSaleController);

export default salesRoute;
