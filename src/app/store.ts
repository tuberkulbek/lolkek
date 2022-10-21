import createSagaMiddleware, { SagaMiddleware } from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import requests from "./reducers/requests";
import products from "./reducers/product";
import { rootWatcher } from "./sagas";


const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    requests,
    products
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const dispatch = store.dispatch;