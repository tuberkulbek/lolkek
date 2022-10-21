import { all, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import {
  FilterPayloadTypes,
  WorkerParams
} from "../../commonTypes";
import { fetchGenerator } from "..";

import {
  OneProductType,
  ProductsEnums
} from "../../reducers/product/types";

import {
    productsServiceApi
} from "./request";
import {
  setGetAllProducts,
  setGetOneProduct,
  setLikeOneProduct,
} from "../../reducers/product";

function* getAllProductsWorker({
  payload,
  type,
}: WorkerParams<FilterPayloadTypes>) {
  yield fetchGenerator<FilterPayloadTypes, OneProductType[]>(
    productsServiceApi.getProducts,
    payload,
    setGetAllProducts,
    type
  );
}

function* getOneProductWorker({
  payload,
  type,
}: WorkerParams<number>) {
  yield fetchGenerator<number, OneProductType>(
    productsServiceApi.getOneProduct,
    payload,
    setGetOneProduct,
    type
  );
}

function* likeOneProductWorker({
  payload
}: WorkerParams<number>) {
  yield put(setLikeOneProduct(payload));
}

export function* productsWatcher() {
  yield all([
    takeEvery(
        ProductsEnums.getAllProducts,
        getAllProductsWorker
    ),
    takeLatest(
        ProductsEnums.getOneProduct,
        getOneProductWorker
    ),
    takeLatest(
        ProductsEnums.likeOneProduct,
        likeOneProductWorker
    ),
  ]);
}
