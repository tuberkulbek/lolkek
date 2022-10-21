import { FilterPayloadTypes } from "../../commonTypes";
import { fetchHelper } from "../../helper";
import { BASE_URL } from "../../pathname";
import {
  OneProductType,
} from "../../reducers/product/types";

export const productsServiceApi = {
  getProducts: async () => {
    return fetchHelper<OneProductType[]>(
      BASE_URL,
      "GET"
    );
  },
  getOneProduct: async (id: number) => {
    return fetchHelper<OneProductType>(
      `${BASE_URL}?id=${id}`,
      "GET"
    );
  }
}