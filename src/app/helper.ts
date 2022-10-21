import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store";

export type FetchMethod = "POST" | "GET" | "PUT" | "DELETE" | "PATCH";

export async function fetchHelper<DataType>(
    path: string,
    method: FetchMethod,
    data?: DataType
  ) {
    return fetch(path, {
      method,
      body: JSON.stringify(data),
      credentials: "same-origin",
      headers: new Headers({
        "Content-Type": "application/json",
        Cache: "no-cache",
      }),
    });
  }

  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;