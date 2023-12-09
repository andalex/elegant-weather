import { API_STATUS } from "../types.js";

export type TDataContextState =
  | { status: API_STATUS.LOADING | API_STATUS.ERROR; data: null }
  | { status: API_STATUS.LOADED; data: any };
