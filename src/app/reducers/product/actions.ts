import { createAction } from "@reduxjs/toolkit";
import {
  ProductsEnums,
  OneProductType,
} from "./types";

export const productsServiceAction = {
  getAllproductsAction: createAction(ProductsEnums.getAllProducts),
  getOneProductsAction: createAction<number | null>(ProductsEnums.getOneProduct),
  likeOneProductAction: createAction<number | null>(ProductsEnums.likeOneProduct)
}
