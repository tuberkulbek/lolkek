import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { OneProductType } from "./types";

export const selectProducts = (
  state: RootState
): OneProductType[] => state.products.allProducts;

export const selectProductsList = createSelector(
  selectProducts,
  (productsList: OneProductType[]) =>
    productsList.map((item) => ({
      ...item,
    }))
);
