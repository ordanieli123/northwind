import { Dispatch, PayloadAction, configureStore } from "@reduxjs/toolkit";
import { AppState } from "./store";

export const logger =
  (store: ReturnType<typeof configureStore<AppState>>) =>
  (next: Dispatch) =>
  (action: PayloadAction) => {
    console.log("before the reducer..");
    console.log(store.getState().user);
    const result = next(action);
    console.log("after the reducer..");
    console.log(store.getState().user);
    return result;
  };
