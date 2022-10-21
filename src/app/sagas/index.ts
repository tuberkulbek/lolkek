import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { all, call, put, spawn } from "redux-saga/effects";
import { DoublePayload, ResponseError } from "../commonTypes";
import { failed, finished, started } from "../reducers/requests";
import { productsWatcher } from "./product";

export function* fetchGenerator<
  Payload,
  ResponseDataType,
  LocalPayload = undefined
>(
  fetcher: (p: Payload) => Promise<Response>,
  payload: Payload,
  action:
    | ActionCreatorWithPayload<ResponseDataType>
    | ActionCreatorWithoutPayload
    | null,
  reqName: string,
  localPayload?: LocalPayload,
  localPayloadAction?: ActionCreatorWithPayload<
    DoublePayload<ResponseDataType, LocalPayload>
  >
) {
  yield put(started({ name: reqName, inProgress: "pending" }));
  try {
    const response: Response = yield call(fetcher, payload);
    const data: ResponseDataType = yield response.json();
    if (!response.ok) throw data;
    else
      yield all([
        action && put(action(data)),
        localPayloadAction &&
          localPayload &&
          put(localPayloadAction({ payload: data, localPayload })),
        put(finished({ name: reqName, inProgress: "success", error: null })),
      ]);
  } catch (error) {
    yield put(
      failed({
        name: reqName,
        inProgress: "failed",
        error: error as ResponseError,
      })
    );
  }
}

export function* rootWatcher() {
  yield all([
    spawn(productsWatcher),
  ]);
}
