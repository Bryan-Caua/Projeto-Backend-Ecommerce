import { Router } from "express";
import {  } from "../controllers/categories/createCategori";
import validationToken from "../middlewares/validationUserToken";
import validationIsAdmin from "../middlewares/validationIsAdmin";
import { createProductsController } from "../controllers/products/createProduct";
import listProductsController from "../controllers/products/listProducts";


const productsRoute = Router();
productsRoute.post(
  "",
  validationToken,
  validationIsAdmin,
    createProductsController
);
productsRoute.get("", listProductsController);
// productsRoute.get("/:id/properties", listPropByProductsController);

export default productsRoute;
